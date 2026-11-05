# ATALA_LAGUNAS_VICTOR_223230_C2_T4_INTEGRACION

**Estudiante:** Víctor Gerardo Atala Lagunas  
**Matrícula:** `223230`  
**Materia:** Minería de Datos — Unidad 2 (Del Texto al Significado)  
**Proyecto:** Sistema Fullstack de Recuperación de Información Comparativo (BM25 vs. Embeddings vs. Híbrido RRF + Reranking) sobre Corpus de 55 Documentos Extraídos mediante Web Scraping ($\ge 100$ palabras/documento) y Benchmark de Concurrencia (1 a 50 Usuarios Concurrentes, Latencia `p50` y `p95`).

---

## 1. Arquitectura del Sistema Fullstack

El sistema se estructuró bajo principios de **Clean Architecture** separando la adquisición de datos por Web Scraping, la capa de dominio de motores de recuperación, el servidor REST multihilo y el cliente Frontend:

```text
ATALA_LAGUNAS_VICTOR_223230_C2_T4_INTEGRACION/
├── scraper/
│   └── scraper_corpus.py            # Pipeline de Web Scraping y validación de los 55 documentos (>=100 palabras)
├── data/
│   └── corpus_55_documentos.json    # Corpus estructurado con texto, conteo de palabras, categoría y URL fuente
├── backend/
│   ├── engine_service.py            # Implementación de Motor 1 (BM25), Motor 2 (Embeddings 384d) y Motor 3 (Híbrido RRF + Reranker)
│   └── server.py                    # Servidor HTTP REST multihilo (ThreadingHTTPServer) y servidor de estáticos
├── frontend/
│   ├── index.html                   # Interfaz web Fullstack de 4 vistas (Comparador, Concurrencia p50/p95, Eval IR, Corpus)
│   ├── styles.css                   # Diseño editorial sobrio (sin colores neón, tipografía Fraunces + IBM Plex)
│   ├── app.js                       # Cliente REST asíncrono con soporte offline/fallback
│   └── fallback_data.js             # Datos precalculados para inspección instantánea sin servidor
├── benchmarks/
│   ├── benchmark_concurrencia.py    # Simulación de estrés para 1, 5, 10, 25 y 50 usuarios concurrentes (p50, p95, QPS)
│   └── resultados_concurrencia.json # Telemetría exportada de las pruebas de concurrencia
├── ATALA_LAGUNAS_VICTOR_223230_C2_T4_INTEGRACION.pdf # Reporte técnico ejecutivo completo
├── AI_USAGE.md                      # Declaración de uso de herramientas de asistencia
└── requirements.txt                 # Dependencias del proyecto
```

---

## 2. Los 3 Motores de Búsqueda Implementados

1. **Motor 1 — Léxico Probabilístico (Okapi BM25, Tarea 1):**
   - Indexación unificada de `titulo + texto` con normalización Unicode NFC/NFD, eliminación de diacríticos, filtrado de stopwords preservando negaciones y lematización morfológica.
   - Parámetros calibrados: $k_1 = 1.5$, $b = 0.75$.
2. **Motor 2 — Semántico Denso con Embeddings (Sentence-BERT / FastText 384d, Tarea 2):**
   - Codificación vectorial densa normalizada ($\|\mathbf{v}\|_2 = 1$) en $\mathbb{R}^{384}$ que captura equivalencias conceptuales y paráfrasis sin solapamiento léxico (*"problemas de agua"* $\leftrightarrow$ *"crisis hídrica y estiaje"*).
3. **Motor 3 — Búsqueda Híbrida de Dos Etapas (RRF + Cross-Encoder Reranking, Tarea 3):**
   - **Etapa 1 (Recuperación Híbrida):** Combina el ranking de BM25 (filtrando candidatos con $\text{score} > 0$) y el ranking denso mediante **Reciprocal Rank Fusion (RRF)** con $k = 60$.
   - **Etapa 2 (Reranking):** Reordena el top-10 de candidatos mediante atención cruzada consulta-documento.

---

## 3. Instrucciones de Ejecución

### Paso 1: Generar / Validar el Corpus de 55 Documentos vía Web Scraping
```bash
python scraper/scraper_corpus.py
```

### Paso 2: Ejecutar el Benchmark de Concurrencia (1 a 50 Usuarios Concurrentes)
```bash
python benchmarks/benchmark_concurrencia.py
```

### Paso 3: Iniciar el Servidor Fullstack (Backend REST + Frontend Web)
```bash
python backend/server.py
```
Abrir en el navegador: `http://127.0.0.1:8085` (también se puede abrir `frontend/index.html` directamente).
