# -*- coding: utf-8 -*-
"""
backend/server.py
Servidor Fullstack Multihilo (ThreadingHTTPServer) que expone la API REST JSON
para los 3 motores de búsqueda y sirve la aplicación web interactiva (Frontend).

Endpoints REST:
  - GET  /api/health        -> Estado del servidor, tamaño del corpus y vocabulario
  - GET  /api/corpus        -> Lista los 55 documentos scrapeados con fuentes y conteo de palabras
  - GET  /api/search        -> Busca con el motor elegido (?q=...&engine=bm25|embeddings|hibrido&k=10)
  - GET  /api/compare       -> Ejecuta los 3 motores en paralelo para una consulta y compara latencia/ranking
  - GET  /api/eval          -> Devuelve la evaluación IR oficial (nDCG@5, MRR, R@5) de los 3 motores
  - GET  /api/benchmark     -> Devuelve los resultados de concurrencia (1 a 50 usuarios: p50, p95, QPS)
"""

import json
import mimetypes
import sys
import urllib.parse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

from backend.engine_service import MotorBusquedaFullstack, asdict

FRONTEND_DIR = BASE_DIR / "frontend"
BENCHMARK_JSON_PATH = BASE_DIR / "benchmarks" / "resultados_concurrencia.json"

MOTOR_GLOBAL = MotorBusquedaFullstack()


class FullstackSearchHandler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, format_str: str, *args: object) -> None:
        # Silenciar logs por petición durante pruebas de estrés de 50 usuarios concurrentes
        pass

    def _send_json(self, status_code: int, payload: object) -> None:
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(raw)

    def _send_static(self, file_path: Path) -> None:
        if not file_path.exists() or not file_path.is_file():
            self._send_json(404, {"error": "Recurso no encontrado"})
            return
        raw = file_path.read_bytes()
        mime_type, _ = mimetypes.guess_type(str(file_path))
        if not mime_type:
            mime_type = "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", f"{mime_type}; charset=utf-8" if "text" in mime_type or "javascript" in mime_type else mime_type)
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        params = urllib.parse.parse_qs(parsed.query)

        if path == "/api/health":
            self._send_json(200, {
                "status": "ok",
                "total_documentos": MOTOR_GLOBAL.N,
                "vocabulario_unico": len(MOTOR_GLOBAL.df),
                "avgdl_tokens": round(MOTOR_GLOBAL.avgdl, 2),
                "dim_embeddings": MOTOR_GLOBAL.dim_denso
            })
            return

        if path == "/api/corpus":
            docs = [asdict(d) for d in MOTOR_GLOBAL.documentos]
            self._send_json(200, {
                "total": len(docs),
                "min_palabras": min(d["num_palabras"] for d in docs),
                "promedio_palabras": round(sum(d["num_palabras"] for d in docs) / len(docs), 1),
                "documentos": docs
            })
            return

        if path == "/api/search":
            q = params.get("q", ["problemas de agua"])[0].strip()
            engine = params.get("engine", ["hibrido"])[0].strip()
            k = int(params.get("k", ["8"])[0])
            res = MOTOR_GLOBAL.buscar(q, motor=engine, top_k=k)
            self._send_json(200, res)
            return

        if path == "/api/compare":
            q = params.get("q", ["problemas de agua"])[0].strip()
            k = int(params.get("k", ["5"])[0])
            r_bm25 = MOTOR_GLOBAL.buscar(q, motor="bm25", top_k=k)
            r_emb = MOTOR_GLOBAL.buscar(q, motor="embeddings", top_k=k)
            r_hib = MOTOR_GLOBAL.buscar(q, motor="hibrido", top_k=k)
            self._send_json(200, {
                "consulta": q,
                "motores": {
                    "bm25": r_bm25,
                    "embeddings": r_emb,
                    "hibrido": r_hib
                }
            })
            return

        if path == "/api/eval":
            self._send_json(200, MOTOR_GLOBAL.evaluar_todos_los_motores())
            return

        if path == "/api/benchmark":
            if BENCHMARK_JSON_PATH.exists():
                data = json.loads(BENCHMARK_JSON_PATH.read_text(encoding="utf-8"))
                self._send_json(200, data)
            else:
                self._send_json(200, {"mensaje": "Benchmark aún no ejecutado"})
            return

        # Servir archivos del Frontend
        if path in ("/", "/index.html"):
            self._send_static(FRONTEND_DIR / "index.html")
            return
        rel_path = path.lstrip("/")
        candidate = (FRONTEND_DIR / rel_path).resolve()
        if str(candidate).startswith(str(FRONTEND_DIR.resolve())):
            self._send_static(candidate)
            return

        self._send_json(404, {"error": "Ruta no encontrada"})


def iniciar_servidor(host: str = "127.0.0.1", port: int = 8085) -> ThreadingHTTPServer:
    server = ThreadingHTTPServer((host, port), FullstackSearchHandler)
    return server


if __name__ == "__main__":
    puerto = 8085
    srv = iniciar_servidor("127.0.0.1", puerto)
    print(f"Servidor Fullstack de Búsqueda activo en http://127.0.0.1:{puerto}")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        srv.server_close()
