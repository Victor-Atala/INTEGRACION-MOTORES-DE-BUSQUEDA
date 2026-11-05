# Declaración de Uso de Inteligencia Artificial (`AI_USAGE.md`)

- **Estudiante:** Víctor Gerardo Atala Lagunas (`223230`)
- **Entrega:** `ATALA_LAGUNAS_VICTOR_223230_C2_T4_INTEGRACION`

## Registro de Uso y Modificaciones Realizadas

| Componente / Archivo | Herramienta Consultada | Qué proporcionó la herramienta | Qué se validó, modificó e integró |
|---|---|---|---|
| `scraper/scraper_corpus.py` | Asistente de código (Antigravity) | Estructura base de petición HTTP con `urllib.request` y limpieza de etiquetas HTML con expresiones regulares. | Se curaron y validaron 55 documentos temáticos de Chiapas garantizando que todos superen las 100 palabras (112 a 138 palabras por documento) y conservando su URL fuente original (`url_fuente`). |
| `backend/engine_service.py` | Asistente de código (Antigravity) | Plantilla de clases `dataclass` y estructura de servicio para unificar los motores de las Tareas 1, 2 y 3. | Se integraron las fórmulas exactas de Okapi BM25 ($k_1=1.5, b=0.75$), similitud coseno sobre embeddings densos de 384 dimensiones, Reciprocal Rank Fusion ($k=60$) con filtro `solo_positivos=True` y métricas `nDCG@5`, `MRR` y `R@5`. |
| `benchmarks/benchmark_concurrencia.py` | Asistente de código (Antigravity) | Uso de `ThreadPoolExecutor` para lanzar trabajadores concurrentes en Python. | Se configuraron los 5 niveles de carga (`1, 5, 10, 25, 50` usuarios concurrentes) y el cálculo estadístico de percentiles `p50`, `p95`, `p99` y `Throughput (QPS)`. |
| `frontend/` (`index.html`, `styles.css`, `app.js`) | Asistente de código (Antigravity) | Maquetación de pestañas y tablas comparativas HTML/CSS/JS. | Se aplicó una paleta editorial sobria sin colores neón (`#F7F3EB`, `#1C3257`, `#AA4B37`, `#1E6B42`) y se conectó con los endpoints REST `/api/compare`, `/api/benchmark`, `/api/eval` y `/api/corpus`. |
