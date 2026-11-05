// Archivo autogenerado por benchmark_concurrencia.py
window.FALLBACK_DATA = {
  "benchmark": {
    "niveles_usuarios": [
      1,
      5,
      10,
      25,
      50
    ],
    "niveles": [
      {
        "usuarios_concurrentes": 1,
        "motor": "bm25",
        "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
        "total_peticiones": 12,
        "p50_ms": 0.51,
        "p95_ms": 0.57,
        "p99_ms": 0.57,
        "media_ms": 0.51,
        "qps": 1941.8
      },
      {
        "usuarios_concurrentes": 1,
        "motor": "embeddings",
        "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
        "total_peticiones": 12,
        "p50_ms": 4.32,
        "p95_ms": 4.81,
        "p99_ms": 4.88,
        "media_ms": 4.4,
        "qps": 227.3
      },
      {
        "usuarios_concurrentes": 1,
        "motor": "hibrido",
        "nombre_motor": "Motor 3 · Híbrido (RRF k=60 + Reranker)",
        "total_peticiones": 12,
        "p50_ms": 12.36,
        "p95_ms": 15.26,
        "p99_ms": 15.92,
        "media_ms": 12.49,
        "qps": 80.1
      },
      {
        "usuarios_concurrentes": 5,
        "motor": "bm25",
        "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
        "total_peticiones": 60,
        "p50_ms": 1.31,
        "p95_ms": 2.17,
        "p99_ms": 2.54,
        "media_ms": 1.4,
        "qps": 3568.2
      },
      {
        "usuarios_concurrentes": 5,
        "motor": "embeddings",
        "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
        "total_peticiones": 60,
        "p50_ms": 11.45,
        "p95_ms": 17.66,
        "p99_ms": 22.59,
        "media_ms": 12.15,
        "qps": 411.4
      },
      {
        "usuarios_concurrentes": 5,
        "motor": "hibrido",
        "nombre_motor": "Motor 3 · Híbrido (RRF k=60 + Reranker)",
        "total_peticiones": 60,
        "p50_ms": 30.0,
        "p95_ms": 45.71,
        "p99_ms": 47.99,
        "media_ms": 31.79,
        "qps": 157.3
      },
      {
        "usuarios_concurrentes": 10,
        "motor": "bm25",
        "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
        "total_peticiones": 120,
        "p50_ms": 2.22,
        "p95_ms": 3.2,
        "p99_ms": 3.98,
        "media_ms": 2.3,
        "qps": 4070.0
      },
      {
        "usuarios_concurrentes": 10,
        "motor": "embeddings",
        "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
        "total_peticiones": 120,
        "p50_ms": 20.75,
        "p95_ms": 30.55,
        "p99_ms": 34.25,
        "media_ms": 21.95,
        "qps": 425.7
      },
      {
        "usuarios_concurrentes": 10,
        "motor": "hibrido",
        "nombre_motor": "Motor 3 · Híbrido (RRF k=60 + Reranker)",
        "total_peticiones": 120,
        "p50_ms": 53.29,
        "p95_ms": 72.01,
        "p99_ms": 80.07,
        "media_ms": 54.19,
        "qps": 172.4
      },
      {
        "usuarios_concurrentes": 25,
        "motor": "bm25",
        "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
        "total_peticiones": 200,
        "p50_ms": 4.96,
        "p95_ms": 8.29,
        "p99_ms": 9.76,
        "media_ms": 5.22,
        "qps": 3738.6
      },
      {
        "usuarios_concurrentes": 25,
        "motor": "embeddings",
        "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
        "total_peticiones": 200,
        "p50_ms": 43.23,
        "p95_ms": 68.98,
        "p99_ms": 82.6,
        "media_ms": 45.93,
        "qps": 425.2
      },
      {
        "usuarios_concurrentes": 25,
        "motor": "hibrido",
        "nombre_motor": "Motor 3 · Híbrido (RRF k=60 + Reranker)",
        "total_peticiones": 200,
        "p50_ms": 117.69,
        "p95_ms": 179.13,
        "p99_ms": 199.46,
        "media_ms": 123.72,
        "qps": 157.9
      },
      {
        "usuarios_concurrentes": 50,
        "motor": "bm25",
        "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
        "total_peticiones": 400,
        "p50_ms": 9.83,
        "p95_ms": 15.79,
        "p99_ms": 18.12,
        "media_ms": 10.25,
        "qps": 2994.0
      },
      {
        "usuarios_concurrentes": 50,
        "motor": "embeddings",
        "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
        "total_peticiones": 400,
        "p50_ms": 81.08,
        "p95_ms": 133.45,
        "p99_ms": 171.78,
        "media_ms": 86.88,
        "qps": 353.1
      },
      {
        "usuarios_concurrentes": 50,
        "motor": "hibrido",
        "nombre_motor": "Motor 3 · Híbrido (RRF k=60 + Reranker)",
        "total_peticiones": 400,
        "p50_ms": 221.56,
        "p95_ms": 335.99,
        "p99_ms": 418.39,
        "media_ms": 230.5,
        "qps": 133.1
      }
    ],
    "curvas_por_motor": {
      "bm25": {
        "usuarios": [
          1,
          5,
          10,
          25,
          50
        ],
        "p50_ms": [
          0.51,
          1.31,
          2.22,
          4.96,
          9.83
        ],
        "p95_ms": [
          0.57,
          2.17,
          3.2,
          8.29,
          15.79
        ],
        "p99_ms": [
          0.57,
          2.54,
          3.98,
          9.76,
          18.12
        ],
        "media_ms": [
          0.51,
          1.4,
          2.3,
          5.22,
          10.25
        ],
        "qps": [
          1941.8,
          3568.2,
          4070.0,
          3738.6,
          2994.0
        ]
      },
      "embeddings": {
        "usuarios": [
          1,
          5,
          10,
          25,
          50
        ],
        "p50_ms": [
          4.32,
          11.45,
          20.75,
          43.23,
          81.08
        ],
        "p95_ms": [
          4.81,
          17.66,
          30.55,
          68.98,
          133.45
        ],
        "p99_ms": [
          4.88,
          22.59,
          34.25,
          82.6,
          171.78
        ],
        "media_ms": [
          4.4,
          12.15,
          21.95,
          45.93,
          86.88
        ],
        "qps": [
          227.3,
          411.4,
          425.7,
          425.2,
          353.1
        ]
      },
      "hibrido": {
        "usuarios": [
          1,
          5,
          10,
          25,
          50
        ],
        "p50_ms": [
          12.36,
          30.0,
          53.29,
          117.69,
          221.56
        ],
        "p95_ms": [
          15.26,
          45.71,
          72.01,
          179.13,
          335.99
        ],
        "p99_ms": [
          15.92,
          47.99,
          80.07,
          199.46,
          418.39
        ],
        "media_ms": [
          12.49,
          31.79,
          54.19,
          123.72,
          230.5
        ],
        "qps": [
          80.1,
          157.3,
          172.4,
          157.9,
          133.1
        ]
      }
    },
    "evaluacion_ir": {
      "total_documentos": 55,
      "total_consultas_qrels": 12,
      "resumen_motores": [
        {
          "codigo": "bm25",
          "motor": "Motor 1 · BM25 (Léxico)",
          "nDCG@5": 0.6996,
          "MRR": 0.7917,
          "R@5": 0.6486,
          "nDCG_lexica": 1.0,
          "nDCG_mixta": 0.7874,
          "nDCG_semantica": 0.2945,
          "latencia_media_ms": 0.052
        },
        {
          "codigo": "embeddings",
          "motor": "Motor 2 · Embeddings (Denso)",
          "nDCG@5": 0.8105,
          "MRR": 0.9167,
          "R@5": 0.8806,
          "nDCG_lexica": 0.8291,
          "nDCG_mixta": 0.7584,
          "nDCG_semantica": 0.9195,
          "latencia_media_ms": 1.063
        },
        {
          "codigo": "hibrido",
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "nDCG@5": 0.9711,
          "MRR": 1.0,
          "R@5": 0.9625,
          "nDCG_lexica": 1.0,
          "nDCG_mixta": 0.9508,
          "nDCG_semantica": 0.9989,
          "latencia_media_ms": 4.404
        }
      ],
      "detalle_consultas": [
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "UPCh",
          "tipo": "lexica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d07"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "canon del sumidero",
          "tipo": "lexica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d05"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "problemas de agua",
          "tipo": "semantica",
          "nDCG@5": 0.8835,
          "MRR": 1.0,
          "R@5": 0.75,
          "top1_doc": "d13"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "temblor de tierra",
          "tipo": "semantica",
          "nDCG@5": 0.0,
          "MRR": 0.0,
          "R@5": 0.0,
          "top1_doc": "d11"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "enfermedades transmitidas por mosquitos",
          "tipo": "semantica",
          "nDCG@5": 0.0,
          "MRR": 0.0,
          "R@5": 0.0,
          "top1_doc": "d50"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "sequia y cultivos",
          "tipo": "mixta",
          "nDCG@5": 0.9558,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d04"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "exportacion de cafe y cacao",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d12"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "inteligencia artificial y robotica",
          "tipo": "mixta",
          "nDCG@5": 0.8404,
          "MRR": 1.0,
          "R@5": 0.6,
          "top1_doc": "d14"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "turismo cultural",
          "tipo": "mixta",
          "nDCG@5": 0.5476,
          "MRR": 0.5,
          "R@5": 0.6,
          "top1_doc": "d34"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "energia limpia y presas hidroelectricas",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d15"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "conservacion de fauna y selva lacandona",
          "tipo": "mixta",
          "nDCG@5": 0.6259,
          "MRR": 1.0,
          "R@5": 0.5,
          "top1_doc": "d16"
        },
        {
          "motor": "Motor 1 · BM25 (Léxico)",
          "codigo": "bm25",
          "consulta": "infraestructura carretera y puentes",
          "tipo": "mixta",
          "nDCG@5": 0.5419,
          "MRR": 1.0,
          "R@5": 0.3333,
          "top1_doc": "d10"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "UPCh",
          "tipo": "lexica",
          "nDCG@5": 0.6581,
          "MRR": 1.0,
          "R@5": 0.6667,
          "top1_doc": "d07"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "canon del sumidero",
          "tipo": "lexica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d05"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "problemas de agua",
          "tipo": "semantica",
          "nDCG@5": 0.7585,
          "MRR": 1.0,
          "R@5": 0.75,
          "top1_doc": "d50"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "temblor de tierra",
          "tipo": "semantica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d06"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "enfermedades transmitidas por mosquitos",
          "tipo": "semantica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d11"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "sequia y cultivos",
          "tipo": "mixta",
          "nDCG@5": 0.6653,
          "MRR": 0.5,
          "R@5": 1.0,
          "top1_doc": "d45"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "exportacion de cafe y cacao",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d12"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "inteligencia artificial y robotica",
          "tipo": "mixta",
          "nDCG@5": 0.8133,
          "MRR": 1.0,
          "R@5": 0.8,
          "top1_doc": "d14"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "turismo cultural",
          "tipo": "mixta",
          "nDCG@5": 0.489,
          "MRR": 1.0,
          "R@5": 0.6,
          "top1_doc": "d44"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "energia limpia y presas hidroelectricas",
          "tipo": "mixta",
          "nDCG@5": 0.858,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d33"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "conservacion de fauna y selva lacandona",
          "tipo": "mixta",
          "nDCG@5": 0.4834,
          "MRR": 0.5,
          "R@5": 0.75,
          "top1_doc": "d39"
        },
        {
          "motor": "Motor 2 · Embeddings (Denso)",
          "codigo": "embeddings",
          "consulta": "infraestructura carretera y puentes",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d10"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "UPCh",
          "tipo": "lexica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d07"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "canon del sumidero",
          "tipo": "lexica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d05"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "problemas de agua",
          "tipo": "semantica",
          "nDCG@5": 0.9967,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d13"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "temblor de tierra",
          "tipo": "semantica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d06"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "enfermedades transmitidas por mosquitos",
          "tipo": "semantica",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d11"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "sequia y cultivos",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d04"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "exportacion de cafe y cacao",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d12"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "inteligencia artificial y robotica",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d14"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "turismo cultural",
          "tipo": "mixta",
          "nDCG@5": 0.9245,
          "MRR": 1.0,
          "R@5": 0.8,
          "top1_doc": "d09"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "energia limpia y presas hidroelectricas",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d15"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "conservacion de fauna y selva lacandona",
          "tipo": "mixta",
          "nDCG@5": 0.7314,
          "MRR": 1.0,
          "R@5": 0.75,
          "top1_doc": "d16"
        },
        {
          "motor": "Motor 3 · Híbrido (RRF + Reranker)",
          "codigo": "hibrido",
          "consulta": "infraestructura carretera y puentes",
          "tipo": "mixta",
          "nDCG@5": 1.0,
          "MRR": 1.0,
          "R@5": 1.0,
          "top1_doc": "d10"
        }
      ]
    }
  },
  "eval": {
    "total_documentos": 55,
    "total_consultas_qrels": 12,
    "resumen_motores": [
      {
        "codigo": "bm25",
        "motor": "Motor 1 · BM25 (Léxico)",
        "nDCG@5": 0.6996,
        "MRR": 0.7917,
        "R@5": 0.6486,
        "nDCG_lexica": 1.0,
        "nDCG_mixta": 0.7874,
        "nDCG_semantica": 0.2945,
        "latencia_media_ms": 0.052
      },
      {
        "codigo": "embeddings",
        "motor": "Motor 2 · Embeddings (Denso)",
        "nDCG@5": 0.8105,
        "MRR": 0.9167,
        "R@5": 0.8806,
        "nDCG_lexica": 0.8291,
        "nDCG_mixta": 0.7584,
        "nDCG_semantica": 0.9195,
        "latencia_media_ms": 1.063
      },
      {
        "codigo": "hibrido",
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "nDCG@5": 0.9711,
        "MRR": 1.0,
        "R@5": 0.9625,
        "nDCG_lexica": 1.0,
        "nDCG_mixta": 0.9508,
        "nDCG_semantica": 0.9989,
        "latencia_media_ms": 4.404
      }
    ],
    "detalle_consultas": [
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "UPCh",
        "tipo": "lexica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d07"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "canon del sumidero",
        "tipo": "lexica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d05"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "problemas de agua",
        "tipo": "semantica",
        "nDCG@5": 0.8835,
        "MRR": 1.0,
        "R@5": 0.75,
        "top1_doc": "d13"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "temblor de tierra",
        "tipo": "semantica",
        "nDCG@5": 0.0,
        "MRR": 0.0,
        "R@5": 0.0,
        "top1_doc": "d11"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "enfermedades transmitidas por mosquitos",
        "tipo": "semantica",
        "nDCG@5": 0.0,
        "MRR": 0.0,
        "R@5": 0.0,
        "top1_doc": "d50"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "sequia y cultivos",
        "tipo": "mixta",
        "nDCG@5": 0.9558,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d04"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "exportacion de cafe y cacao",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d12"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "inteligencia artificial y robotica",
        "tipo": "mixta",
        "nDCG@5": 0.8404,
        "MRR": 1.0,
        "R@5": 0.6,
        "top1_doc": "d14"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "turismo cultural",
        "tipo": "mixta",
        "nDCG@5": 0.5476,
        "MRR": 0.5,
        "R@5": 0.6,
        "top1_doc": "d34"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "energia limpia y presas hidroelectricas",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d15"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "conservacion de fauna y selva lacandona",
        "tipo": "mixta",
        "nDCG@5": 0.6259,
        "MRR": 1.0,
        "R@5": 0.5,
        "top1_doc": "d16"
      },
      {
        "motor": "Motor 1 · BM25 (Léxico)",
        "codigo": "bm25",
        "consulta": "infraestructura carretera y puentes",
        "tipo": "mixta",
        "nDCG@5": 0.5419,
        "MRR": 1.0,
        "R@5": 0.3333,
        "top1_doc": "d10"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "UPCh",
        "tipo": "lexica",
        "nDCG@5": 0.6581,
        "MRR": 1.0,
        "R@5": 0.6667,
        "top1_doc": "d07"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "canon del sumidero",
        "tipo": "lexica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d05"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "problemas de agua",
        "tipo": "semantica",
        "nDCG@5": 0.7585,
        "MRR": 1.0,
        "R@5": 0.75,
        "top1_doc": "d50"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "temblor de tierra",
        "tipo": "semantica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d06"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "enfermedades transmitidas por mosquitos",
        "tipo": "semantica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d11"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "sequia y cultivos",
        "tipo": "mixta",
        "nDCG@5": 0.6653,
        "MRR": 0.5,
        "R@5": 1.0,
        "top1_doc": "d45"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "exportacion de cafe y cacao",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d12"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "inteligencia artificial y robotica",
        "tipo": "mixta",
        "nDCG@5": 0.8133,
        "MRR": 1.0,
        "R@5": 0.8,
        "top1_doc": "d14"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "turismo cultural",
        "tipo": "mixta",
        "nDCG@5": 0.489,
        "MRR": 1.0,
        "R@5": 0.6,
        "top1_doc": "d44"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "energia limpia y presas hidroelectricas",
        "tipo": "mixta",
        "nDCG@5": 0.858,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d33"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "conservacion de fauna y selva lacandona",
        "tipo": "mixta",
        "nDCG@5": 0.4834,
        "MRR": 0.5,
        "R@5": 0.75,
        "top1_doc": "d39"
      },
      {
        "motor": "Motor 2 · Embeddings (Denso)",
        "codigo": "embeddings",
        "consulta": "infraestructura carretera y puentes",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d10"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "UPCh",
        "tipo": "lexica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d07"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "canon del sumidero",
        "tipo": "lexica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d05"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "problemas de agua",
        "tipo": "semantica",
        "nDCG@5": 0.9967,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d13"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "temblor de tierra",
        "tipo": "semantica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d06"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "enfermedades transmitidas por mosquitos",
        "tipo": "semantica",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d11"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "sequia y cultivos",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d04"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "exportacion de cafe y cacao",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d12"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "inteligencia artificial y robotica",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d14"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "turismo cultural",
        "tipo": "mixta",
        "nDCG@5": 0.9245,
        "MRR": 1.0,
        "R@5": 0.8,
        "top1_doc": "d09"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "energia limpia y presas hidroelectricas",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d15"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "conservacion de fauna y selva lacandona",
        "tipo": "mixta",
        "nDCG@5": 0.7314,
        "MRR": 1.0,
        "R@5": 0.75,
        "top1_doc": "d16"
      },
      {
        "motor": "Motor 3 · Híbrido (RRF + Reranker)",
        "codigo": "hibrido",
        "consulta": "infraestructura carretera y puentes",
        "tipo": "mixta",
        "nDCG@5": 1.0,
        "MRR": 1.0,
        "R@5": 1.0,
        "top1_doc": "d10"
      }
    ]
  },
  "corpus": {
    "total": 55,
    "min_palabras": 115,
    "promedio_palabras": 142.5,
    "documentos": [
      {
        "id": "d01",
        "titulo": "Lluvias torrenciales provocan inundaciones severas en Tuxtla Gutiérrez",
        "categoria": "Hidrología y Clima",
        "url_fuente": "https://www.chiapasparalelo.com/noticias/chiapas/2025/lluvias-tuxtla-inundaciones",
        "dominio": "www.chiapasparalelo.com",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 124,
        "texto": "Las fuertes precipitaciones pluviales registradas durante la tarde y noche provocaron inundaciones severas en más de doce colonias del sur y oriente de Tuxtla Gutiérrez. El desbordamiento parcial de arroyos urbanos como El Sabinal y el colapso de alcantarillas por acumulación de residuos sólidos dejaron decenas de vehículos varados sobre el Libramiento Sur y el Bulevar Ángel Albino Corzo. Elementos del Sistema Estatal de Protección Civil activaron los protocolos de emergencia y exhortaron a la ciudadanía a no cruzar calles anegadas ni corrientes de agua rápidas. Brigadas municipales desplegaron bombas de achique en las zonas bajas de Terán y Patria Nueva, mientras se habilitaron tres refugios temporales preventivos para atender a las familias cuyas viviendas sufrieron filtraciones de lodo y pérdida de enseres domésticos."
      },
      {
        "id": "d02",
        "titulo": "Crisis hídrica y escasez de agua potable golpean la región de Los Altos",
        "categoria": "Hidrología y Clima",
        "url_fuente": "https://www.jornada.com.mx/estados/2025/crisis-hidrica-altos-chiapas",
        "dominio": "www.jornada.com.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 119,
        "texto": "La crisis hídrica en la región de Los Altos de Chiapas se agrava de manera alarmante durante la presente temporada de estiaje. El desabasto del líquido vital afecta directamente a más de cuarenta mil habitantes en barrios periféricos y comunidades indígenas de la zona alta, donde el suministro por red entubada se ha reducido a un solo día cada dos semanas. Especialistas hidrológicos y autoridades municipales atribuyen la severa escasez a la prolongada sequía meteorológica, a la deforestación de los bosques de niebla que recargan los manantiales naturales y a la falta de mantenimiento preventivo de los pozos profundos. Ante la emergencia, las familias se ven obligadas a contratar pipas particulares a costos elevados o recolectar agua de lluvia."
      },
      {
        "id": "d03",
        "titulo": "Café de especialidad de Chiapas rompe récord histórico de exportación a Europa y Asia",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.eleconomista.com.mx/estados/cafe-chiapas-record-exportacion-2025",
        "dominio": "www.eleconomista.com.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 121,
        "texto": "El café arábica de especialidad cultivado bajo sombra en las montañas de Chiapas rompió su récord histórico de exportación durante el presente ciclo agrícola, impulsado por una creciente demanda en tostadores selectos de Alemania, Bélgica, Japón y Corea del Sur. Los pequeños productores organizados en cooperativas de la Sierra Madre y la región Frailesca celebraron un incremento del veinticinco por ciento en los precios internacionales por quintal pergamino gracias a las certificaciones orgánicas y de comercio justo. El grano chiapaneco, reconocido por su denominación de origen, acidez brillante y notas aromáticas a chocolate y cítricos, se cultiva entre los mil doscientos y mil setecientos metros sobre el nivel del mar, consolidando al estado como el principal productor nacional de café sustentable."
      },
      {
        "id": "d04",
        "titulo": "Sequía prolongada amenaza cultivos de maíz y frijol en la región fronteriza",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.eluniversal.com.mx/estados/sequia-cultivos-maiz-chiapas-2025",
        "dominio": "www.eluniversal.com.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 120,
        "texto": "Una sequía agrícola prolongada y el retraso atípico del régimen de lluvias amenazan gravemente los cultivos de temporal de maíz blanco y frijol negro en los municipios de la región fronteriza y la depresión central de Chiapas. Organizaciones de agricultores y comisariados ejidales de La Trinitaria, Frontera Comalapa y Chicomuselo reportan pérdidas preliminares de hasta el cuarenta por ciento en las hectáreas sembradas durante el primer ciclo productivo. El estrés térmico e hídrico impidió el desarrollo normal de la mazorca en etapas críticas de floración. Los campesinos solicitaron de manera urgente a la Secretaría de Agricultura la activación del seguro por daños climáticos catastróficos, así como la entrega de semilla resistente a la sequía e insumos de riego por goteo."
      },
      {
        "id": "d05",
        "titulo": "Afluencia turística crece significativamente en el Parque Nacional Cañón del Sumidero",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.gob.mx/conanp/prensa/turismo-canon-del-sumidero-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 117,
        "texto": "El Parque Nacional Cañón del Sumidero registró la visita de más de doscientos veinte mil turistas nacionales e internacionales durante el reciente periodo vacacional, representando un repunte económico histórico para los prestadores de servicios de Chiapa de Corzo y Tuxtla Gutiérrez. Los recorridos fluviales en lancha por el cauce del río Grijalva, flanqueado por paredes calcáreas verticales que alcanzan hasta mil metros de altura, así como el avistamiento de cocodrilos de río, monos araña y aves acuáticas, constituyen los principales atractivos ecológicos del área natural protegida. Guardaparques de la Comisión Nacional de Áreas Naturales Protegidas reforzaron los operativos de recolección de residuos flotantes y vigilancia ambiental en los cinco miradores panorámicos terrestres para garantizar un ecoturismo ordenado."
      },
      {
        "id": "d06",
        "titulo": "Sismo de magnitud 5.1 se registra frente a las costas de Chiapas sin dejar daños",
        "categoria": "Hidrología y Clima",
        "url_fuente": "http://www.ssn.unam.mx/sismicidad/reportes-especiales/chiapas-costa-2025",
        "dominio": "www.ssn.unam.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 120,
        "texto": "Un sismo de magnitud 5.1 en la escala de magnitud de momento se registró durante la madrugada del martes con epicentro localizado en el océano Pacífico, a cuarenta y dos kilómetros al suroeste de Ciudad Hidalgo y frente a las costas del Soconusco en Chiapas. De acuerdo con el informe técnico preliminar del Servicio Sismológico Nacional, el movimiento telúrico tuvo una profundidad focal de treinta y cinco kilómetros, originado por la interacción convergente entre la placa de Cocos y la placa Norteamericana. Las unidades municipales de Protección Civil en Tapachula, Huixtla, Mapastepec y Tonalá activaron los barridos de monitoreo en hospitales, puentes y edificios públicos, confirmando saldo blanco sin daños estructurales ni víctimas tras la sacudida percibida de forma moderada."
      },
      {
        "id": "d07",
        "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
        "dominio": "www.upchiapas.edu.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 157,
        "texto": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto rendimiento y unidades de procesamiento gráfico (GPUs) de última generación. Esta infraestructura tecnológica permitirá a estudiantes e investigadores desarrollar proyectos aplicados de aprendizaje automático, procesamiento de lenguaje natural, visión por computadora y modelado predictivo orientados a resolver problemáticas del sector agroindustrial y ambiental del sureste mexicano. Durante la ceremonia académica, el cuerpo docente destacó que el nuevo centro impulsará la formación de talento especializado en arquitecturas Transformer, motores de búsqueda semántica y robótica autónoma en estrecha vinculación con la industria. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d08",
        "titulo": "Repunta la producción de cacao criollo en el Soconusco con enfoque en chocolate artesanal",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.gob.mx/agricultura/articulos/cacao-real-del-soconusco-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 117,
        "texto": "La producción de cacao fino de aroma en la región histórica del Soconusco repuntó un dieciocho por ciento este año tras varios ciclos agrícolas a la baja ocasionados por plagas fúngicas como la moniliasis. Cooperativas de cacaoteros de Tuxtla Chico, Cacahoatán y Tapachula han apostado por la rehabilitación genética de plantaciones de cacao criollo nativo y por el procesamiento directo de pasta y barras de chocolate artesanal de origen para mercados gourmet nacionales y europeos. Mediante técnicas de fermentación controlada en cajas de madera y secado solar uniforme, los productores han logrado elevar la calidad organoléptica del grano, triplicando el valor agregado que reciben las familias campesinas frente a la venta tradicional de materia prima sin procesar."
      },
      {
        "id": "d09",
        "titulo": "San Cristóbal de las Casas se consolida como destino cultural y gastronómico internacional",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.turismochiapas.gob.mx/destinos/san-cristobal-de-las-casas-cultura",
        "dominio": "www.turismochiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 116,
        "texto": "La ciudad colonial de San Cristóbal de las Casas, enclavada en el valle de Jovel a más de dos mil cien metros de altitud, se consolida como uno de los destinos culturales y gastronómicos más vibrantes de América Latina. Sus andadores peatonales empedrados, templos barrocos como Santo Domingo de Guzmán, museos comunitarios y cafeterías de especialidad atraen a viajeros de todo el mundo durante todo el año. El arte textil tradicional elaborado en telar de cintura por mujeres artesanas tzotziles y tzeltales de municipios vecinos como Chamula y Zinacantán, junto con la joyería en ámbar de Simojovel y la cocina coleta de influencia indígena y española, protagonizan la oferta cultural que impulsa la economía turística regional."
      },
      {
        "id": "d10",
        "titulo": "Avanza obra de rehabilitación y modernización en la carretera Tuxtla-Costa",
        "categoria": "Infraestructura y Transporte",
        "url_fuente": "https://www.gob.mx/sct/prensa/modernizacion-carretera-tuxtla-costa-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 152,
        "texto": "Los trabajos de rehabilitación asfáltica, ampliación de acotamientos y estabilización de taludes en el corredor carretero que conecta la capital Tuxtla Gutiérrez con la región Istmo-Costa a través de Ocozocoautla y Arriaga registran un avance físico superior al setenta y cinco por ciento. La obra de infraestructura vial, supervisada por ingenieros de caminos y puentes, busca reducir en cuarenta minutos los tiempos de traslado de carga pesada y transporte de pasajeros, además de mejorar sustancialmente la seguridad vial para miles de automovilistas que transitan diariamente hacia las playas de Tonalá y Puerto Arista. El proyecto incluye la renovación de señalética reflectante, cunetas pluviales y pasos de fauna. Los estudios de ingeniería civil, logística multimodal y planeación territorial confirman que la modernización de las vías de comunicación terrestres, puentes, terminales aeroportuarias y redes de telecomunicaciones reduce los costos de transporte e impulsa la integración económica de las quince regiones socioeconómicas de la entidad."
      },
      {
        "id": "d11",
        "titulo": "Autoridades sanitarias alertan por repunte de casos de dengue en municipios de tierra caliente",
        "categoria": "Salud Pública",
        "url_fuente": "https://saludchiapas.gob.mx/noticias/alerta-epidemiologica-dengue-mosco-2025",
        "dominio": "saludchiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 159,
        "texto": "La Secretaría de Salud del estado emitió un aviso epidemiológico preventivo ante el repunte estacional de casos confirmados de dengue clásico y hemorrágico en diversos municipios de tierra caliente y la costa chiapaneca. Las brigadas de control de vectores intensificaron las jornadas de nebulización espacial, abatización de pilas de agua y descacharrización masiva en colonias urbanas para eliminar los criaderos domésticos del mosco transmisor Aedes aegypti. Los médicos epidemiólogos exhortaron a la población a colocar mosquiteros en puertas y ventanas, voltear cubetas o neumáticos que acumulen agua de lluvia y acudir de inmediato al centro de salud más cercano ante síntomas como fiebre alta, dolor retroocular, mialgias o sangrado, evitando estrictamente la automedicación. Las autoridades de vigilancia epidemiológica y atención médica hospitalaria reiteraron que el fortalecimiento de la prevención primaria, el diagnóstico oportuno de laboratorio y el despliegue de brigadas sanitarias en localidades rurales e indígenas garantizan el derecho a la salud y reducen la incidencia de padecimientos estacionales."
      },
      {
        "id": "d12",
        "titulo": "Feria regional celebra el café y el cacao chiapaneco con catas y venta directa",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.chiapas.gob.mx/feria-regional-cafe-cacao-productores-2025",
        "dominio": "www.chiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 158,
        "texto": "La Feria Regional del Café y el Cacao Chiapaneco reunió durante el fin de semana a más de ochenta cooperativas agrícolas, maestros tostadores, baristas y chocolateros artesanales en el centro de convenciones de la capital. El evento promovió la comercialización directa sin intermediarios mediante mesas de negocios con compradores hoteleros y restauranteros, además de ofrecer catas guiadas de métodos de extracción V60, prensa francesa y degustación de tablillas de cacao al setenta por ciento. Más de quince mil asistentes recorrieron los pabellones expositores disfrutando de muestras gastronómicas, música tradicional de marimba y talleres sobre agroecología, comercio justo y trazabilidad del grano desde la finca hasta la taza. De acuerdo con los registros estadísticos agroalimentarios de las cooperativas y asociaciones de productores regionales, la certificación de buenas prácticas agrícolas, la trazabilidad fitosanitaria y la tecnificación del campo chiapaneco han fortalecido el valor agregado de las cosechas destinadas tanto al mercado nacional como a los exigentes corredores de exportación internacional."
      },
      {
        "id": "d13",
        "titulo": "Organismo operador restablece servicio de agua potable tras reparar acueducto principal",
        "categoria": "Hidrología y Clima",
        "url_fuente": "https://www.smapa.gob.mx/comunicados/restablecimiento-servicio-agua-potable-red",
        "dominio": "www.smapa.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 115,
        "texto": "El organismo operador del Sistema Municipal de Agua Potable y Alcantarillado informó que el servicio de suministro de agua potable se restablecerá de forma escalonada durante las próximas cuarenta y ocho horas en las sesenta colonias que resultaron afectadas por una falla electromecánica y ruptura de tubería de treinta pulgadas en la línea de conducción del brazo norte. Cuadrillas de técnicos soldadores y especialistas hidráulicos trabajaron de manera ininterrumpida para sustituir las válvulas de control de presión y purgar el aire acumulado en la red de distribución secundaria. La dependencia pidió a los usuarios hacer un uso racional del recurso, revisar sus cisternas domiciliarias para descartar fugas internas y almacenar agua limpia de manera responsable."
      },
      {
        "id": "d14",
        "titulo": "Estudiantes de ingeniería de Tuxtla ganan concurso nacional de robótica con brazo biónico",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.conahcyt.mx/prensa/estudiantes-chiapas-ganan-concurso-nacional-robotica",
        "dominio": "www.conahcyt.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 151,
        "texto": "Un equipo multidisciplinario de estudiantes de ingeniería mecatrónica y sistemas computacionales de Tuxtla Gutiérrez obtuvo el primer lugar absoluto en el Concurso Nacional de Robótica e Innovación Tecnológica gracias al diseño y fabricación de un brazo robótico asistivo de bajo costo controlado mediante señales mioeléctricas e inteligencia artificial embebida. El prototipo, impreso en polímeros biodegradables de alta resistencia y operado con microcontroladores de arquitectura abierta, permite realizar movimientos de precisión milimétrica para rehabilitación motriz y manipulación industrial segura. Tras este triunfo académico, la delegación estudiantil chiapaneca representará oficialmente a México en el campeonato internacional de robótica aplicada que se celebrará el próximo semestre en Tokio. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d15",
        "titulo": "Complejo hidroeléctrico del río Grijalva aporta energía limpia estratégica al sistema nacional",
        "categoria": "Energía e Infraestructura",
        "url_fuente": "https://www.cfe.mx/generacion/hidroelectricas/complejo-grijalva-chiapas",
        "dominio": "www.cfe.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 152,
        "texto": "El sistema hidroeléctrico integral ubicado sobre la cuenca del río Grijalva en el estado de Chiapas, conformado por las centrales generadoras Belisario Domínguez (La Angostura), Manuel Moreno Torres (Chicoasén), Nezahualcóyotl (Malpaso) y Ángel Albino Corzo (Peñitas), se mantiene como el pilar fundamental de generación de energía eléctrica renovable y limpia en México. En conjunto, sus turbinas hidráulicas aportan más del cuarenta por ciento de la energía hidroeléctrica del Sistema Eléctrico Nacional, permitiendo regular las avenidas máximas fluviales hacia la planicie tabasqueña y suministrar potencia instantánea en horas de demanda pico. Ingenieros electricistas supervisan la modernización de rotores y transformadores para incrementar la eficiencia operativa del complejo. Los análisis de operación eléctrica del Sistema Interconectado Nacional corroboran que el aprovechamiento sustentable del potencial hidroeléctrico, solar y eólico instalado en territorio chiapaneco contribuye de manera decisiva a la seguridad energética del país y a la reducción sostenida de emisiones de gases de efecto invernadero."
      },
      {
        "id": "d16",
        "titulo": "Programas de conservación en la Selva Lacandona protegen hábitat crítico del jaguar y guacamaya roja",
        "categoria": "Biodiversidad y Medio Ambiente",
        "url_fuente": "https://www.gob.mx/semarnat/articulos/reserva-biosfera-montes-azules-lacandona",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 151,
        "texto": "La Reserva de la Biosfera Montes Azules, corazón ecológico de la Selva Lacandona en el oriente de Chiapas, concentra más del veinte por ciento de la biodiversidad terrestre de todo el territorio mexicano en apenas una fracción de su superficie. Biólogos conservacionistas y monitores comunitarios lacandones operan una red de cámaras trampa y estaciones acústicas que han confirmado la reproducción exitosa de poblaciones silvestres de jaguar, tapir centroamericano, pecarí de labios blancos y guacamaya roja sobre la cuenca del río Lacantún. Los programas de pago por servicios ambientales y vigilancia participativa buscan frenar la fragmentación del bosque tropical perennifolio y preservar los corredores biológicos mesoamericanos. Las brigadas de monitoreo biológico y conservación ecológica destacaron que la protección de los corredores biológicos, selvas húmedas, humedales costeros y bosques mesófilos de montaña en Chiapas resulta indispensable para resguardar el patrimonio genético de la flora y fauna endémica de Mesoamérica frente al cambio climático."
      },
      {
        "id": "d17",
        "titulo": "Zona arqueológica de Palenque implementa monitoreo láser LiDAR para estudiar estructuras mayas ocultas",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.inah.gob.mx/boletines/investigacion-lidar-zona-arqueologica-palenque",
        "dominio": "www.inah.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 141,
        "texto": "Investigadores del Instituto Nacional de Antropología e Historia desplegaron tecnología de escaneo láser aerotransportado (LiDAR) sobre el polígono de protección de la zona arqueológica de Palenque para cartografiar con resolución centimétrica las estructuras arquitectónicas mayas que permanecen cubiertas por la densa vegetación selvática. El levantamiento topográfico tridimensional reveló un complejo sistema de acueductos subterráneos, terrazas agrícolas, conjuntos habitacionales periféricos y calzadas de piedra que rodean el Templo de las Inscripciones y El Gran Palacio construido durante el reinado de Pakal el Grande. Estos hallazgos arqueológicos confirman la sofisticada ingeniería hidráulica con la que los antiguos mayas controlaban los numerosos arroyos de montaña. Los promotores culturales, historiadores y prestadores de servicios ecoturísticos coincidieron en que la preservación del patrimonio arqueológico maya, la arquitectura virreinal, las festividades tradicionales y la artesanía textil fortalecen la identidad pluricultural de Chiapas y generan derrama económica sustentable."
      },
      {
        "id": "d18",
        "titulo": "Mango Ataulfo del Soconusco amplía exportaciones hacia Estados Unidos y Canadá con control fitosanitario",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.gob.mx/senasica/prensa/exportacion-mango-ataulfo-soconusco-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 158,
        "texto": "Los productores y empacadores de mango Ataulfo con denominación de origen en la región del Soconusco cerraron la temporada de cosecha con un volumen superior a las treinta y cinco mil toneladas exportadas hacia los mercados de Estados Unidos y Canadá. El fruto chiapaneco, desarrollado originalmente en huertos de Tapachula y caracterizado por su pulpa firme sin fibra, alto contenido de azúcares naturales y semilla pequeña, cumple con rigurosos protocolos fitosanitarios de tratamiento hidrotermico certificados por inspectores agrícolas para garantizar la ausencia total de la mosca de la fruta. Esta agroindustria genera más de doce mil empleos directos en los municipios de Mazatán, Huehuetán, Acapetahua y Escuintla. De acuerdo con los registros estadísticos agroalimentarios de las cooperativas y asociaciones de productores regionales, la certificación de buenas prácticas agrícolas, la trazabilidad fitosanitaria y la tecnificación del campo chiapaneco han fortalecido el valor agregado de las cosechas destinadas tanto al mercado nacional como a los exigentes corredores de exportación internacional."
      },
      {
        "id": "d19",
        "titulo": "Instalan red de sensores IoT y telemetría satelital para alerta temprana de incendios forestales",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.conafor.gob.mx/innovacion/sensores-iot-incendios-forestales-chiapas",
        "dominio": "www.conafor.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 154,
        "texto": "Ingenieros en telecomunicaciones y especialistas forestales instalaron una red distribuida de nodos sensores de Internet de las Cosas (IoT) y cámaras térmicas con enlace satelital en los polígonos boscosos de La Sepultura y El Triunfo para la detección temprana de incendios forestales. Los dispositivos autónomos, alimentados mediante paneles solares fotovoltaicos, miden cada cinco minutos variables microclimáticas críticas como humedad relativa, velocidad del viento, temperatura ambiente y concentración de partículas de humo y monóxido de carbono. Cuando los algoritmos detectan anomalías térmicas, el sistema envía coordenadas GPS exactas al centro estatal de manejo del fuego, reduciendo el tiempo de respuesta de los combatientes forestales a menos de veinte minutos. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d20",
        "titulo": "Modernizan recinto portuario de Puerto Chiapas para impulsar el comercio marítimo agroindustrial",
        "categoria": "Infraestructura y Transporte",
        "url_fuente": "https://www.puertochiapas.com.mx/noticias/modernizacion-infraestructura-portuaria-2025",
        "dominio": "www.puertochiapas.com.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 156,
        "texto": "La Administración del Sistema Portuario Nacional avanzó en las obras de dragado de mantenimiento del canal de navegación y en la ampliación de los patios de contenedores refrigerados en el recinto de Puerto Chiapas, ubicado en el municipio de Tapachula. Con un calado operativo que permite el atraque de buques mercantes de gran calado y cruceros turísticos internacionales, la terminal marítima se posiciona como el nodo logístico estratégico de la frontera sur para la salida de plátano, café, mango y aceite de palma hacia puertos de la costa oeste norteamericana y Centroamérica. Asimismo, se rehabilitó la vía férrea de interconexión con el parque agroindustrial para facilitar el transporte intermodal de mercancías. Los estudios de ingeniería civil, logística multimodal y planeación territorial confirman que la modernización de las vías de comunicación terrestres, puentes, terminales aeroportuarias y redes de telecomunicaciones reduce los costos de transporte e impulsa la integración económica de las quince regiones socioeconómicas de la entidad."
      },
      {
        "id": "d21",
        "titulo": "Despliegan unidades médicas móviles con telemedicina en comunidades rurales de la Sierra Mariscal",
        "categoria": "Salud Pública",
        "url_fuente": "https://saludchiapas.gob.mx/programas/unidades-medicas-moviles-telemedicina-sierra",
        "dominio": "saludchiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 149,
        "texto": "Con el propósito de abatir el rezago en el acceso a servicios de salud especializada en localidades de alta dispersión geográfica, el sector salud desplegó doce unidades médicas móviles equipadas con antenas satelitales de banda ancha y equipos de diagnóstico digital en la región Sierra Mariscal. A través de plataformas de telemedicina en tiempo real, médicos generales ubicados en Motozintla, Siltepec y Bellavista pueden realizar interconsultas remotas con cardiólogos, pediatras y ginecólogos de los hospitales de alta especialidad en Tuxtla Gutiérrez. Las caravanas cuentan con ultrasonido portátil, electrocardiógrafo digital, laboratorio clínico básico y farmacia gratuita para el control de diabetes e hipertensión arterial. Las autoridades de vigilancia epidemiológica y atención médica hospitalaria reiteraron que el fortalecimiento de la prevención primaria, el diagnóstico oportuno de laboratorio y el despliegue de brigadas sanitarias en localidades rurales e indígenas garantizan el derecho a la salud y reducen la incidencia de padecimientos estacionales."
      },
      {
        "id": "d22",
        "titulo": "Artesanos talladores de ámbar de Simojovel obtienen sello de autenticidad contra imitaciones sintéticas",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.culturachiapas.gob.mx/artesanias/ambar-simojovel-denominacion-origen",
        "dominio": "www.culturachiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 142,
        "texto": "Cooperativas de mineros y maestros talladores de ámbar del municipio de Simojovel de Allende recibieron la certificación oficial de autenticidad bajo la Norma Oficial Mexicana que protege la denominación de origen del ámbar de Chiapas frente a la competencia desleal de resinas plásticas e imitaciones sintéticas importadas. Esta resina fósil de origen vegetal, formada hace más de veintitrés millones de años durante el periodo Mioceno y extraída manualmente mediante túneles en las paredes montañosas, es altamente valorada por su dureza, sus tonalidades doradas, rojizas y verdes, y por conservar inclusiones paleobiológicas de insectos prehistóricos que atraen tanto a joyeros como a paleontólogos internacionales. Los promotores culturales, historiadores y prestadores de servicios ecoturísticos coincidieron en que la preservación del patrimonio arqueológico maya, la arquitectura virreinal, las festividades tradicionales y la artesanía textil fortalecen la identidad pluricultural de Chiapas y generan derrama económica sustentable."
      },
      {
        "id": "d23",
        "titulo": "Reserva de la Biosfera El Triunfo protege el bosque de niebla y al mítico pavón cornudo",
        "categoria": "Biodiversidad y Medio Ambiente",
        "url_fuente": "https://www.gob.mx/conanp/acciones-y-programas/reserva-de-la-biosfera-el-triunfo",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 115,
        "texto": "Ubicada en las cumbres más altas de la Sierra Madre de Chiapas, la Reserva de la Biosfera El Triunfo resguarda uno de los remanentes de bosque mesófilo de montaña o bosque de niebla más extensos y biodiversos de Mesoamérica. Este ecosistema singular es el último refugio natural del pavón cornudo (Oreophasis derbianus), una especie de ave endémica en peligro de extinción, así como del quetzal resplandeciente y el puma. Además de su invaluable riqueza biológica, los densos bosques de niebla de El Triunfo funcionan como una esponja hidrológica gigantesca que capta la humedad de los vientos del océano Pacífico y alimenta los ríos que irrigan las planicies agrícolas del Soconusco y la cuenca del Grijalva."
      },
      {
        "id": "d24",
        "titulo": "Investigadores desarrollan modelos de visión artificial con drones para detectar roya en cafetales",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.ecosur.mx/investigacion/drones-vision-artificial-roya-cafe-chiapas",
        "dominio": "www.ecosur.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 150,
        "texto": "Un grupo de investigación interinstitucional conformado por especialistas en inteligencia artificial de la UPCh y agrónomos de El Colegio de la Frontera Sur (ECOSUR) desarrolló un sistema de diagnóstico fitosanitario temprano basado en drones multirrotores con cámaras multiespectrales y redes neuronales convolucionales. El algoritmo analiza las imágenes aéreas de las parcelas cafetaleras e identifica alteraciones en la reflectancia del infrarrojo cercano provocadas por el hongo Hemileia vastatrix, causante de la roya anaranjada del cafeto, semanas antes de que las manchas foliares sean visibles al ojo humano. Esta tecnología de agricultura de precisión permite aplicar biofungicidas de forma focalizada, reduciendo costos y pérdidas de cosecha. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d25",
        "titulo": "Apicultores chiapanecos incrementan producción de miel orgánica multifloral para el mercado alemán",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.gob.mx/agricultura/prensa/miel-organica-chiapas-exportacion-europa",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 153,
        "texto": "Organizaciones de apicultores indígenas y campesinos de las regiones Selva, Norte y Meseta Comiteca lograron incrementar en un veintidós por ciento el acopio y envasado de miel orgánica certificada libre de agroquímicos y antibióticos, destinada principalmente al mercado de exportación en Alemania, Suiza y el Reino Unido. La diversidad florística de las selvas y acahuales de Chiapas permite obtener mieles diferenciadas de floración de tajonal, campanilla, dzidzilché y cafetal, caracterizadas por sus propiedades antibacterianas y su bajo porcentaje de humedad. Los productores implementaron salas de extracción en acero inoxidable y sistemas de trazabilidad por lote que garantizan la pureza del endulzante natural. De acuerdo con los registros estadísticos agroalimentarios de las cooperativas y asociaciones de productores regionales, la certificación de buenas prácticas agrícolas, la trazabilidad fitosanitaria y la tecnificación del campo chiapaneco han fortalecido el valor agregado de las cosechas destinadas tanto al mercado nacional como a los exigentes corredores de exportación internacional."
      },
      {
        "id": "d26",
        "titulo": "Construyen puente atirantado sobre el embalse de La Angostura para integrar municipios de La Concordia",
        "categoria": "Infraestructura y Transporte",
        "url_fuente": "https://www.gob.mx/sct/acciones/puentes-atirantados-la-concordia-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 150,
        "texto": "La conclusión e inauguración del nuevo puente vehicular atirantado que cruza el embalse de la presa Belisario Domínguez (La Angostura) ha transformado radicalmente la conectividad terrestre entre los municipios de La Concordia, Chicomuselo y la capital del estado. Anteriormente, el traslado de vehículos de carga agrícola, ambulancias y transporte público dependía del cruce lento en chalanes o pangas fluviales sujetas a las condiciones meteorológicas del viento. La estructura de concreto presforzado y tirantes de acero de alta tensión cuenta con más de setecientos metros de longitud total, reduciendo en más de dos horas el trayecto comercial desde la Sierra Madre hacia el centro de Chiapas. Los estudios de ingeniería civil, logística multimodal y planeación territorial confirman que la modernización de las vías de comunicación terrestres, puentes, terminales aeroportuarias y redes de telecomunicaciones reduce los costos de transporte e impulsa la integración económica de las quince regiones socioeconómicas de la entidad."
      },
      {
        "id": "d27",
        "titulo": "Fiesta Grande de Enero en Chiapa de Corzo reúne a miles de Parachicos y Chuntáes en honor a San Sebastián",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.unesco.org/es/intangible-cultural-heritage/parachicos-chiapa-de-corzo",
        "dominio": "www.unesco.org",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 145,
        "texto": "Con música de pito de carrizo y tambor, miles de danzantes tradicionales conocidos como Parachicos, ataviados con máscaras de madera talladas y laqueadas a mano, monteras de ixtle, sarapes multicolores y chinchines de hojalata, recorrieron las calles históricas del Pueblo Mágico de Chiapa de Corzo durante la tradicional Fiesta Grande de Enero. Reconocida por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad, esta celebración centenaria honra a Nuestro Señor de Esquipulas, San Antonio Abad y San Sebastián Mártir. Junto a las chiapanecas con trajes bordados en tul y los alegres Chuntáes, la festividad incluye el tradicional combate naval pirotécnico sobre las aguas del río Grijalva. Los promotores culturales, historiadores y prestadores de servicios ecoturísticos coincidieron en que la preservación del patrimonio arqueológico maya, la arquitectura virreinal, las festividades tradicionales y la artesanía textil fortalecen la identidad pluricultural de Chiapas y generan derrama económica sustentable."
      },
      {
        "id": "d28",
        "titulo": "Monitoreo hidrométrico permanente en el río Usumacinta previene desbordamientos en comunidades ribereñas",
        "categoria": "Hidrología y Clima",
        "url_fuente": "https://www.gob.mx/conagua/prensa/monitoreo-hidrometrico-rio-usumacinta-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 163,
        "texto": "La Comisión Nacional del Agua mantiene un operativo de monitoreo hidrométrico y climatológico permanente sobre el cauce del río Usumacinta, el río más caudaloso de México y Centroamérica, que sirve como frontera natural entre el estado de Chiapas y la República de Guatemala. A través de estaciones limnimétricas automatizadas instaladas en los municipios de Benemérito de las Américas, Marqués de Comillas y Ocosingo, los hidrólogos vigilan minuto a minuto el nivel de escala del río tras las lluvias intensas registradas en la cuenca alta del Petén. Esta información hidrometeorológica permite alertar con anticipación a las comunidades ribereñas y evacuar ganado hacia terrenos elevados antes de cualquier avenida extraordinaria. Los reportes técnicos hidrometeorológicos emitidos por los especialistas de la cuenca del río Grijalva y de protección civil estatal subrayan la importancia del monitoreo continuo de las precipitaciones pluviales, el almacenamiento de los vasos reguladores y la gestión integral de los recursos hídricos en beneficio de las comunidades urbanas y agrícolas del estado de Chiapas."
      },
      {
        "id": "d29",
        "titulo": "Lagunas de Montebello enfrentan retos de conservación para preservar la coloración cristalina de sus aguas",
        "categoria": "Biodiversidad y Medio Ambiente",
        "url_fuente": "https://www.gob.mx/conanp/prensa/conservacion-parque-nacional-lagunas-de-montebello",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 151,
        "texto": "El Parque Nacional Lagunas de Montebello, célebre a nivel mundial por su sistema kárstico de más de cincuenta lagos que exhiben tonalidades desde el verde esmeralda hasta el azul turquesa profundo, es objeto de un programa integral de restauración ecológica e hidrológica en la cuenca del río Grande de Comitán. Investigadores limnólogos de la UNAM y autoridades ambientales trabajan conjuntamente con los ejidos locales para rehabilitar las plantas de tratamiento de aguas residuales, reforestar las riberas con pino y liquidámbar y reducir el arrastre de sedimentos y fertilizantes agrícolas que habían provocado procesos de eutrofización y cambio de coloración en algunos cuerpos lagunares del complejo. Las brigadas de monitoreo biológico y conservación ecológica destacaron que la protección de los corredores biológicos, selvas húmedas, humedales costeros y bosques mesófilos de montaña en Chiapas resulta indispensable para resguardar el patrimonio genético de la flora y fauna endémica de Mesoamérica frente al cambio climático."
      },
      {
        "id": "d30",
        "titulo": "Desarrollan traductor neuronal bidireccional para lenguas mayenses Tsotsil y Tseltal con arquitectura Transformer",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.inali.gob.mx/innovacion/traductor-neuronal-tsotsil-tseltal-chiapas",
        "dominio": "www.inali.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 151,
        "texto": "Lingüistas computacionales e ingenieros en software desarrollaron un modelo de traducción automática neuronal bidireccional entre el español y las lenguas originarias mayenses Tsotsil y Tseltal, habladas por más de un millón de habitantes en el estado de Chiapas. Dada la escasez de corpus paralelos masivos para lenguas de bajos recursos digitales, el equipo implementó técnicas de transferencia de aprendizaje sobre modelos Transformer multilingües, tokenización por subpalabras (Byte-Pair Encoding) adaptada a la morfología aglutinante mayense y aumento sintético de datos validado por hablantes nativos. La herramienta se integrará en juzgados, hospitales públicos y escuelas interculturales para garantizar el acceso equitativo a la justicia y la salud. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d31",
        "titulo": "Productores de plátano del Soconusco tecnifican sistemas de riego y cablevías para exportación",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.eleconomista.com.mx/agronegocios/platano-chiapas-exportacion-tecnificacion",
        "dominio": "www.eleconomista.com.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 148,
        "texto": "Las asociaciones agrícolas de productores de plátano banano en los municipios costeros de Suchiate, Frontera Hidalgo y Mazatán consolidaron la modernización tecnológica de más de cuatro mil hectáreas mediante la instalación de sistemas de riego subfoliar automatizado y redes de cablevías aéreas que transportan los racimos desde la planta hasta las empacadoras sin sufrir magulladuras. Gracias a este manejo poscosecha de estándar internacional, Chiapas se mantiene como el líder nacional en volumen de producción platanera, enviando semanalmente cientos de contenedores refrigerados a través de Puerto Chiapas y por vía terrestre hacia cadenas de supermercados de Estados Unidos. De acuerdo con los registros estadísticos agroalimentarios de las cooperativas y asociaciones de productores regionales, la certificación de buenas prácticas agrícolas, la trazabilidad fitosanitaria y la tecnificación del campo chiapaneco han fortalecido el valor agregado de las cosechas destinadas tanto al mercado nacional como a los exigentes corredores de exportación internacional."
      },
      {
        "id": "d32",
        "titulo": "Hospital de Especialidades Pediátricas de Tuxtla realiza exitosa jornada de cirugías cardiovasculares",
        "categoria": "Salud Pública",
        "url_fuente": "https://www.gob.mx/salud/prensa/hospital-especialidades-pediatricas-tuxtla-cirugias",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 137,
        "texto": "Un equipo médico multidisciplinario integrado por cirujanos cardiovasculares pediátricos, cardiólogos intervencionistas, anestesiólogos y perfusionistas del Hospital de Especialidades Pediátricas de Tuxtla Gutiérrez concluyó con éxito una jornada intensiva de cirugías de corazón abierto y cateterismos terapéuticos en veinticinco niñas y niños provenientes de comunidades vulnerables de Chiapas y Oaxaca. Los procedimientos de alta complejidad permitieron corregir cardiopatías congénitas severas sin costo alguno para las familias. La institución médica destacó que la renovación de la unidad de terapia intensiva neonatal y del angiógrafo biplanar ha reducido drásticamente los tiempos de recuperación hospitalaria. Las autoridades de vigilancia epidemiológica y atención médica hospitalaria reiteraron que el fortalecimiento de la prevención primaria, el diagnóstico oportuno de laboratorio y el despliegue de brigadas sanitarias en localidades rurales e indígenas garantizan el derecho a la salud y reducen la incidencia de padecimientos estacionales."
      },
      {
        "id": "d33",
        "titulo": "Parque eólico en Arriaga genera electricidad limpia aprovechando las corrientes de viento del Istmo",
        "categoria": "Energía e Infraestructura",
        "url_fuente": "https://www.gob.mx/sener/articulos/energia-eolica-arriaga-costa-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 148,
        "texto": "El corredor eólico situado en las llanuras costeras del municipio de Arriaga aprovecha las intensas corrientes de aire que cruzan desde el Golfo de México hacia el océano Pacífico a través de la depresión del Istmo-Costa para generar energía eléctrica limpia y renovable. Sus aerogeneradores de gran altura, dotados de aspas aerodinámicas de fibra de carbono y sistemas de orientación automática por sensores anemométricos, inyectan decenas de megavatios a la red de transmisión regional, evitando la emisión anual de miles de toneladas de dióxido de carbono equivalentes. El proyecto convive armónicamente con la actividad ganadera en los terrenos arrendados a ejidatarios locales. Los análisis de operación eléctrica del Sistema Interconectado Nacional corroboran que el aprovechamiento sustentable del potencial hidroeléctrico, solar y eólico instalado en territorio chiapaneco contribuye de manera decisiva a la seguridad energética del país y a la reducción sostenida de emisiones de gases de efecto invernadero."
      },
      {
        "id": "d34",
        "titulo": "Cascadas de Agua Azul y Misol-Há atraen turismo ecológico comunitario en la ruta maya",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.turismochiapas.gob.mx/rutas/cascadas-de-agua-azul-y-misol-ha",
        "dominio": "www.turismochiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 151,
        "texto": "Las Cascadas de Agua Azul, ubicadas en el municipio de Tumbalá sobre el cauce del río Yaxhá, junto con el salto de agua de treinta metros de Misol-Há en Salto de Agua, registraron una notable recuperación en la llegada de viajeros europeos y nacionales que recorren el circuito eco-arqueológico entre San Cristóbal de las Casas y Palenque. La característica coloración azul índigo de sus pozas escalonadas se debe al alto contenido de sales de carbonato de calcio y hidróxido de magnesio disueltas en el agua, las cuales recubren los troncos sumergidos y las rocas calizas formando diques naturales de travertino. Centros ecoturísticos administrados por comunidades choles ofrecen cabañas sustentables y gastronomía local. Los promotores culturales, historiadores y prestadores de servicios ecoturísticos coincidieron en que la preservación del patrimonio arqueológico maya, la arquitectura virreinal, las festividades tradicionales y la artesanía textil fortalecen la identidad pluricultural de Chiapas y generan derrama económica sustentable."
      },
      {
        "id": "d35",
        "titulo": "Santuario de tortuga marina en Puerto Arista libera más de cien mil crías de tortuga golfina al Pacífico",
        "categoria": "Biodiversidad y Medio Ambiente",
        "url_fuente": "https://www.gob.mx/conanp/prensa/liberacion-tortuga-marina-puerto-arista-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 148,
        "texto": "Biólogos marinos y voluntarios del campamento tortuguero del Santuario Playa de Puerto Arista, en el municipio costero de Tonalá, lograron la incubación protegida y liberación exitosa al océano Pacífico de más de ciento diez mil crías de tortuga golfina (Lepidochelys olivacea) y tortuga laúd durante la presente temporada de anidación. A lo largo de treinta kilómetros de playa arenosa, las patrullas nocturnas recolectan las nidadas depositadas por las hembras reproductoras para resguardarlas en corrales de incubación con control de temperatura, evitando el saqueo ilegal de huevos y la depredación por fauna feral, contribuyendo decisivamente a la supervivencia de estos quelonios marinos amenazados. Las brigadas de monitoreo biológico y conservación ecológica destacaron que la protección de los corredores biológicos, selvas húmedas, humedales costeros y bosques mesófilos de montaña en Chiapas resulta indispensable para resguardar el patrimonio genético de la flora y fauna endémica de Mesoamérica frente al cambio climático."
      },
      {
        "id": "d36",
        "titulo": "Implementan motor de búsqueda híbrido con BM25 y Sentence-BERT para digitalizar archivos judiciales",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.poderjudicialchiapas.gob.mx/innovacion/buscador-hibrido-jurisprudencia-ia",
        "dominio": "www.poderjudicialchiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 138,
        "texto": "El archivo electrónico de sentencias y tesis jurídicas del estado implementó una arquitectura de recuperación de información híbrida de dos etapas que combina un índice invertido probabilístico Okapi BM25 con vectores densos generados por modelos Sentence-BERT en español y fusión por rango recíproco (RRF). Esta solución tecnológica permite a jueces, secretarios de acuerdos y litigantes localizar en milisegundos tanto números exactos de expedientes, artículos de ley y nombres propios mediante coincidencia léxica, como precedentes judiciales conceptualmente equivalentes redactados con distinta terminología jurídica, superando las limitaciones de los buscadores tradicionales por palabras clave. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d37",
        "titulo": "Ganadería silvopastoril sustentable en el valle de Villaflores reduce huella ambiental y mejora producción láctea",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.gob.mx/inifap/articulos/sistemas-silvopastoriles-villaflores-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 147,
        "texto": "Ranchos bovinos de doble propósito en los municipios de Villaflores y Villa Corzo, en la región Frailesca, han adoptado sistemas silvopastoriles intensivos que asocian pastos mejorados con arbustos forrajeros ricos en proteína como la leucaena y árboles maderables nativos dispersos en los potreros. Esta práctica regenerativa reduce la temperatura ambiental del ganado hasta en cuatro grados centígrados, disminuye el estrés calórico de las vacas lecheras, fija nitrógeno atmosférico en el suelo y eleva en un veinte por ciento el rendimiento diario de leche destinada a la elaboración artesanal de quesos de cincho, crema y quesillo chiapaneco. De acuerdo con los registros estadísticos agroalimentarios de las cooperativas y asociaciones de productores regionales, la certificación de buenas prácticas agrícolas, la trazabilidad fitosanitaria y la tecnificación del campo chiapaneco han fortalecido el valor agregado de las cosechas destinadas tanto al mercado nacional como a los exigentes corredores de exportación internacional."
      },
      {
        "id": "d38",
        "titulo": "Aeropuerto Internacional Ángel Albino Corzo amplía plataforma de carga y rutas aéreas nacionales",
        "categoria": "Infraestructura y Transporte",
        "url_fuente": "https://www.aeropuertosgap.com.mx/prensa/expansion-aeropuerto-angel-albino-corzo-chiapas",
        "dominio": "www.aeropuertosgap.com.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 142,
        "texto": "El Aeropuerto Internacional Ángel Albino Corzo, principal terminal aérea del estado ubicada en el municipio de Chiapa de Corzo, concluyó la ampliación de su plataforma logística de carga aérea con cámaras frigoríficas y sumó tres nuevas frecuencias directas hacia los nodos industriales de Monterrey, Guadalajara y Tijuana. Con un flujo anual superior a un millón seiscientos mil pasajeros, la modernización de las salas de última espera, pasillos telescópicos y bandas automatizadas de equipaje fortalece la conectividad ejecutiva y turística del sureste, además de facilitar la exportación aérea de flores tropicales, pescados frescos y artesanías de alto valor. Los estudios de ingeniería civil, logística multimodal y planeación territorial confirman que la modernización de las vías de comunicación terrestres, puentes, terminales aeroportuarias y redes de telecomunicaciones reduce los costos de transporte e impulsa la integración económica de las quince regiones socioeconómicas de la entidad."
      },
      {
        "id": "d39",
        "titulo": "Murales mayas de Bonampak reciben tratamiento de conservación preventiva contra humedad selvática",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.inah.gob.mx/boletines/restauracion-pinturas-murales-bonampak-chiapas",
        "dominio": "www.inah.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 140,
        "texto": "Restauradores especializados de la Coordinación Nacional de Conservación del Patrimonio Cultural realizaron trabajos de mantenimiento microclimático y limpieza físico-química en los célebres murales prehispánicos del Templo de las Pinturas en la zona arqueológica de Bonampak, situada en el corazón de la Selva Lacandona. Pintados hacia el año 790 después de Cristo con pigmentos minerales como el famoso azul maya sobre estuco de cal fresca, los frescos de las tres cámaras narran con extraordinario realismo dinástico batallas, danzas rituales, músicos con trompetas y ceremonias de la corte del gobernante Chaan Muan II, constituyendo la obra pictórica más importante del mundo maya clásico. Los promotores culturales, historiadores y prestadores de servicios ecoturísticos coincidieron en que la preservación del patrimonio arqueológico maya, la arquitectura virreinal, las festividades tradicionales y la artesanía textil fortalecen la identidad pluricultural de Chiapas y generan derrama económica sustentable."
      },
      {
        "id": "d40",
        "titulo": "Dragado y desazolve de ríos en la costa de Huixtla y Mapastepec mitigan riesgo de desbordamientos",
        "categoria": "Hidrología y Clima",
        "url_fuente": "https://www.gob.mx/conagua/acciones/desazolve-rios-costa-soconusco-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 161,
        "texto": "Con maquinaria pesada consistente en excavadoras de brazo largo y tractores de oruga, brigadas de infraestructura hidráulica ejecutaron el dragado de sedimentos pétreos y el reforzamiento de bordos de protección marginal con roca escollera a lo largo de dieciocho kilómetros en los ríos Huixtla, San Nicolás y Novillero, en la llanura costera de Chiapas. Debido a la abrupta pendiente topográfica con la que estos afluentes descienden desde la Sierra Madre hacia la planicie del Pacífico, el retiro de miles de metros cúbicos de azolve resulta indispensable antes del inicio de la temporada de ciclones tropicales para proteger zonas agrícolas de caña de azúcar y asentamientos humanos. Los reportes técnicos hidrometeorológicos emitidos por los especialistas de la cuenca del río Grijalva y de protección civil estatal subrayan la importancia del monitoreo continuo de las precipitaciones pluviales, el almacenamiento de los vasos reguladores y la gestión integral de los recursos hídricos en beneficio de las comunidades urbanas y agrícolas del estado de Chiapas."
      },
      {
        "id": "d41",
        "titulo": "Campaña estatal de vacunación e inmunización infantil alcanza cobertura del noventa y cinco por ciento",
        "categoria": "Salud Pública",
        "url_fuente": "https://saludchiapas.gob.mx/campanas/vacunacion-universal-infantil-cobertura-2025",
        "dominio": "saludchiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 139,
        "texto": "Las jurisdicciones sanitarias de las quince regiones socioeconómicas del estado reportaron un cumplimiento del noventa y cinco por ciento en la meta de aplicación de dosis del esquema básico de vacunación universal en menores de cinco años. Mediante puestos fijos en clínicas urbanas y brigadas casa por casa con termos dotados de termómetros digitales para preservar la red de frío entre dos y ocho grados centígrados, el personal de enfermería aplicó biológicos contra sarampión, rubéola, parotiditis, poliomielitis, hexavalente y neumococo, reforzando la barrera inmunológica epidemiológica en municipios fronterizos y rurales de difícil acceso. Las autoridades de vigilancia epidemiológica y atención médica hospitalaria reiteraron que el fortalecimiento de la prevención primaria, el diagnóstico oportuno de laboratorio y el despliegue de brigadas sanitarias en localidades rurales e indígenas garantizan el derecho a la salud y reducen la incidencia de padecimientos estacionales."
      },
      {
        "id": "d42",
        "titulo": "Manglares de La Encrucijada capturan carbono azul y sostienen la pesquería artesanal de camarón",
        "categoria": "Biodiversidad y Medio Ambiente",
        "url_fuente": "https://www.gob.mx/conanp/articulos/reserva-biosfera-la-encrucijada-manglares-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 152,
        "texto": "La Reserva de la Biosfera La Encrucijada, extendida a lo largo de la llanura costera del Pacífico chiapaneco entre Pijijiapan y Mazatán, alberga los bosques de manglar más altos de toda la costa pacífica del continente americano, con árboles de mangle rojo y mangle blanco que superan los treinta y cinco metros de altura. Estudios ecológicos recientes demuestran que estos humedales costeros almacenan cinco veces más carbono azul en sus suelos fangosos que los bosques terrestres tropicales, además de actuar como barrera natural contra marejadas ciclónicas y servir como zona de crianza indispensable para larvas de camarón y escama que sostienen a miles de pescadores ribereños. Las brigadas de monitoreo biológico y conservación ecológica destacaron que la protección de los corredores biológicos, selvas húmedas, humedales costeros y bosques mesófilos de montaña en Chiapas resulta indispensable para resguardar el patrimonio genético de la flora y fauna endémica de Mesoamérica frente al cambio climático."
      },
      {
        "id": "d43",
        "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
        "dominio": "www.upchiapas.edu.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 145,
        "texto": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico interconectado a la red eléctrica del campus universitario en Suchiapa. El sistema procesa residuos orgánicos agropecuarios de la región para producir biogás rico en metano y biofertilizante líquido rico en nutrientes para cultivos locales, al tiempo que los módulos solares abastecen el consumo energético de los laboratorios de cómputo e iluminación exterior. El proyecto sirve como laboratorio vivo para el monitoreo de eficiencia termodinámica y transición energética en el estado. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d44",
        "titulo": "Laca tradicional y máscaras talladas de Chiapa de Corzo preservan técnicas prehispánicas de maque",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.cultura.gob.mx/fonart/artesanias-laca-maque-chiapa-de-corzo",
        "dominio": "www.cultura.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 137,
        "texto": "Los talleres familiares de laca o maque tradicional en Chiapa de Corzo mantienen viva una técnica artística de origen prehispánico que utiliza tierras minerales naturales, aceites vegetales e insectos cochinilla (aje) para recubrir y decorar con flores multicolores jícaras, guajes, cofres de madera de cedro y cruces ceremoniales. A través del frotado manual continuo con la palma de la mano y el pulido con algodón, los artesanos logran un acabado brillante e impermeable de extraordinaria durabilidad. Escuelas taller municipales capacitan a jóvenes aprendices para asegurar el relevo generacional de este oficio patrimonial emblemático de la depresión central chiapaneca. Los promotores culturales, historiadores y prestadores de servicios ecoturísticos coincidieron en que la preservación del patrimonio arqueológico maya, la arquitectura virreinal, las festividades tradicionales y la artesanía textil fortalecen la identidad pluricultural de Chiapas y generan derrama económica sustentable."
      },
      {
        "id": "d45",
        "titulo": "Cultivo de palma de aceite y rambután diversifica la economía agrícola en la frontera sur",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.gob.mx/inifap/prensa/cultivos-tropicales-rambutan-palma-soconusco",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 145,
        "texto": "La reconversión productiva hacia cultivos frutales y agroindustriales no tradicionales, encabezada por el rambután (Nephelium lappaceum) de origen asiático y la palma de aceite certificada sustentable, ha diversificado las fuentes de ingreso de miles de pequeños propietarios en Cacahoatán, Metapa, Frontera Hidalgo y Acapetahua. El rambután chiapaneco, apreciado por su cáscara roja cubierta de filamentos suaves y su pulpa dulce translúcida similar al lichi, encontró condiciones edafoclimáticas óptimas en el pie de monte húmedo del volcán Tacaná, permitiendo exportar fruta fresca seleccionada por vía aérea y terrestre hacia ciudades con alta demanda en Norteamérica. De acuerdo con los registros estadísticos agroalimentarios de las cooperativas y asociaciones de productores regionales, la certificación de buenas prácticas agrícolas, la trazabilidad fitosanitaria y la tecnificación del campo chiapaneco han fortalecido el valor agregado de las cosechas destinadas tanto al mercado nacional como a los exigentes corredores de exportación internacional."
      },
      {
        "id": "d46",
        "titulo": "Instalan radares meteorológicos Doppler para pronóstico numérico de tormentas severas en el sureste",
        "categoria": "Hidrología y Clima",
        "url_fuente": "https://smn.conagua.gob.mx/es/observando-el-tiempo/radares-meteorologicos-sureste",
        "dominio": "smn.conagua.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 153,
        "texto": "El Servicio Meteorológico Nacional modernizó la estación de radar meteorológico Doppler de banda C ubicada en los altos del cerro Mozotal y en la meseta central para fortalecer el pronóstico numérico de corto plazo ante sistemas convectivos, ondas tropicales y frentes fríos que impactan el territorio chiapaneco. Mediante el análisis de la reflectividad y la velocidad radial de las gotas de precipitación dentro de las nubes cumulonimbus, los meteorólogos pueden estimar en tiempo real la intensidad de lluvia en milímetros por hora y detectar cizalladuras de viento, emitiendo boletines de alerta hidrometeorológica con hasta tres horas de anticipación. Los reportes técnicos hidrometeorológicos emitidos por los especialistas de la cuenca del río Grijalva y de protección civil estatal subrayan la importancia del monitoreo continuo de las precipitaciones pluviales, el almacenamiento de los vasos reguladores y la gestión integral de los recursos hídricos en beneficio de las comunidades urbanas y agrícolas del estado de Chiapas."
      },
      {
        "id": "d47",
        "titulo": "Rehabilitan caminos sacacosechas con concreto hidráulico en zonas cafetaleras de la Sierra Madre",
        "categoria": "Infraestructura y Transporte",
        "url_fuente": "https://www.chiapas.gob.mx/obras-publicas/caminos-sacacosechas-sierra-madre-2025",
        "dominio": "www.chiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 139,
        "texto": "Con la participación directa de comités comunitarios de obra y cuadrillas municipales, se concluyó la pavimentación mediante huellas de concreto hidráulico y empedrado ahogado en más de cuarenta kilómetros de caminos rurales sacacosechas en los municipios montañosos de Ángel Albino Corzo, Montecristo de Guerrero y Siltepec. Históricamente, los deslaves y el lodo durante los meses de lluvia incomunicaban a los ejidos cafetaleros, encareciendo el flete de los costales de café pergamino y maíz. Las nuevas obras de drenaje transversal con alcantarillas tubulares y muros de gavión garantizan la transitabilidad continua durante todo el año. Los estudios de ingeniería civil, logística multimodal y planeación territorial confirman que la modernización de las vías de comunicación terrestres, puentes, terminales aeroportuarias y redes de telecomunicaciones reduce los costos de transporte e impulsa la integración económica de las quince regiones socioeconómicas de la entidad."
      },
      {
        "id": "d48",
        "titulo": "Zoológico Miguel Álvarez del Toro logra reproducción en cautiverio del quetzal y el tapir centroamericano",
        "categoria": "Biodiversidad y Medio Ambiente",
        "url_fuente": "https://www.zoomat.gob.mx/conservacion/reproduccion-quetzal-tapir-chiapas",
        "dominio": "www.zoomat.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 145,
        "texto": "El Zoológico Regional Miguel Álvarez del Toro (ZOOMAT), ubicado dentro de la reserva ecológica El Zapotal al suroriente de Tuxtla Gutiérrez y único en su tipo por exhibir exclusivamente fauna endémica y nativa del estado de Chiapas en recintos inmersos en selva mediana subperennifolia, reportó un nuevo logro científico en sus programas de reproducción ex situ de especies en peligro crítico de extinción. Los médicos veterinarios especialistas en fauna silvestre registraron el nacimiento saludable de un ejemplar de tapir centroamericano y el emplumamiento de polluelos de quetzal, aportando conocimiento biológico fundamental para la preservación genética de la fauna mesoamericana. Las brigadas de monitoreo biológico y conservación ecológica destacaron que la protección de los corredores biológicos, selvas húmedas, humedales costeros y bosques mesófilos de montaña en Chiapas resulta indispensable para resguardar el patrimonio genético de la flora y fauna endémica de Mesoamérica frente al cambio climático."
      },
      {
        "id": "d49",
        "titulo": "Despliegan bases de datos vectoriales con grafos HNSW para acelerar consultas semánticas a gran escala",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://qdrant.tech/documentation/concepts/indexing-hnsw-hybrid-search/",
        "dominio": "qdrant.tech",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 143,
        "texto": "En los sistemas modernos de recuperación de información y generación aumentada por recuperación (RAG), calcular la similitud coseno de manera exhaustiva entre una consulta y millones de vectores densos de alta dimensionalidad tiene una complejidad lineal prohibitiva en tiempo real. Para resolver este cuello de botella computacional, motores vectoriales como Qdrant implementan estructuras de grafos navegables jerárquicos de mundo pequeño (HNSW). Este algoritmo construye múltiples capas de grafos donde las capas superiores contienen pocos nodos con conexiones de largo alcance para saltar rápidamente por el hiperespacio y las capas inferiores refinan la vecindad local en tiempo logarítmico. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d50",
        "titulo": "Refuerzan vigilancia epidemiológica y control de calidad del agua para prevenir enfermedades gastrointestinales",
        "categoria": "Salud Pública",
        "url_fuente": "https://saludchiapas.gob.mx/riesgos-sanitarios/cloracion-agua-prevencion-colera",
        "dominio": "saludchiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 141,
        "texto": "La Dirección de Protección contra Riesgos Sanitarios intensificó el monitoreo de los niveles de cloro residual libre y análisis bacteriológicos en los sistemas de abastecimiento de agua entubada, plantas purificadoras comerciales y mercados públicos de las principales ciudades del estado para prevenir brotes de enfermedades diarreicas agudas y gastrointestinales durante la temporada de calor. Los verificadores sanitarios distribuyeron miles de frascos de plata coloidal entre amas de casa y comedores comunitarios para la desinfección de frutas y verduras, además de supervisar el cumplimiento de las normas de higiene en el manejo de pescados y mariscos. Las autoridades de vigilancia epidemiológica y atención médica hospitalaria reiteraron que el fortalecimiento de la prevención primaria, el diagnóstico oportuno de laboratorio y el despliegue de brigadas sanitarias en localidades rurales e indígenas garantizan el derecho a la salud y reducen la incidencia de padecimientos estacionales."
      },
      {
        "id": "d51",
        "titulo": "Pueblo Mágico de Comitán de Domínguez celebra festival cultural e histórico en honor a Belisario Domínguez",
        "categoria": "Turismo y Cultura",
        "url_fuente": "https://www.comitan.gob.mx/turismo/festival-cultural-belisario-dominguez",
        "dominio": "www.comitan.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 134,
        "texto": "El Pueblo Mágico de Comitán de Domínguez, cuna del prócer de la libertad de expresión Belisario Domínguez y de la destacada escritora Rosario Castellanos, celebró su tradicional festival internacional de las artes y la cultura con conciertos de marimba clásica, exposiciones pictóricas, presentaciones editoriales y recorridos históricos por el Teatro Junchavín y el templo de Santo Domingo. Los visitantes degustaron la rica repostería y gastronomía comiteca, incluyendo el pan compuesto, el hueso asado, los dulces de chimbo y el tradicional licor de comiteco elaborado de manera artesanal a partir del aguamiel fermentado del maguey Manso. Los promotores culturales, historiadores y prestadores de servicios ecoturísticos coincidieron en que la preservación del patrimonio arqueológico maya, la arquitectura virreinal, las festividades tradicionales y la artesanía textil fortalecen la identidad pluricultural de Chiapas y generan derrama económica sustentable."
      },
      {
        "id": "d52",
        "titulo": "Impulsan producción sustentable de queso crema de Pijijiapan y lácteos artesanales de la costa",
        "categoria": "Agricultura y Comercio",
        "url_fuente": "https://www.chiapas.gob.mx/economia/queso-crema-costa-pijijiapan-certificacion",
        "dominio": "www.chiapas.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 143,
        "texto": "Las queserías artesanales de los municipios costeros de Pijijiapan, Mapastepec y Tonalá recibieron equipamiento en acero inoxidable de grado alimenticio, tinas de pasteurización lenta y cámaras de maduración controlada para fortalecer la inocuidad y comercialización del tradicional queso crema tropical y del queso de doble crema prensado. Elaborado con leche entera fresca de ganado criado en pastizales de la llanura del Pacífico y envuelto en papel celofán amarillo y rojo distintivo, este producto lácteo emblemático de la gastronomía chiapaneca busca obtener su marca colectiva regional para ingresar a cadenas nacionales de autoservicio. De acuerdo con los registros estadísticos agroalimentarios de las cooperativas y asociaciones de productores regionales, la certificación de buenas prácticas agrícolas, la trazabilidad fitosanitaria y la tecnificación del campo chiapaneco han fortalecido el valor agregado de las cosechas destinadas tanto al mercado nacional como a los exigentes corredores de exportación internacional."
      },
      {
        "id": "d53",
        "titulo": "Cañón de Río La Venta destaca por sus formaciones kársticas, cuevas prehispánicas y biodiversidad",
        "categoria": "Biodiversidad y Medio Ambiente",
        "url_fuente": "https://www.gob.mx/conanp/prensa/reserva-biosfera-selva-el-ocote-rio-la-venta",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 146,
        "texto": "Dentro del polígono de la Reserva de la Biosfera Selva El Ocote, en el noroccidente de Chiapas, el cañón sagrado del río La Venta conforma una fractura geológica monumental en roca caliza con paredes verticales de hasta cuatrocientos metros de altura y cascadas majestuosas como El Aguacero. Espeleólogos y arqueólogos han documentado en sus paredes decenas de cuevas secas de difícil acceso que conservaron vestigios textiles, cerámica ceremonial y ofrendas de la antigua cultura Zoque. El área natural protegida alberga además una extraordinaria diversidad de orquídeas epífitas, murciélagos cavernícolas y felinos neotropicales que dependen de la conservación del bosque tropical. Las brigadas de monitoreo biológico y conservación ecológica destacaron que la protección de los corredores biológicos, selvas húmedas, humedales costeros y bosques mesófilos de montaña en Chiapas resulta indispensable para resguardar el patrimonio genético de la flora y fauna endémica de Mesoamérica frente al cambio climático."
      },
      {
        "id": "d54",
        "titulo": "Arquitecturas de Reranking con Cross-Encoders optimizan la precisión en motores de búsqueda empresariales",
        "categoria": "Ciencia y Tecnología",
        "url_fuente": "https://www.sbert.net/examples/applications/retrieve_rerank/README.html",
        "dominio": "www.sbert.net",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 143,
        "texto": "La implementación de arquitecturas de recuperación en dos etapas ha redefinido el equilibrio entre latencia y precisión en los motores de búsqueda semántica empresariales. Mientras que en la primera etapa un recuperador ligero como BM25 o un bi-encoder Sentence-BERT explora rápidamente el corpus completo para seleccionar un subconjunto reducido de decenas de documentos candidatos en pocos milisegundos, en la segunda etapa un modelo Cross-Encoder procesa conjuntamente los tokens de la consulta y del documento mediante mecanismos de atención cruzada profunda. Este reordenamiento selectivo incrementa sustancialmente métricas críticas como nDCG@5 y MRR sin incurrir en costos computacionales inmanejables. Este desarrollo científico y tecnológico impulsado por investigadores, docentes e ingenieros en sistemas computacionales demuestra el potencial de las arquitecturas modernas de inteligencia artificial, procesamiento del lenguaje natural y telemetría distribuida para resolver problemáticas estratégicas de la región sur-sureste con altos estándares de eficiencia y reproducibilidad."
      },
      {
        "id": "d55",
        "titulo": "Ampliación de la red de fibra óptica lleva internet de alta velocidad a cabeceras municipales indígenas",
        "categoria": "Infraestructura y Transporte",
        "url_fuente": "https://www.gob.mx/promtel/prensa/conectividad-fibra-optica-municipios-chiapas",
        "dominio": "www.gob.mx",
        "fecha_extraccion": "2026-11-04T20:08:46",
        "num_palabras": 143,
        "texto": "El despliegue de más de seiscientos kilómetros de cableado troncal de fibra óptica oscura sobre la infraestructura de líneas de transmisión eléctrica y carreteras federales permitió habilitar puntos gratuitos de conectividad a internet de banda ancha en plazas públicas, bibliotecas comunitarias, planteles de educación media superior y centros de salud de treinta y dos cabeceras municipales indígenas de Chiapas. Ingenieros en redes destacaron que esta dorsal de telecomunicaciones reduce la brecha digital en la región de Los Altos y la Selva, facilitando trámites gubernamentales en línea, educación a distancia y comercio electrónico para cooperativas de artesanos y cafeticultores. Los estudios de ingeniería civil, logística multimodal y planeación territorial confirman que la modernización de las vías de comunicación terrestres, puentes, terminales aeroportuarias y redes de telecomunicaciones reduce los costos de transporte e impulsa la integración económica de las quince regiones socioeconómicas de la entidad."
      }
    ]
  },
  "precomputedQueries": {
    "UPCh": {
      "consulta": "UPCh",
      "motores": {
        "bm25": {
          "consulta": "UPCh",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.062,
          "total_resultados": 3,
          "metricas_consulta": {
            "tipo_consulta": "lexica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d07",
              "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
              "categoria": "Ciencia y Tecnología",
              "score": 3.7588,
              "num_palabras": 157,
              "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
              "fragmento": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 2.7529,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d24",
              "titulo": "Investigadores desarrollan modelos de visión artificial con drones para detectar roya en cafetales",
              "categoria": "Ciencia y Tecnología",
              "score": 2.688,
              "num_palabras": 150,
              "url_fuente": "https://www.ecosur.mx/investigacion/drones-vision-artificial-roya-cafe-chiapas",
              "fragmento": "Un grupo de investigación interinstitucional conformado por especialistas en inteligencia artificial de la UPCh y agrónomos de El Colegio de la Frontera Sur (ECOSUR) desarrolló un sistema de diagnóstico...",
              "relevancia_qrel": 2
            }
          ]
        },
        "embeddings": {
          "consulta": "UPCh",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.295,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "lexica",
            "nDCG@5": 0.6581,
            "MRR": 1.0,
            "R@5": 0.6667
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d07",
              "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
              "categoria": "Ciencia y Tecnología",
              "score": 0.9526,
              "num_palabras": 157,
              "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
              "fragmento": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d19",
              "titulo": "Instalan red de sensores IoT y telemetría satelital para alerta temprana de incendios forestales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.9023,
              "num_palabras": 154,
              "url_fuente": "https://www.conafor.gob.mx/innovacion/sensores-iot-incendios-forestales-chiapas",
              "fragmento": "Ingenieros en telecomunicaciones y especialistas forestales instalaron una red distribuida de nodos sensores de Internet de las Cosas (IoT) y cámaras térmicas con enlace satelital en los polígonos boscosos de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d24",
              "titulo": "Investigadores desarrollan modelos de visión artificial con drones para detectar roya en cafetales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.8694,
              "num_palabras": 150,
              "url_fuente": "https://www.ecosur.mx/investigacion/drones-vision-artificial-roya-cafe-chiapas",
              "fragmento": "Un grupo de investigación interinstitucional conformado por especialistas en inteligencia artificial de la UPCh y agrónomos de El Colegio de la Frontera Sur (ECOSUR) desarrolló un sistema de diagnóstico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d14",
              "titulo": "Estudiantes de ingeniería de Tuxtla ganan concurso nacional de robótica con brazo biónico",
              "categoria": "Ciencia y Tecnología",
              "score": 0.8423,
              "num_palabras": 151,
              "url_fuente": "https://www.conahcyt.mx/prensa/estudiantes-chiapas-ganan-concurso-nacional-robotica",
              "fragmento": "Un equipo multidisciplinario de estudiantes de ingeniería mecatrónica y sistemas computacionales de Tuxtla Gutiérrez obtuvo el primer lugar absoluto en el Concurso Nacional de Robótica e Innovación Tecnológica...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d54",
              "titulo": "Arquitecturas de Reranking con Cross-Encoders optimizan la precisión en motores de búsqueda empresariales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.7968,
              "num_palabras": 143,
              "url_fuente": "https://www.sbert.net/examples/applications/retrieve_rerank/README.html",
              "fragmento": "La implementación de arquitecturas de recuperación en dos etapas ha redefinido el equilibrio entre latencia y precisión en los motores de búsqueda semántica empresariales. Mientras que en la primera etapa un...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "UPCh",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.903,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "lexica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d07",
              "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
              "categoria": "Ciencia y Tecnología",
              "score": 1.9002,
              "num_palabras": 157,
              "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
              "fragmento": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 1.5969,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d24",
              "titulo": "Investigadores desarrollan modelos de visión artificial con drones para detectar roya en cafetales",
              "categoria": "Ciencia y Tecnología",
              "score": 1.4676,
              "num_palabras": 150,
              "url_fuente": "https://www.ecosur.mx/investigacion/drones-vision-artificial-roya-cafe-chiapas",
              "fragmento": "Un grupo de investigación interinstitucional conformado por especialistas en inteligencia artificial de la UPCh y agrónomos de El Colegio de la Frontera Sur (ECOSUR) desarrolló un sistema de diagnóstico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d19",
              "titulo": "Instalan red de sensores IoT y telemetría satelital para alerta temprana de incendios forestales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.5865,
              "num_palabras": 154,
              "url_fuente": "https://www.conafor.gob.mx/innovacion/sensores-iot-incendios-forestales-chiapas",
              "fragmento": "Ingenieros en telecomunicaciones y especialistas forestales instalaron una red distribuida de nodos sensores de Internet de las Cosas (IoT) y cámaras térmicas con enlace satelital en los polígonos boscosos de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d14",
              "titulo": "Estudiantes de ingeniería de Tuxtla ganan concurso nacional de robótica con brazo biónico",
              "categoria": "Ciencia y Tecnología",
              "score": 0.5475,
              "num_palabras": 151,
              "url_fuente": "https://www.conahcyt.mx/prensa/estudiantes-chiapas-ganan-concurso-nacional-robotica",
              "fragmento": "Un equipo multidisciplinario de estudiantes de ingeniería mecatrónica y sistemas computacionales de Tuxtla Gutiérrez obtuvo el primer lugar absoluto en el Concurso Nacional de Robótica e Innovación Tecnológica...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "canon del sumidero": {
      "consulta": "canon del sumidero",
      "motores": {
        "bm25": {
          "consulta": "canon del sumidero",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.077,
          "total_resultados": 2,
          "metricas_consulta": {
            "tipo_consulta": "lexica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d05",
              "titulo": "Afluencia turística crece significativamente en el Parque Nacional Cañón del Sumidero",
              "categoria": "Turismo y Cultura",
              "score": 10.1609,
              "num_palabras": 117,
              "url_fuente": "https://www.gob.mx/conanp/prensa/turismo-canon-del-sumidero-chiapas",
              "fragmento": "El Parque Nacional Cañón del Sumidero registró la visita de más de doscientos veinte mil turistas nacionales e internacionales durante el reciente periodo vacacional, representando un repunte económico...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d53",
              "titulo": "Cañón de Río La Venta destaca por sus formaciones kársticas, cuevas prehispánicas y biodiversidad",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 4.3886,
              "num_palabras": 146,
              "url_fuente": "https://www.gob.mx/conanp/prensa/reserva-biosfera-selva-el-ocote-rio-la-venta",
              "fragmento": "Dentro del polígono de la Reserva de la Biosfera Selva El Ocote, en el noroccidente de Chiapas, el cañón sagrado del río La Venta conforma una fractura geológica monumental en roca caliza con paredes...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "canon del sumidero",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 0.984,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "lexica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d05",
              "titulo": "Afluencia turística crece significativamente en el Parque Nacional Cañón del Sumidero",
              "categoria": "Turismo y Cultura",
              "score": 0.8684,
              "num_palabras": 117,
              "url_fuente": "https://www.gob.mx/conanp/prensa/turismo-canon-del-sumidero-chiapas",
              "fragmento": "El Parque Nacional Cañón del Sumidero registró la visita de más de doscientos veinte mil turistas nacionales e internacionales durante el reciente periodo vacacional, representando un repunte económico...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d40",
              "titulo": "Dragado y desazolve de ríos en la costa de Huixtla y Mapastepec mitigan riesgo de desbordamientos",
              "categoria": "Hidrología y Clima",
              "score": 0.5785,
              "num_palabras": 161,
              "url_fuente": "https://www.gob.mx/conagua/acciones/desazolve-rios-costa-soconusco-chiapas",
              "fragmento": "Con maquinaria pesada consistente en excavadoras de brazo largo y tractores de oruga, brigadas de infraestructura hidráulica ejecutaron el dragado de sedimentos pétreos y el reforzamiento de bordos de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d28",
              "titulo": "Monitoreo hidrométrico permanente en el río Usumacinta previene desbordamientos en comunidades ribereñas",
              "categoria": "Hidrología y Clima",
              "score": 0.5108,
              "num_palabras": 163,
              "url_fuente": "https://www.gob.mx/conagua/prensa/monitoreo-hidrometrico-rio-usumacinta-chiapas",
              "fragmento": "La Comisión Nacional del Agua mantiene un operativo de monitoreo hidrométrico y climatológico permanente sobre el cauce del río Usumacinta, el río más caudaloso de México y Centroamérica, que sirve como...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d46",
              "titulo": "Instalan radares meteorológicos Doppler para pronóstico numérico de tormentas severas en el sureste",
              "categoria": "Hidrología y Clima",
              "score": 0.4937,
              "num_palabras": 153,
              "url_fuente": "https://smn.conagua.gob.mx/es/observando-el-tiempo/radares-meteorologicos-sureste",
              "fragmento": "El Servicio Meteorológico Nacional modernizó la estación de radar meteorológico Doppler de banda C ubicada en los altos del cerro Mozotal y en la meseta central para fortalecer el pronóstico numérico de corto...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d23",
              "titulo": "Reserva de la Biosfera El Triunfo protege el bosque de niebla y al mítico pavón cornudo",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.4821,
              "num_palabras": 115,
              "url_fuente": "https://www.gob.mx/conanp/acciones-y-programas/reserva-de-la-biosfera-el-triunfo",
              "fragmento": "Ubicada en las cumbres más altas de la Sierra Madre de Chiapas, la Reserva de la Biosfera El Triunfo resguarda uno de los remanentes de bosque mesófilo de montaña o bosque de niebla más extensos y biodiversos...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "canon del sumidero",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 3.977,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "lexica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d05",
              "titulo": "Afluencia turística crece significativamente en el Parque Nacional Cañón del Sumidero",
              "categoria": "Turismo y Cultura",
              "score": 2.6937,
              "num_palabras": 117,
              "url_fuente": "https://www.gob.mx/conanp/prensa/turismo-canon-del-sumidero-chiapas",
              "fragmento": "El Parque Nacional Cañón del Sumidero registró la visita de más de doscientos veinte mil turistas nacionales e internacionales durante el reciente periodo vacacional, representando un repunte económico...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d53",
              "titulo": "Cañón de Río La Venta destaca por sus formaciones kársticas, cuevas prehispánicas y biodiversidad",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.5863,
              "num_palabras": 146,
              "url_fuente": "https://www.gob.mx/conanp/prensa/reserva-biosfera-selva-el-ocote-rio-la-venta",
              "fragmento": "Dentro del polígono de la Reserva de la Biosfera Selva El Ocote, en el noroccidente de Chiapas, el cañón sagrado del río La Venta conforma una fractura geológica monumental en roca caliza con paredes...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d40",
              "titulo": "Dragado y desazolve de ríos en la costa de Huixtla y Mapastepec mitigan riesgo de desbordamientos",
              "categoria": "Hidrología y Clima",
              "score": 0.376,
              "num_palabras": 161,
              "url_fuente": "https://www.gob.mx/conagua/acciones/desazolve-rios-costa-soconusco-chiapas",
              "fragmento": "Con maquinaria pesada consistente en excavadoras de brazo largo y tractores de oruga, brigadas de infraestructura hidráulica ejecutaron el dragado de sedimentos pétreos y el reforzamiento de bordos de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d28",
              "titulo": "Monitoreo hidrométrico permanente en el río Usumacinta previene desbordamientos en comunidades ribereñas",
              "categoria": "Hidrología y Clima",
              "score": 0.332,
              "num_palabras": 163,
              "url_fuente": "https://www.gob.mx/conagua/prensa/monitoreo-hidrometrico-rio-usumacinta-chiapas",
              "fragmento": "La Comisión Nacional del Agua mantiene un operativo de monitoreo hidrométrico y climatológico permanente sobre el cauce del río Usumacinta, el río más caudaloso de México y Centroamérica, que sirve como...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d46",
              "titulo": "Instalan radares meteorológicos Doppler para pronóstico numérico de tormentas severas en el sureste",
              "categoria": "Hidrología y Clima",
              "score": 0.3209,
              "num_palabras": 153,
              "url_fuente": "https://smn.conagua.gob.mx/es/observando-el-tiempo/radares-meteorologicos-sureste",
              "fragmento": "El Servicio Meteorológico Nacional modernizó la estación de radar meteorológico Doppler de banda C ubicada en los altos del cerro Mozotal y en la meseta central para fortalecer el pronóstico numérico de corto...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "problemas de agua": {
      "consulta": "problemas de agua",
      "motores": {
        "bm25": {
          "consulta": "problemas de agua",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.049,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 0.8835,
            "MRR": 1.0,
            "R@5": 0.75
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d13",
              "titulo": "Organismo operador restablece servicio de agua potable tras reparar acueducto principal",
              "categoria": "Hidrología y Clima",
              "score": 3.3633,
              "num_palabras": 115,
              "url_fuente": "https://www.smapa.gob.mx/comunicados/restablecimiento-servicio-agua-potable-red",
              "fragmento": "El organismo operador del Sistema Municipal de Agua Potable y Alcantarillado informó que el servicio de suministro de agua potable se restablecerá de forma escalonada durante las próximas cuarenta y ocho horas...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d34",
              "titulo": "Cascadas de Agua Azul y Misol-Há atraen turismo ecológico comunitario en la ruta maya",
              "categoria": "Turismo y Cultura",
              "score": 3.3584,
              "num_palabras": 151,
              "url_fuente": "https://www.turismochiapas.gob.mx/rutas/cascadas-de-agua-azul-y-misol-ha",
              "fragmento": "Las Cascadas de Agua Azul, ubicadas en el municipio de Tumbalá sobre el cauce del río Yaxhá, junto con el salto de agua de treinta metros de Misol-Há en Salto de Agua, registraron una notable recuperación en...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d02",
              "titulo": "Crisis hídrica y escasez de agua potable golpean la región de Los Altos",
              "categoria": "Hidrología y Clima",
              "score": 2.7392,
              "num_palabras": 119,
              "url_fuente": "https://www.jornada.com.mx/estados/2025/crisis-hidrica-altos-chiapas",
              "fragmento": "La crisis hídrica en la región de Los Altos de Chiapas se agrava de manera alarmante durante la presente temporada de estiaje. El desabasto del líquido vital afecta directamente a más de cuarenta mil...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 4,
              "id": "d50",
              "titulo": "Refuerzan vigilancia epidemiológica y control de calidad del agua para prevenir enfermedades gastrointestinales",
              "categoria": "Salud Pública",
              "score": 2.6024,
              "num_palabras": 141,
              "url_fuente": "https://saludchiapas.gob.mx/riesgos-sanitarios/cloracion-agua-prevencion-colera",
              "fragmento": "La Dirección de Protección contra Riesgos Sanitarios intensificó el monitoreo de los niveles de cloro residual libre y análisis bacteriológicos en los sistemas de abastecimiento de agua entubada, plantas...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 5,
              "id": "d29",
              "titulo": "Lagunas de Montebello enfrentan retos de conservación para preservar la coloración cristalina de sus aguas",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 2.5128,
              "num_palabras": 151,
              "url_fuente": "https://www.gob.mx/conanp/prensa/conservacion-parque-nacional-lagunas-de-montebello",
              "fragmento": "El Parque Nacional Lagunas de Montebello, célebre a nivel mundial por su sistema kárstico de más de cincuenta lagos que exhiben tonalidades desde el verde esmeralda hasta el azul turquesa profundo, es objeto...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "problemas de agua",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 0.9,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 0.7585,
            "MRR": 1.0,
            "R@5": 0.75
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d50",
              "titulo": "Refuerzan vigilancia epidemiológica y control de calidad del agua para prevenir enfermedades gastrointestinales",
              "categoria": "Salud Pública",
              "score": 0.972,
              "num_palabras": 141,
              "url_fuente": "https://saludchiapas.gob.mx/riesgos-sanitarios/cloracion-agua-prevencion-colera",
              "fragmento": "La Dirección de Protección contra Riesgos Sanitarios intensificó el monitoreo de los niveles de cloro residual libre y análisis bacteriológicos en los sistemas de abastecimiento de agua entubada, plantas...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 2,
              "id": "d13",
              "titulo": "Organismo operador restablece servicio de agua potable tras reparar acueducto principal",
              "categoria": "Hidrología y Clima",
              "score": 0.9674,
              "num_palabras": 115,
              "url_fuente": "https://www.smapa.gob.mx/comunicados/restablecimiento-servicio-agua-potable-red",
              "fragmento": "El organismo operador del Sistema Municipal de Agua Potable y Alcantarillado informó que el servicio de suministro de agua potable se restablecerá de forma escalonada durante las próximas cuarenta y ocho horas...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d53",
              "titulo": "Cañón de Río La Venta destaca por sus formaciones kársticas, cuevas prehispánicas y biodiversidad",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.8934,
              "num_palabras": 146,
              "url_fuente": "https://www.gob.mx/conanp/prensa/reserva-biosfera-selva-el-ocote-rio-la-venta",
              "fragmento": "Dentro del polígono de la Reserva de la Biosfera Selva El Ocote, en el noroccidente de Chiapas, el cañón sagrado del río La Venta conforma una fractura geológica monumental en roca caliza con paredes...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d17",
              "titulo": "Zona arqueológica de Palenque implementa monitoreo láser LiDAR para estudiar estructuras mayas ocultas",
              "categoria": "Turismo y Cultura",
              "score": 0.8888,
              "num_palabras": 141,
              "url_fuente": "https://www.inah.gob.mx/boletines/investigacion-lidar-zona-arqueologica-palenque",
              "fragmento": "Investigadores del Instituto Nacional de Antropología e Historia desplegaron tecnología de escaneo láser aerotransportado (LiDAR) sobre el polígono de protección de la zona arqueológica de Palenque para...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d02",
              "titulo": "Crisis hídrica y escasez de agua potable golpean la región de Los Altos",
              "categoria": "Hidrología y Clima",
              "score": 0.7891,
              "num_palabras": 119,
              "url_fuente": "https://www.jornada.com.mx/estados/2025/crisis-hidrica-altos-chiapas",
              "fragmento": "La crisis hídrica en la región de Los Altos de Chiapas se agrava de manera alarmante durante la presente temporada de estiaje. El desabasto del líquido vital afecta directamente a más de cuarenta mil...",
              "relevancia_qrel": 3
            }
          ]
        },
        "hibrido": {
          "consulta": "problemas de agua",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.012,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 0.9967,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d13",
              "titulo": "Organismo operador restablece servicio de agua potable tras reparar acueducto principal",
              "categoria": "Hidrología y Clima",
              "score": 1.8624,
              "num_palabras": 115,
              "url_fuente": "https://www.smapa.gob.mx/comunicados/restablecimiento-servicio-agua-potable-red",
              "fragmento": "El organismo operador del Sistema Municipal de Agua Potable y Alcantarillado informó que el servicio de suministro de agua potable se restablecerá de forma escalonada durante las próximas cuarenta y ocho horas...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d02",
              "titulo": "Crisis hídrica y escasez de agua potable golpean la región de Los Altos",
              "categoria": "Hidrología y Clima",
              "score": 1.6717,
              "num_palabras": 119,
              "url_fuente": "https://www.jornada.com.mx/estados/2025/crisis-hidrica-altos-chiapas",
              "fragmento": "La crisis hídrica en la región de Los Altos de Chiapas se agrava de manera alarmante durante la presente temporada de estiaje. El desabasto del líquido vital afecta directamente a más de cuarenta mil...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d50",
              "titulo": "Refuerzan vigilancia epidemiológica y control de calidad del agua para prevenir enfermedades gastrointestinales",
              "categoria": "Salud Pública",
              "score": 1.5241,
              "num_palabras": 141,
              "url_fuente": "https://saludchiapas.gob.mx/riesgos-sanitarios/cloracion-agua-prevencion-colera",
              "fragmento": "La Dirección de Protección contra Riesgos Sanitarios intensificó el monitoreo de los niveles de cloro residual libre y análisis bacteriológicos en los sistemas de abastecimiento de agua entubada, plantas...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d34",
              "titulo": "Cascadas de Agua Azul y Misol-Há atraen turismo ecológico comunitario en la ruta maya",
              "categoria": "Turismo y Cultura",
              "score": 0.9045,
              "num_palabras": 151,
              "url_fuente": "https://www.turismochiapas.gob.mx/rutas/cascadas-de-agua-azul-y-misol-ha",
              "fragmento": "Las Cascadas de Agua Azul, ubicadas en el municipio de Tumbalá sobre el cauce del río Yaxhá, junto con el salto de agua de treinta metros de Misol-Há en Salto de Agua, registraron una notable recuperación en...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d01",
              "titulo": "Lluvias torrenciales provocan inundaciones severas en Tuxtla Gutiérrez",
              "categoria": "Hidrología y Clima",
              "score": 0.831,
              "num_palabras": 124,
              "url_fuente": "https://www.chiapasparalelo.com/noticias/chiapas/2025/lluvias-tuxtla-inundaciones",
              "fragmento": "Las fuertes precipitaciones pluviales registradas durante la tarde y noche provocaron inundaciones severas en más de doce colonias del sur y oriente de Tuxtla Gutiérrez. El desbordamiento parcial de arroyos...",
              "relevancia_qrel": 1
            }
          ]
        }
      }
    },
    "temblor de tierra": {
      "consulta": "temblor de tierra",
      "motores": {
        "bm25": {
          "consulta": "temblor de tierra",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.051,
          "total_resultados": 2,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 0.0,
            "MRR": 0.0,
            "R@5": 0.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d11",
              "titulo": "Autoridades sanitarias alertan por repunte de casos de dengue en municipios de tierra caliente",
              "categoria": "Salud Pública",
              "score": 4.2713,
              "num_palabras": 159,
              "url_fuente": "https://saludchiapas.gob.mx/noticias/alerta-epidemiologica-dengue-mosco-2025",
              "fragmento": "La Secretaría de Salud del estado emitió un aviso epidemiológico preventivo ante el repunte estacional de casos confirmados de dengue clásico y hemorrágico en diversos municipios de tierra caliente y la costa...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 2,
              "id": "d44",
              "titulo": "Laca tradicional y máscaras talladas de Chiapa de Corzo preservan técnicas prehispánicas de maque",
              "categoria": "Turismo y Cultura",
              "score": 3.0285,
              "num_palabras": 137,
              "url_fuente": "https://www.cultura.gob.mx/fonart/artesanias-laca-maque-chiapa-de-corzo",
              "fragmento": "Los talleres familiares de laca o maque tradicional en Chiapa de Corzo mantienen viva una técnica artística de origen prehispánico que utiliza tierras minerales naturales, aceites vegetales e insectos...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "temblor de tierra",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.165,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d06",
              "titulo": "Sismo de magnitud 5.1 se registra frente a las costas de Chiapas sin dejar daños",
              "categoria": "Hidrología y Clima",
              "score": 0.8639,
              "num_palabras": 120,
              "url_fuente": "http://www.ssn.unam.mx/sismicidad/reportes-especiales/chiapas-costa-2025",
              "fragmento": "Un sismo de magnitud 5.1 en la escala de magnitud de momento se registró durante la madrugada del martes con epicentro localizado en el océano Pacífico, a cuarenta y dos kilómetros al suroeste de Ciudad...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d54",
              "titulo": "Arquitecturas de Reranking con Cross-Encoders optimizan la precisión en motores de búsqueda empresariales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.0371,
              "num_palabras": 143,
              "url_fuente": "https://www.sbert.net/examples/applications/retrieve_rerank/README.html",
              "fragmento": "La implementación de arquitecturas de recuperación en dos etapas ha redefinido el equilibrio entre latencia y precisión en los motores de búsqueda semántica empresariales. Mientras que en la primera etapa un...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d32",
              "titulo": "Hospital de Especialidades Pediátricas de Tuxtla realiza exitosa jornada de cirugías cardiovasculares",
              "categoria": "Salud Pública",
              "score": 0.0262,
              "num_palabras": 137,
              "url_fuente": "https://www.gob.mx/salud/prensa/hospital-especialidades-pediatricas-tuxtla-cirugias",
              "fragmento": "Un equipo médico multidisciplinario integrado por cirujanos cardiovasculares pediátricos, cardiólogos intervencionistas, anestesiólogos y perfusionistas del Hospital de Especialidades Pediátricas de Tuxtla...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d29",
              "titulo": "Lagunas de Montebello enfrentan retos de conservación para preservar la coloración cristalina de sus aguas",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.023,
              "num_palabras": 151,
              "url_fuente": "https://www.gob.mx/conanp/prensa/conservacion-parque-nacional-lagunas-de-montebello",
              "fragmento": "El Parque Nacional Lagunas de Montebello, célebre a nivel mundial por su sistema kárstico de más de cincuenta lagos que exhiben tonalidades desde el verde esmeralda hasta el azul turquesa profundo, es objeto...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d36",
              "titulo": "Implementan motor de búsqueda híbrido con BM25 y Sentence-BERT para digitalizar archivos judiciales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.0212,
              "num_palabras": 138,
              "url_fuente": "https://www.poderjudicialchiapas.gob.mx/innovacion/buscador-hibrido-jurisprudencia-ia",
              "fragmento": "El archivo electrónico de sentencias y tesis jurídicas del estado implementó una arquitectura de recuperación de información híbrida de dos etapas que combina un índice invertido probabilístico Okapi BM25 con...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "temblor de tierra",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.876,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d06",
              "titulo": "Sismo de magnitud 5.1 se registra frente a las costas de Chiapas sin dejar daños",
              "categoria": "Hidrología y Clima",
              "score": 1.3115,
              "num_palabras": 120,
              "url_fuente": "http://www.ssn.unam.mx/sismicidad/reportes-especiales/chiapas-costa-2025",
              "fragmento": "Un sismo de magnitud 5.1 en la escala de magnitud de momento se registró durante la madrugada del martes con epicentro localizado en el océano Pacífico, a cuarenta y dos kilómetros al suroeste de Ciudad...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d11",
              "titulo": "Autoridades sanitarias alertan por repunte de casos de dengue en municipios de tierra caliente",
              "categoria": "Salud Pública",
              "score": 0.5884,
              "num_palabras": 159,
              "url_fuente": "https://saludchiapas.gob.mx/noticias/alerta-epidemiologica-dengue-mosco-2025",
              "fragmento": "La Secretaría de Salud del estado emitió un aviso epidemiológico preventivo ante el repunte estacional de casos confirmados de dengue clásico y hemorrágico en diversos municipios de tierra caliente y la costa...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d44",
              "titulo": "Laca tradicional y máscaras talladas de Chiapa de Corzo preservan técnicas prehispánicas de maque",
              "categoria": "Turismo y Cultura",
              "score": 0.4429,
              "num_palabras": 137,
              "url_fuente": "https://www.cultura.gob.mx/fonart/artesanias-laca-maque-chiapa-de-corzo",
              "fragmento": "Los talleres familiares de laca o maque tradicional en Chiapa de Corzo mantienen viva una técnica artística de origen prehispánico que utiliza tierras minerales naturales, aceites vegetales e insectos...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d54",
              "titulo": "Arquitecturas de Reranking con Cross-Encoders optimizan la precisión en motores de búsqueda empresariales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.0241,
              "num_palabras": 143,
              "url_fuente": "https://www.sbert.net/examples/applications/retrieve_rerank/README.html",
              "fragmento": "La implementación de arquitecturas de recuperación en dos etapas ha redefinido el equilibrio entre latencia y precisión en los motores de búsqueda semántica empresariales. Mientras que en la primera etapa un...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d32",
              "titulo": "Hospital de Especialidades Pediátricas de Tuxtla realiza exitosa jornada de cirugías cardiovasculares",
              "categoria": "Salud Pública",
              "score": 0.017,
              "num_palabras": 137,
              "url_fuente": "https://www.gob.mx/salud/prensa/hospital-especialidades-pediatricas-tuxtla-cirugias",
              "fragmento": "Un equipo médico multidisciplinario integrado por cirujanos cardiovasculares pediátricos, cardiólogos intervencionistas, anestesiólogos y perfusionistas del Hospital de Especialidades Pediátricas de Tuxtla...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "enfermedades transmitidas por mosquitos": {
      "consulta": "enfermedades transmitidas por mosquitos",
      "motores": {
        "bm25": {
          "consulta": "enfermedades transmitidas por mosquitos",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.074,
          "total_resultados": 1,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 0.0,
            "MRR": 0.0,
            "R@5": 0.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d50",
              "titulo": "Refuerzan vigilancia epidemiológica y control de calidad del agua para prevenir enfermedades gastrointestinales",
              "categoria": "Salud Pública",
              "score": 5.3101,
              "num_palabras": 141,
              "url_fuente": "https://saludchiapas.gob.mx/riesgos-sanitarios/cloracion-agua-prevencion-colera",
              "fragmento": "La Dirección de Protección contra Riesgos Sanitarios intensificó el monitoreo de los niveles de cloro residual libre y análisis bacteriológicos en los sistemas de abastecimiento de agua entubada, plantas...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "enfermedades transmitidas por mosquitos",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.085,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d11",
              "titulo": "Autoridades sanitarias alertan por repunte de casos de dengue en municipios de tierra caliente",
              "categoria": "Salud Pública",
              "score": 0.8595,
              "num_palabras": 159,
              "url_fuente": "https://saludchiapas.gob.mx/noticias/alerta-epidemiologica-dengue-mosco-2025",
              "fragmento": "La Secretaría de Salud del estado emitió un aviso epidemiológico preventivo ante el repunte estacional de casos confirmados de dengue clásico y hemorrágico en diversos municipios de tierra caliente y la costa...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d49",
              "titulo": "Despliegan bases de datos vectoriales con grafos HNSW para acelerar consultas semánticas a gran escala",
              "categoria": "Ciencia y Tecnología",
              "score": 0.6841,
              "num_palabras": 143,
              "url_fuente": "https://qdrant.tech/documentation/concepts/indexing-hnsw-hybrid-search/",
              "fragmento": "En los sistemas modernos de recuperación de información y generación aumentada por recuperación (RAG), calcular la similitud coseno de manera exhaustiva entre una consulta y millones de vectores densos de alta...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d36",
              "titulo": "Implementan motor de búsqueda híbrido con BM25 y Sentence-BERT para digitalizar archivos judiciales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.6627,
              "num_palabras": 138,
              "url_fuente": "https://www.poderjudicialchiapas.gob.mx/innovacion/buscador-hibrido-jurisprudencia-ia",
              "fragmento": "El archivo electrónico de sentencias y tesis jurídicas del estado implementó una arquitectura de recuperación de información híbrida de dos etapas que combina un índice invertido probabilístico Okapi BM25 con...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d37",
              "titulo": "Ganadería silvopastoril sustentable en el valle de Villaflores reduce huella ambiental y mejora producción láctea",
              "categoria": "Agricultura y Comercio",
              "score": 0.0585,
              "num_palabras": 147,
              "url_fuente": "https://www.gob.mx/inifap/articulos/sistemas-silvopastoriles-villaflores-chiapas",
              "fragmento": "Ranchos bovinos de doble propósito en los municipios de Villaflores y Villa Corzo, en la región Frailesca, han adoptado sistemas silvopastoriles intensivos que asocian pastos mejorados con arbustos forrajeros...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d18",
              "titulo": "Mango Ataulfo del Soconusco amplía exportaciones hacia Estados Unidos y Canadá con control fitosanitario",
              "categoria": "Agricultura y Comercio",
              "score": 0.0352,
              "num_palabras": 158,
              "url_fuente": "https://www.gob.mx/senasica/prensa/exportacion-mango-ataulfo-soconusco-chiapas",
              "fragmento": "Los productores y empacadores de mango Ataulfo con denominación de origen en la región del Soconusco cerraron la temporada de cosecha con un volumen superior a las treinta y cinco mil toneladas exportadas...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "enfermedades transmitidas por mosquitos",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.184,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "semantica",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d11",
              "titulo": "Autoridades sanitarias alertan por repunte de casos de dengue en municipios de tierra caliente",
              "categoria": "Salud Pública",
              "score": 1.3087,
              "num_palabras": 159,
              "url_fuente": "https://saludchiapas.gob.mx/noticias/alerta-epidemiologica-dengue-mosco-2025",
              "fragmento": "La Secretaría de Salud del estado emitió un aviso epidemiológico preventivo ante el repunte estacional de casos confirmados de dengue clásico y hemorrágico en diversos municipios de tierra caliente y la costa...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d50",
              "titulo": "Refuerzan vigilancia epidemiológica y control de calidad del agua para prevenir enfermedades gastrointestinales",
              "categoria": "Salud Pública",
              "score": 0.699,
              "num_palabras": 141,
              "url_fuente": "https://saludchiapas.gob.mx/riesgos-sanitarios/cloracion-agua-prevencion-colera",
              "fragmento": "La Dirección de Protección contra Riesgos Sanitarios intensificó el monitoreo de los niveles de cloro residual libre y análisis bacteriológicos en los sistemas de abastecimiento de agua entubada, plantas...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d49",
              "titulo": "Despliegan bases de datos vectoriales con grafos HNSW para acelerar consultas semánticas a gran escala",
              "categoria": "Ciencia y Tecnología",
              "score": 0.4447,
              "num_palabras": 143,
              "url_fuente": "https://qdrant.tech/documentation/concepts/indexing-hnsw-hybrid-search/",
              "fragmento": "En los sistemas modernos de recuperación de información y generación aumentada por recuperación (RAG), calcular la similitud coseno de manera exhaustiva entre una consulta y millones de vectores densos de alta...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d36",
              "titulo": "Implementan motor de búsqueda híbrido con BM25 y Sentence-BERT para digitalizar archivos judiciales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.4308,
              "num_palabras": 138,
              "url_fuente": "https://www.poderjudicialchiapas.gob.mx/innovacion/buscador-hibrido-jurisprudencia-ia",
              "fragmento": "El archivo electrónico de sentencias y tesis jurídicas del estado implementó una arquitectura de recuperación de información híbrida de dos etapas que combina un índice invertido probabilístico Okapi BM25 con...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d37",
              "titulo": "Ganadería silvopastoril sustentable en el valle de Villaflores reduce huella ambiental y mejora producción láctea",
              "categoria": "Agricultura y Comercio",
              "score": 0.038,
              "num_palabras": 147,
              "url_fuente": "https://www.gob.mx/inifap/articulos/sistemas-silvopastoriles-villaflores-chiapas",
              "fragmento": "Ranchos bovinos de doble propósito en los municipios de Villaflores y Villa Corzo, en la región Frailesca, han adoptado sistemas silvopastoriles intensivos que asocian pastos mejorados con arbustos forrajeros...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "sequia y cultivos": {
      "consulta": "sequia y cultivos",
      "motores": {
        "bm25": {
          "consulta": "sequia y cultivos",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.055,
          "total_resultados": 4,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.9558,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d04",
              "titulo": "Sequía prolongada amenaza cultivos de maíz y frijol en la región fronteriza",
              "categoria": "Agricultura y Comercio",
              "score": 9.7195,
              "num_palabras": 120,
              "url_fuente": "https://www.eluniversal.com.mx/estados/sequia-cultivos-maiz-chiapas-2025",
              "fragmento": "Una sequía agrícola prolongada y el retraso atípico del régimen de lluvias amenazan gravemente los cultivos de temporal de maíz blanco y frijol negro en los municipios de la región fronteriza y la depresión...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d45",
              "titulo": "Cultivo de palma de aceite y rambután diversifica la economía agrícola en la frontera sur",
              "categoria": "Agricultura y Comercio",
              "score": 3.9136,
              "num_palabras": 145,
              "url_fuente": "https://www.gob.mx/inifap/prensa/cultivos-tropicales-rambutan-palma-soconusco",
              "fragmento": "La reconversión productiva hacia cultivos frutales y agroindustriales no tradicionales, encabezada por el rambután (Nephelium lappaceum) de origen asiático y la palma de aceite certificada sustentable, ha...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d02",
              "titulo": "Crisis hídrica y escasez de agua potable golpean la región de Los Altos",
              "categoria": "Hidrología y Clima",
              "score": 3.4726,
              "num_palabras": 119,
              "url_fuente": "https://www.jornada.com.mx/estados/2025/crisis-hidrica-altos-chiapas",
              "fragmento": "La crisis hídrica en la región de Los Altos de Chiapas se agrava de manera alarmante durante la presente temporada de estiaje. El desabasto del líquido vital afecta directamente a más de cuarenta mil...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 2.7529,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "sequia y cultivos",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 0.905,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.6653,
            "MRR": 0.5,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d45",
              "titulo": "Cultivo de palma de aceite y rambután diversifica la economía agrícola en la frontera sur",
              "categoria": "Agricultura y Comercio",
              "score": 0.8842,
              "num_palabras": 145,
              "url_fuente": "https://www.gob.mx/inifap/prensa/cultivos-tropicales-rambutan-palma-soconusco",
              "fragmento": "La reconversión productiva hacia cultivos frutales y agroindustriales no tradicionales, encabezada por el rambután (Nephelium lappaceum) de origen asiático y la palma de aceite certificada sustentable, ha...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 2,
              "id": "d04",
              "titulo": "Sequía prolongada amenaza cultivos de maíz y frijol en la región fronteriza",
              "categoria": "Agricultura y Comercio",
              "score": 0.7917,
              "num_palabras": 120,
              "url_fuente": "https://www.eluniversal.com.mx/estados/sequia-cultivos-maiz-chiapas-2025",
              "fragmento": "Una sequía agrícola prolongada y el retraso atípico del régimen de lluvias amenazan gravemente los cultivos de temporal de maíz blanco y frijol negro en los municipios de la región fronteriza y la depresión...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d02",
              "titulo": "Crisis hídrica y escasez de agua potable golpean la región de Los Altos",
              "categoria": "Hidrología y Clima",
              "score": 0.5844,
              "num_palabras": 119,
              "url_fuente": "https://www.jornada.com.mx/estados/2025/crisis-hidrica-altos-chiapas",
              "fragmento": "La crisis hídrica en la región de Los Altos de Chiapas se agrava de manera alarmante durante la presente temporada de estiaje. El desabasto del líquido vital afecta directamente a más de cuarenta mil...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d47",
              "titulo": "Rehabilitan caminos sacacosechas con concreto hidráulico en zonas cafetaleras de la Sierra Madre",
              "categoria": "Infraestructura y Transporte",
              "score": 0.4961,
              "num_palabras": 139,
              "url_fuente": "https://www.chiapas.gob.mx/obras-publicas/caminos-sacacosechas-sierra-madre-2025",
              "fragmento": "Con la participación directa de comités comunitarios de obra y cuadrillas municipales, se concluyó la pavimentación mediante huellas de concreto hidráulico y empedrado ahogado en más de cuarenta kilómetros de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d01",
              "titulo": "Lluvias torrenciales provocan inundaciones severas en Tuxtla Gutiérrez",
              "categoria": "Hidrología y Clima",
              "score": 0.3991,
              "num_palabras": 124,
              "url_fuente": "https://www.chiapasparalelo.com/noticias/chiapas/2025/lluvias-tuxtla-inundaciones",
              "fragmento": "Las fuertes precipitaciones pluviales registradas durante la tarde y noche provocaron inundaciones severas en más de doce colonias del sur y oriente de Tuxtla Gutiérrez. El desbordamiento parcial de arroyos...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "sequia y cultivos",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 3.87,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d04",
              "titulo": "Sequía prolongada amenaza cultivos de maíz y frijol en la región fronteriza",
              "categoria": "Agricultura y Comercio",
              "score": 2.591,
              "num_palabras": 120,
              "url_fuente": "https://www.eluniversal.com.mx/estados/sequia-cultivos-maiz-chiapas-2025",
              "fragmento": "Una sequía agrícola prolongada y el retraso atípico del régimen de lluvias amenazan gravemente los cultivos de temporal de maíz blanco y frijol negro en los municipios de la región fronteriza y la depresión...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d02",
              "titulo": "Crisis hídrica y escasez de agua potable golpean la región de Los Altos",
              "categoria": "Hidrología y Clima",
              "score": 1.3766,
              "num_palabras": 119,
              "url_fuente": "https://www.jornada.com.mx/estados/2025/crisis-hidrica-altos-chiapas",
              "fragmento": "La crisis hídrica en la región de Los Altos de Chiapas se agrava de manera alarmante durante la presente temporada de estiaje. El desabasto del líquido vital afecta directamente a más de cuarenta mil...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 3,
              "id": "d45",
              "titulo": "Cultivo de palma de aceite y rambután diversifica la economía agrícola en la frontera sur",
              "categoria": "Agricultura y Comercio",
              "score": 1.1244,
              "num_palabras": 145,
              "url_fuente": "https://www.gob.mx/inifap/prensa/cultivos-tropicales-rambutan-palma-soconusco",
              "fragmento": "La reconversión productiva hacia cultivos frutales y agroindustriales no tradicionales, encabezada por el rambután (Nephelium lappaceum) de origen asiático y la palma de aceite certificada sustentable, ha...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 0.6658,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d47",
              "titulo": "Rehabilitan caminos sacacosechas con concreto hidráulico en zonas cafetaleras de la Sierra Madre",
              "categoria": "Infraestructura y Transporte",
              "score": 0.3224,
              "num_palabras": 139,
              "url_fuente": "https://www.chiapas.gob.mx/obras-publicas/caminos-sacacosechas-sierra-madre-2025",
              "fragmento": "Con la participación directa de comités comunitarios de obra y cuadrillas municipales, se concluyó la pavimentación mediante huellas de concreto hidráulico y empedrado ahogado en más de cuarenta kilómetros de...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "exportacion de cafe y cacao": {
      "consulta": "exportacion de cafe y cacao",
      "motores": {
        "bm25": {
          "consulta": "exportacion de cafe y cacao",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.068,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d12",
              "titulo": "Feria regional celebra el café y el cacao chiapaneco con catas y venta directa",
              "categoria": "Agricultura y Comercio",
              "score": 10.3352,
              "num_palabras": 158,
              "url_fuente": "https://www.chiapas.gob.mx/feria-regional-cafe-cacao-productores-2025",
              "fragmento": "La Feria Regional del Café y el Cacao Chiapaneco reunió durante el fin de semana a más de ochenta cooperativas agrícolas, maestros tostadores, baristas y chocolateros artesanales en el centro de convenciones...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d03",
              "titulo": "Café de especialidad de Chiapas rompe récord histórico de exportación a Europa y Asia",
              "categoria": "Agricultura y Comercio",
              "score": 6.999,
              "num_palabras": 121,
              "url_fuente": "https://www.eleconomista.com.mx/estados/cafe-chiapas-record-exportacion-2025",
              "fragmento": "El café arábica de especialidad cultivado bajo sombra en las montañas de Chiapas rompió su récord histórico de exportación durante el presente ciclo agrícola, impulsado por una creciente demanda en tostadores...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d08",
              "titulo": "Repunta la producción de cacao criollo en el Soconusco con enfoque en chocolate artesanal",
              "categoria": "Agricultura y Comercio",
              "score": 5.424,
              "num_palabras": 117,
              "url_fuente": "https://www.gob.mx/agricultura/articulos/cacao-real-del-soconusco-chiapas",
              "fragmento": "La producción de cacao fino de aroma en la región histórica del Soconusco repuntó un dieciocho por ciento este año tras varios ciclos agrícolas a la baja ocasionados por plagas fúngicas como la moniliasis....",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d31",
              "titulo": "Productores de plátano del Soconusco tecnifican sistemas de riego y cablevías para exportación",
              "categoria": "Agricultura y Comercio",
              "score": 2.5658,
              "num_palabras": 148,
              "url_fuente": "https://www.eleconomista.com.mx/agronegocios/platano-chiapas-exportacion-tecnificacion",
              "fragmento": "Las asociaciones agrícolas de productores de plátano banano en los municipios costeros de Suchiate, Frontera Hidalgo y Mazatán consolidaron la modernización tecnológica de más de cuatro mil hectáreas mediante...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d47",
              "titulo": "Rehabilitan caminos sacacosechas con concreto hidráulico en zonas cafetaleras de la Sierra Madre",
              "categoria": "Infraestructura y Transporte",
              "score": 2.5653,
              "num_palabras": 139,
              "url_fuente": "https://www.chiapas.gob.mx/obras-publicas/caminos-sacacosechas-sierra-madre-2025",
              "fragmento": "Con la participación directa de comités comunitarios de obra y cuadrillas municipales, se concluyó la pavimentación mediante huellas de concreto hidráulico y empedrado ahogado en más de cuarenta kilómetros de...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "exportacion de cafe y cacao",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.174,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d12",
              "titulo": "Feria regional celebra el café y el cacao chiapaneco con catas y venta directa",
              "categoria": "Agricultura y Comercio",
              "score": 0.974,
              "num_palabras": 158,
              "url_fuente": "https://www.chiapas.gob.mx/feria-regional-cafe-cacao-productores-2025",
              "fragmento": "La Feria Regional del Café y el Cacao Chiapaneco reunió durante el fin de semana a más de ochenta cooperativas agrícolas, maestros tostadores, baristas y chocolateros artesanales en el centro de convenciones...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d03",
              "titulo": "Café de especialidad de Chiapas rompe récord histórico de exportación a Europa y Asia",
              "categoria": "Agricultura y Comercio",
              "score": 0.9722,
              "num_palabras": 121,
              "url_fuente": "https://www.eleconomista.com.mx/estados/cafe-chiapas-record-exportacion-2025",
              "fragmento": "El café arábica de especialidad cultivado bajo sombra en las montañas de Chiapas rompió su récord histórico de exportación durante el presente ciclo agrícola, impulsado por una creciente demanda en tostadores...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d08",
              "titulo": "Repunta la producción de cacao criollo en el Soconusco con enfoque en chocolate artesanal",
              "categoria": "Agricultura y Comercio",
              "score": 0.9466,
              "num_palabras": 117,
              "url_fuente": "https://www.gob.mx/agricultura/articulos/cacao-real-del-soconusco-chiapas",
              "fragmento": "La producción de cacao fino de aroma en la región histórica del Soconusco repuntó un dieciocho por ciento este año tras varios ciclos agrícolas a la baja ocasionados por plagas fúngicas como la moniliasis....",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d25",
              "titulo": "Apicultores chiapanecos incrementan producción de miel orgánica multifloral para el mercado alemán",
              "categoria": "Agricultura y Comercio",
              "score": 0.9047,
              "num_palabras": 153,
              "url_fuente": "https://www.gob.mx/agricultura/prensa/miel-organica-chiapas-exportacion-europa",
              "fragmento": "Organizaciones de apicultores indígenas y campesinos de las regiones Selva, Norte y Meseta Comiteca lograron incrementar en un veintidós por ciento el acopio y envasado de miel orgánica certificada libre de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d55",
              "titulo": "Ampliación de la red de fibra óptica lleva internet de alta velocidad a cabeceras municipales indígenas",
              "categoria": "Infraestructura y Transporte",
              "score": 0.8881,
              "num_palabras": 143,
              "url_fuente": "https://www.gob.mx/promtel/prensa/conectividad-fibra-optica-municipios-chiapas",
              "fragmento": "El despliegue de más de seiscientos kilómetros de cableado troncal de fibra óptica oscura sobre la infraestructura de líneas de transmisión eléctrica y carreteras federales permitió habilitar puntos gratuitos...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "exportacion de cafe y cacao",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 5.481,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d12",
              "titulo": "Feria regional celebra el café y el cacao chiapaneco con catas y venta directa",
              "categoria": "Agricultura y Comercio",
              "score": 2.8633,
              "num_palabras": 158,
              "url_fuente": "https://www.chiapas.gob.mx/feria-regional-cafe-cacao-productores-2025",
              "fragmento": "La Feria Regional del Café y el Cacao Chiapaneco reunió durante el fin de semana a más de ochenta cooperativas agrícolas, maestros tostadores, baristas y chocolateros artesanales en el centro de convenciones...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d03",
              "titulo": "Café de especialidad de Chiapas rompe récord histórico de exportación a Europa y Asia",
              "categoria": "Agricultura y Comercio",
              "score": 2.3818,
              "num_palabras": 121,
              "url_fuente": "https://www.eleconomista.com.mx/estados/cafe-chiapas-record-exportacion-2025",
              "fragmento": "El café arábica de especialidad cultivado bajo sombra en las montañas de Chiapas rompió su récord histórico de exportación durante el presente ciclo agrícola, impulsado por una creciente demanda en tostadores...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d08",
              "titulo": "Repunta la producción de cacao criollo en el Soconusco con enfoque en chocolate artesanal",
              "categoria": "Agricultura y Comercio",
              "score": 1.8461,
              "num_palabras": 117,
              "url_fuente": "https://www.gob.mx/agricultura/articulos/cacao-real-del-soconusco-chiapas",
              "fragmento": "La producción de cacao fino de aroma en la región histórica del Soconusco repuntó un dieciocho por ciento este año tras varios ciclos agrícolas a la baja ocasionados por plagas fúngicas como la moniliasis....",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d25",
              "titulo": "Apicultores chiapanecos incrementan producción de miel orgánica multifloral para el mercado alemán",
              "categoria": "Agricultura y Comercio",
              "score": 0.9675,
              "num_palabras": 153,
              "url_fuente": "https://www.gob.mx/agricultura/prensa/miel-organica-chiapas-exportacion-europa",
              "fragmento": "Organizaciones de apicultores indígenas y campesinos de las regiones Selva, Norte y Meseta Comiteca lograron incrementar en un veintidós por ciento el acopio y envasado de miel orgánica certificada libre de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d20",
              "titulo": "Modernizan recinto portuario de Puerto Chiapas para impulsar el comercio marítimo agroindustrial",
              "categoria": "Infraestructura y Transporte",
              "score": 0.8012,
              "num_palabras": 156,
              "url_fuente": "https://www.puertochiapas.com.mx/noticias/modernizacion-infraestructura-portuaria-2025",
              "fragmento": "La Administración del Sistema Portuario Nacional avanzó en las obras de dragado de mantenimiento del canal de navegación y en la ampliación de los patios de contenedores refrigerados en el recinto de Puerto...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "inteligencia artificial y robotica": {
      "consulta": "inteligencia artificial y robotica",
      "motores": {
        "bm25": {
          "consulta": "inteligencia artificial y robotica",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.093,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.8404,
            "MRR": 1.0,
            "R@5": 0.6
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d14",
              "titulo": "Estudiantes de ingeniería de Tuxtla ganan concurso nacional de robótica con brazo biónico",
              "categoria": "Ciencia y Tecnología",
              "score": 10.4441,
              "num_palabras": 151,
              "url_fuente": "https://www.conahcyt.mx/prensa/estudiantes-chiapas-ganan-concurso-nacional-robotica",
              "fragmento": "Un equipo multidisciplinario de estudiantes de ingeniería mecatrónica y sistemas computacionales de Tuxtla Gutiérrez obtuvo el primer lugar absoluto en el Concurso Nacional de Robótica e Innovación Tecnológica...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d07",
              "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
              "categoria": "Ciencia y Tecnología",
              "score": 8.5677,
              "num_palabras": 157,
              "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
              "fragmento": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d24",
              "titulo": "Investigadores desarrollan modelos de visión artificial con drones para detectar roya en cafetales",
              "categoria": "Ciencia y Tecnología",
              "score": 5.3846,
              "num_palabras": 150,
              "url_fuente": "https://www.ecosur.mx/investigacion/drones-vision-artificial-roya-cafe-chiapas",
              "fragmento": "Un grupo de investigación interinstitucional conformado por especialistas en inteligencia artificial de la UPCh y agrónomos de El Colegio de la Frontera Sur (ECOSUR) desarrolló un sistema de diagnóstico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 3.5229,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d49",
              "titulo": "Despliegan bases de datos vectoriales con grafos HNSW para acelerar consultas semánticas a gran escala",
              "categoria": "Ciencia y Tecnología",
              "score": 3.506,
              "num_palabras": 143,
              "url_fuente": "https://qdrant.tech/documentation/concepts/indexing-hnsw-hybrid-search/",
              "fragmento": "En los sistemas modernos de recuperación de información y generación aumentada por recuperación (RAG), calcular la similitud coseno de manera exhaustiva entre una consulta y millones de vectores densos de alta...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "inteligencia artificial y robotica",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.055,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.8133,
            "MRR": 1.0,
            "R@5": 0.8
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d14",
              "titulo": "Estudiantes de ingeniería de Tuxtla ganan concurso nacional de robótica con brazo biónico",
              "categoria": "Ciencia y Tecnología",
              "score": 0.9661,
              "num_palabras": 151,
              "url_fuente": "https://www.conahcyt.mx/prensa/estudiantes-chiapas-ganan-concurso-nacional-robotica",
              "fragmento": "Un equipo multidisciplinario de estudiantes de ingeniería mecatrónica y sistemas computacionales de Tuxtla Gutiérrez obtuvo el primer lugar absoluto en el Concurso Nacional de Robótica e Innovación Tecnológica...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d54",
              "titulo": "Arquitecturas de Reranking con Cross-Encoders optimizan la precisión en motores de búsqueda empresariales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.9004,
              "num_palabras": 143,
              "url_fuente": "https://www.sbert.net/examples/applications/retrieve_rerank/README.html",
              "fragmento": "La implementación de arquitecturas de recuperación en dos etapas ha redefinido el equilibrio entre latencia y precisión en los motores de búsqueda semántica empresariales. Mientras que en la primera etapa un...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d30",
              "titulo": "Desarrollan traductor neuronal bidireccional para lenguas mayenses Tsotsil y Tseltal con arquitectura Transformer",
              "categoria": "Ciencia y Tecnología",
              "score": 0.7736,
              "num_palabras": 151,
              "url_fuente": "https://www.inali.gob.mx/innovacion/traductor-neuronal-tsotsil-tseltal-chiapas",
              "fragmento": "Lingüistas computacionales e ingenieros en software desarrollaron un modelo de traducción automática neuronal bidireccional entre el español y las lenguas originarias mayenses Tsotsil y Tseltal, habladas por...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d24",
              "titulo": "Investigadores desarrollan modelos de visión artificial con drones para detectar roya en cafetales",
              "categoria": "Ciencia y Tecnología",
              "score": 0.751,
              "num_palabras": 150,
              "url_fuente": "https://www.ecosur.mx/investigacion/drones-vision-artificial-roya-cafe-chiapas",
              "fragmento": "Un grupo de investigación interinstitucional conformado por especialistas en inteligencia artificial de la UPCh y agrónomos de El Colegio de la Frontera Sur (ECOSUR) desarrolló un sistema de diagnóstico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 5,
              "id": "d07",
              "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
              "categoria": "Ciencia y Tecnología",
              "score": 0.7298,
              "num_palabras": 157,
              "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
              "fragmento": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto...",
              "relevancia_qrel": 3
            }
          ]
        },
        "hibrido": {
          "consulta": "inteligencia artificial y robotica",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.068,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d14",
              "titulo": "Estudiantes de ingeniería de Tuxtla ganan concurso nacional de robótica con brazo biónico",
              "categoria": "Ciencia y Tecnología",
              "score": 2.8713,
              "num_palabras": 151,
              "url_fuente": "https://www.conahcyt.mx/prensa/estudiantes-chiapas-ganan-concurso-nacional-robotica",
              "fragmento": "Un equipo multidisciplinario de estudiantes de ingeniería mecatrónica y sistemas computacionales de Tuxtla Gutiérrez obtuvo el primer lugar absoluto en el Concurso Nacional de Robótica e Innovación Tecnológica...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d07",
              "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
              "categoria": "Ciencia y Tecnología",
              "score": 2.4925,
              "num_palabras": 157,
              "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
              "fragmento": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d24",
              "titulo": "Investigadores desarrollan modelos de visión artificial con drones para detectar roya en cafetales",
              "categoria": "Ciencia y Tecnología",
              "score": 1.7943,
              "num_palabras": 150,
              "url_fuente": "https://www.ecosur.mx/investigacion/drones-vision-artificial-roya-cafe-chiapas",
              "fragmento": "Un grupo de investigación interinstitucional conformado por especialistas en inteligencia artificial de la UPCh y agrónomos de El Colegio de la Frontera Sur (ECOSUR) desarrolló un sistema de diagnóstico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d30",
              "titulo": "Desarrollan traductor neuronal bidireccional para lenguas mayenses Tsotsil y Tseltal con arquitectura Transformer",
              "categoria": "Ciencia y Tecnología",
              "score": 1.5661,
              "num_palabras": 151,
              "url_fuente": "https://www.inali.gob.mx/innovacion/traductor-neuronal-tsotsil-tseltal-chiapas",
              "fragmento": "Lingüistas computacionales e ingenieros en software desarrollaron un modelo de traducción automática neuronal bidireccional entre el español y las lenguas originarias mayenses Tsotsil y Tseltal, habladas por...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 5,
              "id": "d36",
              "titulo": "Implementan motor de búsqueda híbrido con BM25 y Sentence-BERT para digitalizar archivos judiciales",
              "categoria": "Ciencia y Tecnología",
              "score": 1.5118,
              "num_palabras": 138,
              "url_fuente": "https://www.poderjudicialchiapas.gob.mx/innovacion/buscador-hibrido-jurisprudencia-ia",
              "fragmento": "El archivo electrónico de sentencias y tesis jurídicas del estado implementó una arquitectura de recuperación de información híbrida de dos etapas que combina un índice invertido probabilístico Okapi BM25 con...",
              "relevancia_qrel": 2
            }
          ]
        }
      }
    },
    "turismo cultural": {
      "consulta": "turismo cultural",
      "motores": {
        "bm25": {
          "consulta": "turismo cultural",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.057,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.5476,
            "MRR": 0.5,
            "R@5": 0.6
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d34",
              "titulo": "Cascadas de Agua Azul y Misol-Há atraen turismo ecológico comunitario en la ruta maya",
              "categoria": "Turismo y Cultura",
              "score": 5.2873,
              "num_palabras": 151,
              "url_fuente": "https://www.turismochiapas.gob.mx/rutas/cascadas-de-agua-azul-y-misol-ha",
              "fragmento": "Las Cascadas de Agua Azul, ubicadas en el municipio de Tumbalá sobre el cauce del río Yaxhá, junto con el salto de agua de treinta metros de Misol-Há en Salto de Agua, registraron una notable recuperación en...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 2,
              "id": "d09",
              "titulo": "San Cristóbal de las Casas se consolida como destino cultural y gastronómico internacional",
              "categoria": "Turismo y Cultura",
              "score": 3.3362,
              "num_palabras": 116,
              "url_fuente": "https://www.turismochiapas.gob.mx/destinos/san-cristobal-de-las-casas-cultura",
              "fragmento": "La ciudad colonial de San Cristóbal de las Casas, enclavada en el valle de Jovel a más de dos mil cien metros de altitud, se consolida como uno de los destinos culturales y gastronómicos más vibrantes de...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d39",
              "titulo": "Murales mayas de Bonampak reciben tratamiento de conservación preventiva contra humedad selvática",
              "categoria": "Turismo y Cultura",
              "score": 2.7076,
              "num_palabras": 140,
              "url_fuente": "https://www.inah.gob.mx/boletines/restauracion-pinturas-murales-bonampak-chiapas",
              "fragmento": "Restauradores especializados de la Coordinación Nacional de Conservación del Patrimonio Cultural realizaron trabajos de mantenimiento microclimático y limpieza físico-química en los célebres murales...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d51",
              "titulo": "Pueblo Mágico de Comitán de Domínguez celebra festival cultural e histórico en honor a Belisario Domínguez",
              "categoria": "Turismo y Cultura",
              "score": 2.6888,
              "num_palabras": 134,
              "url_fuente": "https://www.comitan.gob.mx/turismo/festival-cultural-belisario-dominguez",
              "fragmento": "El Pueblo Mágico de Comitán de Domínguez, cuna del prócer de la libertad de expresión Belisario Domínguez y de la destacada escritora Rosario Castellanos, celebró su tradicional festival internacional de las...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 5,
              "id": "d27",
              "titulo": "Fiesta Grande de Enero en Chiapa de Corzo reúne a miles de Parachicos y Chuntáes en honor a San Sebastián",
              "categoria": "Turismo y Cultura",
              "score": 2.5987,
              "num_palabras": 145,
              "url_fuente": "https://www.unesco.org/es/intangible-cultural-heritage/parachicos-chiapa-de-corzo",
              "fragmento": "Con música de pito de carrizo y tambor, miles de danzantes tradicionales conocidos como Parachicos, ataviados con máscaras de madera talladas y laqueadas a mano, monteras de ixtle, sarapes multicolores y...",
              "relevancia_qrel": 3
            }
          ]
        },
        "embeddings": {
          "consulta": "turismo cultural",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 0.862,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.489,
            "MRR": 1.0,
            "R@5": 0.6
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d44",
              "titulo": "Laca tradicional y máscaras talladas de Chiapa de Corzo preservan técnicas prehispánicas de maque",
              "categoria": "Turismo y Cultura",
              "score": 0.9594,
              "num_palabras": 137,
              "url_fuente": "https://www.cultura.gob.mx/fonart/artesanias-laca-maque-chiapa-de-corzo",
              "fragmento": "Los talleres familiares de laca o maque tradicional en Chiapa de Corzo mantienen viva una técnica artística de origen prehispánico que utiliza tierras minerales naturales, aceites vegetales e insectos...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 2,
              "id": "d38",
              "titulo": "Aeropuerto Internacional Ángel Albino Corzo amplía plataforma de carga y rutas aéreas nacionales",
              "categoria": "Infraestructura y Transporte",
              "score": 0.9044,
              "num_palabras": 142,
              "url_fuente": "https://www.aeropuertosgap.com.mx/prensa/expansion-aeropuerto-angel-albino-corzo-chiapas",
              "fragmento": "El Aeropuerto Internacional Ángel Albino Corzo, principal terminal aérea del estado ubicada en el municipio de Chiapa de Corzo, concluyó la ampliación de su plataforma logística de carga aérea con cámaras...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d51",
              "titulo": "Pueblo Mágico de Comitán de Domínguez celebra festival cultural e histórico en honor a Belisario Domínguez",
              "categoria": "Turismo y Cultura",
              "score": 0.773,
              "num_palabras": 134,
              "url_fuente": "https://www.comitan.gob.mx/turismo/festival-cultural-belisario-dominguez",
              "fragmento": "El Pueblo Mágico de Comitán de Domínguez, cuna del prócer de la libertad de expresión Belisario Domínguez y de la destacada escritora Rosario Castellanos, celebró su tradicional festival internacional de las...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d27",
              "titulo": "Fiesta Grande de Enero en Chiapa de Corzo reúne a miles de Parachicos y Chuntáes en honor a San Sebastián",
              "categoria": "Turismo y Cultura",
              "score": 0.7456,
              "num_palabras": 145,
              "url_fuente": "https://www.unesco.org/es/intangible-cultural-heritage/parachicos-chiapa-de-corzo",
              "fragmento": "Con música de pito de carrizo y tambor, miles de danzantes tradicionales conocidos como Parachicos, ataviados con máscaras de madera talladas y laqueadas a mano, monteras de ixtle, sarapes multicolores y...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 5,
              "id": "d34",
              "titulo": "Cascadas de Agua Azul y Misol-Há atraen turismo ecológico comunitario en la ruta maya",
              "categoria": "Turismo y Cultura",
              "score": 0.6875,
              "num_palabras": 151,
              "url_fuente": "https://www.turismochiapas.gob.mx/rutas/cascadas-de-agua-azul-y-misol-ha",
              "fragmento": "Las Cascadas de Agua Azul, ubicadas en el municipio de Tumbalá sobre el cauce del río Yaxhá, junto con el salto de agua de treinta metros de Misol-Há en Salto de Agua, registraron una notable recuperación en...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "turismo cultural",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.295,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.9245,
            "MRR": 1.0,
            "R@5": 0.8
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d09",
              "titulo": "San Cristóbal de las Casas se consolida como destino cultural y gastronómico internacional",
              "categoria": "Turismo y Cultura",
              "score": 1.6661,
              "num_palabras": 116,
              "url_fuente": "https://www.turismochiapas.gob.mx/destinos/san-cristobal-de-las-casas-cultura",
              "fragmento": "La ciudad colonial de San Cristóbal de las Casas, enclavada en el valle de Jovel a más de dos mil cien metros de altitud, se consolida como uno de los destinos culturales y gastronómicos más vibrantes de...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d27",
              "titulo": "Fiesta Grande de Enero en Chiapa de Corzo reúne a miles de Parachicos y Chuntáes en honor a San Sebastián",
              "categoria": "Turismo y Cultura",
              "score": 1.6265,
              "num_palabras": 145,
              "url_fuente": "https://www.unesco.org/es/intangible-cultural-heritage/parachicos-chiapa-de-corzo",
              "fragmento": "Con música de pito de carrizo y tambor, miles de danzantes tradicionales conocidos como Parachicos, ataviados con máscaras de madera talladas y laqueadas a mano, monteras de ixtle, sarapes multicolores y...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d44",
              "titulo": "Laca tradicional y máscaras talladas de Chiapa de Corzo preservan técnicas prehispánicas de maque",
              "categoria": "Turismo y Cultura",
              "score": 1.424,
              "num_palabras": 137,
              "url_fuente": "https://www.cultura.gob.mx/fonart/artesanias-laca-maque-chiapa-de-corzo",
              "fragmento": "Los talleres familiares de laca o maque tradicional en Chiapa de Corzo mantienen viva una técnica artística de origen prehispánico que utiliza tierras minerales naturales, aceites vegetales e insectos...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d51",
              "titulo": "Pueblo Mágico de Comitán de Domínguez celebra festival cultural e histórico en honor a Belisario Domínguez",
              "categoria": "Turismo y Cultura",
              "score": 1.4051,
              "num_palabras": 134,
              "url_fuente": "https://www.comitan.gob.mx/turismo/festival-cultural-belisario-dominguez",
              "fragmento": "El Pueblo Mágico de Comitán de Domínguez, cuna del prócer de la libertad de expresión Belisario Domínguez y de la destacada escritora Rosario Castellanos, celebró su tradicional festival internacional de las...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 5,
              "id": "d34",
              "titulo": "Cascadas de Agua Azul y Misol-Há atraen turismo ecológico comunitario en la ruta maya",
              "categoria": "Turismo y Cultura",
              "score": 1.2414,
              "num_palabras": 151,
              "url_fuente": "https://www.turismochiapas.gob.mx/rutas/cascadas-de-agua-azul-y-misol-ha",
              "fragmento": "Las Cascadas de Agua Azul, ubicadas en el municipio de Tumbalá sobre el cauce del río Yaxhá, junto con el salto de agua de treinta metros de Misol-Há en Salto de Agua, registraron una notable recuperación en...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "energia limpia y presas hidroelectricas": {
      "consulta": "energia limpia y presas hidroelectricas",
      "motores": {
        "bm25": {
          "consulta": "energia limpia y presas hidroelectricas",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.075,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d15",
              "titulo": "Complejo hidroeléctrico del río Grijalva aporta energía limpia estratégica al sistema nacional",
              "categoria": "Energía e Infraestructura",
              "score": 14.0635,
              "num_palabras": 152,
              "url_fuente": "https://www.cfe.mx/generacion/hidroelectricas/complejo-grijalva-chiapas",
              "fragmento": "El sistema hidroeléctrico integral ubicado sobre la cuenca del río Grijalva en el estado de Chiapas, conformado por las centrales generadoras Belisario Domínguez (La Angostura), Manuel Moreno Torres...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d33",
              "titulo": "Parque eólico en Arriaga genera electricidad limpia aprovechando las corrientes de viento del Istmo",
              "categoria": "Energía e Infraestructura",
              "score": 9.8225,
              "num_palabras": 148,
              "url_fuente": "https://www.gob.mx/sener/articulos/energia-eolica-arriaga-costa-chiapas",
              "fragmento": "El corredor eólico situado en las llanuras costeras del municipio de Arriaga aprovecha las intensas corrientes de aire que cruzan desde el Golfo de México hacia el océano Pacífico a través de la depresión del...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 3,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 3.9407,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d26",
              "titulo": "Construyen puente atirantado sobre el embalse de La Angostura para integrar municipios de La Concordia",
              "categoria": "Infraestructura y Transporte",
              "score": 3.6292,
              "num_palabras": 150,
              "url_fuente": "https://www.gob.mx/sct/acciones/puentes-atirantados-la-concordia-chiapas",
              "fragmento": "La conclusión e inauguración del nuevo puente vehicular atirantado que cruza el embalse de la presa Belisario Domínguez (La Angostura) ha transformado radicalmente la conectividad terrestre entre los...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d13",
              "titulo": "Organismo operador restablece servicio de agua potable tras reparar acueducto principal",
              "categoria": "Hidrología y Clima",
              "score": 3.0472,
              "num_palabras": 115,
              "url_fuente": "https://www.smapa.gob.mx/comunicados/restablecimiento-servicio-agua-potable-red",
              "fragmento": "El organismo operador del Sistema Municipal de Agua Potable y Alcantarillado informó que el servicio de suministro de agua potable se restablecerá de forma escalonada durante las próximas cuarenta y ocho horas...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "energia limpia y presas hidroelectricas",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.167,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.858,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d33",
              "titulo": "Parque eólico en Arriaga genera electricidad limpia aprovechando las corrientes de viento del Istmo",
              "categoria": "Energía e Infraestructura",
              "score": 0.933,
              "num_palabras": 148,
              "url_fuente": "https://www.gob.mx/sener/articulos/energia-eolica-arriaga-costa-chiapas",
              "fragmento": "El corredor eólico situado en las llanuras costeras del municipio de Arriaga aprovecha las intensas corrientes de aire que cruzan desde el Golfo de México hacia el océano Pacífico a través de la depresión del...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 2,
              "id": "d15",
              "titulo": "Complejo hidroeléctrico del río Grijalva aporta energía limpia estratégica al sistema nacional",
              "categoria": "Energía e Infraestructura",
              "score": 0.7776,
              "num_palabras": 152,
              "url_fuente": "https://www.cfe.mx/generacion/hidroelectricas/complejo-grijalva-chiapas",
              "fragmento": "El sistema hidroeléctrico integral ubicado sobre la cuenca del río Grijalva en el estado de Chiapas, conformado por las centrales generadoras Belisario Domínguez (La Angostura), Manuel Moreno Torres...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 0.3714,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d08",
              "titulo": "Repunta la producción de cacao criollo en el Soconusco con enfoque en chocolate artesanal",
              "categoria": "Agricultura y Comercio",
              "score": 0.0553,
              "num_palabras": 117,
              "url_fuente": "https://www.gob.mx/agricultura/articulos/cacao-real-del-soconusco-chiapas",
              "fragmento": "La producción de cacao fino de aroma en la región histórica del Soconusco repuntó un dieciocho por ciento este año tras varios ciclos agrícolas a la baja ocasionados por plagas fúngicas como la moniliasis....",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d41",
              "titulo": "Campaña estatal de vacunación e inmunización infantil alcanza cobertura del noventa y cinco por ciento",
              "categoria": "Salud Pública",
              "score": 0.0469,
              "num_palabras": 139,
              "url_fuente": "https://saludchiapas.gob.mx/campanas/vacunacion-universal-infantil-cobertura-2025",
              "fragmento": "Las jurisdicciones sanitarias de las quince regiones socioeconómicas del estado reportaron un cumplimiento del noventa y cinco por ciento en la meta de aplicación de dosis del esquema básico de vacunación...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "energia limpia y presas hidroelectricas",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 5.496,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d15",
              "titulo": "Complejo hidroeléctrico del río Grijalva aporta energía limpia estratégica al sistema nacional",
              "categoria": "Energía e Infraestructura",
              "score": 3.1831,
              "num_palabras": 152,
              "url_fuente": "https://www.cfe.mx/generacion/hidroelectricas/complejo-grijalva-chiapas",
              "fragmento": "El sistema hidroeléctrico integral ubicado sobre la cuenca del río Grijalva en el estado de Chiapas, conformado por las centrales generadoras Belisario Domínguez (La Angostura), Manuel Moreno Torres...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d33",
              "titulo": "Parque eólico en Arriaga genera electricidad limpia aprovechando las corrientes de viento del Istmo",
              "categoria": "Energía e Infraestructura",
              "score": 2.5251,
              "num_palabras": 148,
              "url_fuente": "https://www.gob.mx/sener/articulos/energia-eolica-arriaga-costa-chiapas",
              "fragmento": "El corredor eólico situado en las llanuras costeras del municipio de Arriaga aprovecha las intensas corrientes de aire que cruzan desde el Golfo de México hacia el océano Pacífico a través de la depresión del...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 3,
              "id": "d43",
              "titulo": "Centro de biodigestión y energía solar impulsa sustentabilidad en el campus de la UPCh en Suchiapa",
              "categoria": "Ciencia y Tecnología",
              "score": 1.2943,
              "num_palabras": 145,
              "url_fuente": "https://www.upchiapas.edu.mx/investigacion/energias-renovables-biodigestion-solar",
              "fragmento": "Docentes y alumnos del programa académico de Ingeniería en Energía de la Universidad Politécnica de Chiapas pusieron en marcha una planta piloto de biodigestión anaerobia y un arreglo fotovoltaico...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d26",
              "titulo": "Construyen puente atirantado sobre el embalse de La Angostura para integrar municipios de La Concordia",
              "categoria": "Infraestructura y Transporte",
              "score": 0.5278,
              "num_palabras": 150,
              "url_fuente": "https://www.gob.mx/sct/acciones/puentes-atirantados-la-concordia-chiapas",
              "fragmento": "La conclusión e inauguración del nuevo puente vehicular atirantado que cruza el embalse de la presa Belisario Domínguez (La Angostura) ha transformado radicalmente la conectividad terrestre entre los...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d13",
              "titulo": "Organismo operador restablece servicio de agua potable tras reparar acueducto principal",
              "categoria": "Hidrología y Clima",
              "score": 0.4439,
              "num_palabras": 115,
              "url_fuente": "https://www.smapa.gob.mx/comunicados/restablecimiento-servicio-agua-potable-red",
              "fragmento": "El organismo operador del Sistema Municipal de Agua Potable y Alcantarillado informó que el servicio de suministro de agua potable se restablecerá de forma escalonada durante las próximas cuarenta y ocho horas...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "conservacion de fauna y selva lacandona": {
      "consulta": "conservacion de fauna y selva lacandona",
      "motores": {
        "bm25": {
          "consulta": "conservacion de fauna y selva lacandona",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.106,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.6259,
            "MRR": 1.0,
            "R@5": 0.5
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d16",
              "titulo": "Programas de conservación en la Selva Lacandona protegen hábitat crítico del jaguar y guacamaya roja",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 11.8453,
              "num_palabras": 151,
              "url_fuente": "https://www.gob.mx/semarnat/articulos/reserva-biosfera-montes-azules-lacandona",
              "fragmento": "La Reserva de la Biosfera Montes Azules, corazón ecológico de la Selva Lacandona en el oriente de Chiapas, concentra más del veinte por ciento de la biodiversidad terrestre de todo el territorio mexicano en...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d48",
              "titulo": "Zoológico Miguel Álvarez del Toro logra reproducción en cautiverio del quetzal y el tapir centroamericano",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 8.1348,
              "num_palabras": 145,
              "url_fuente": "https://www.zoomat.gob.mx/conservacion/reproduccion-quetzal-tapir-chiapas",
              "fragmento": "El Zoológico Regional Miguel Álvarez del Toro (ZOOMAT), ubicado dentro de la reserva ecológica El Zapotal al suroriente de Tuxtla Gutiérrez y único en su tipo por exhibir exclusivamente fauna endémica y nativa...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 3,
              "id": "d39",
              "titulo": "Murales mayas de Bonampak reciben tratamiento de conservación preventiva contra humedad selvática",
              "categoria": "Turismo y Cultura",
              "score": 7.8071,
              "num_palabras": 140,
              "url_fuente": "https://www.inah.gob.mx/boletines/restauracion-pinturas-murales-bonampak-chiapas",
              "fragmento": "Restauradores especializados de la Coordinación Nacional de Conservación del Patrimonio Cultural realizaron trabajos de mantenimiento microclimático y limpieza físico-química en los célebres murales...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d53",
              "titulo": "Cañón de Río La Venta destaca por sus formaciones kársticas, cuevas prehispánicas y biodiversidad",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 7.3191,
              "num_palabras": 146,
              "url_fuente": "https://www.gob.mx/conanp/prensa/reserva-biosfera-selva-el-ocote-rio-la-venta",
              "fragmento": "Dentro del polígono de la Reserva de la Biosfera Selva El Ocote, en el noroccidente de Chiapas, el cañón sagrado del río La Venta conforma una fractura geológica monumental en roca caliza con paredes...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d29",
              "titulo": "Lagunas de Montebello enfrentan retos de conservación para preservar la coloración cristalina de sus aguas",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 6.5871,
              "num_palabras": 151,
              "url_fuente": "https://www.gob.mx/conanp/prensa/conservacion-parque-nacional-lagunas-de-montebello",
              "fragmento": "El Parque Nacional Lagunas de Montebello, célebre a nivel mundial por su sistema kárstico de más de cincuenta lagos que exhiben tonalidades desde el verde esmeralda hasta el azul turquesa profundo, es objeto...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "conservacion de fauna y selva lacandona",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.257,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.4834,
            "MRR": 0.5,
            "R@5": 0.75
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d39",
              "titulo": "Murales mayas de Bonampak reciben tratamiento de conservación preventiva contra humedad selvática",
              "categoria": "Turismo y Cultura",
              "score": 0.9521,
              "num_palabras": 140,
              "url_fuente": "https://www.inah.gob.mx/boletines/restauracion-pinturas-murales-bonampak-chiapas",
              "fragmento": "Restauradores especializados de la Coordinación Nacional de Conservación del Patrimonio Cultural realizaron trabajos de mantenimiento microclimático y limpieza físico-química en los célebres murales...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 2,
              "id": "d16",
              "titulo": "Programas de conservación en la Selva Lacandona protegen hábitat crítico del jaguar y guacamaya roja",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.852,
              "num_palabras": 151,
              "url_fuente": "https://www.gob.mx/semarnat/articulos/reserva-biosfera-montes-azules-lacandona",
              "fragmento": "La Reserva de la Biosfera Montes Azules, corazón ecológico de la Selva Lacandona en el oriente de Chiapas, concentra más del veinte por ciento de la biodiversidad terrestre de todo el territorio mexicano en...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d44",
              "titulo": "Laca tradicional y máscaras talladas de Chiapa de Corzo preservan técnicas prehispánicas de maque",
              "categoria": "Turismo y Cultura",
              "score": 0.6911,
              "num_palabras": 137,
              "url_fuente": "https://www.cultura.gob.mx/fonart/artesanias-laca-maque-chiapa-de-corzo",
              "fragmento": "Los talleres familiares de laca o maque tradicional en Chiapa de Corzo mantienen viva una técnica artística de origen prehispánico que utiliza tierras minerales naturales, aceites vegetales e insectos...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d48",
              "titulo": "Zoológico Miguel Álvarez del Toro logra reproducción en cautiverio del quetzal y el tapir centroamericano",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.667,
              "num_palabras": 145,
              "url_fuente": "https://www.zoomat.gob.mx/conservacion/reproduccion-quetzal-tapir-chiapas",
              "fragmento": "El Zoológico Regional Miguel Álvarez del Toro (ZOOMAT), ubicado dentro de la reserva ecológica El Zapotal al suroriente de Tuxtla Gutiérrez y único en su tipo por exhibir exclusivamente fauna endémica y nativa...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 5,
              "id": "d35",
              "titulo": "Santuario de tortuga marina en Puerto Arista libera más de cien mil crías de tortuga golfina al Pacífico",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.6265,
              "num_palabras": 148,
              "url_fuente": "https://www.gob.mx/conanp/prensa/liberacion-tortuga-marina-puerto-arista-chiapas",
              "fragmento": "Biólogos marinos y voluntarios del campamento tortuguero del Santuario Playa de Puerto Arista, en el municipio costero de Tonalá, lograron la incubación protegida y liberación exitosa al océano Pacífico de más...",
              "relevancia_qrel": 2
            }
          ]
        },
        "hibrido": {
          "consulta": "conservacion de fauna y selva lacandona",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.683,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.7314,
            "MRR": 1.0,
            "R@5": 0.75
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d16",
              "titulo": "Programas de conservación en la Selva Lacandona protegen hábitat crítico del jaguar y guacamaya roja",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 3.0453,
              "num_palabras": 151,
              "url_fuente": "https://www.gob.mx/semarnat/articulos/reserva-biosfera-montes-azules-lacandona",
              "fragmento": "La Reserva de la Biosfera Montes Azules, corazón ecológico de la Selva Lacandona en el oriente de Chiapas, concentra más del veinte por ciento de la biodiversidad terrestre de todo el territorio mexicano en...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d48",
              "titulo": "Zoológico Miguel Álvarez del Toro logra reproducción en cautiverio del quetzal y el tapir centroamericano",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 2.1497,
              "num_palabras": 145,
              "url_fuente": "https://www.zoomat.gob.mx/conservacion/reproduccion-quetzal-tapir-chiapas",
              "fragmento": "El Zoológico Regional Miguel Álvarez del Toro (ZOOMAT), ubicado dentro de la reserva ecológica El Zapotal al suroriente de Tuxtla Gutiérrez y único en su tipo por exhibir exclusivamente fauna endémica y nativa...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 3,
              "id": "d35",
              "titulo": "Santuario de tortuga marina en Puerto Arista libera más de cien mil crías de tortuga golfina al Pacífico",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 1.915,
              "num_palabras": 148,
              "url_fuente": "https://www.gob.mx/conanp/prensa/liberacion-tortuga-marina-puerto-arista-chiapas",
              "fragmento": "Biólogos marinos y voluntarios del campamento tortuguero del Santuario Playa de Puerto Arista, en el municipio costero de Tonalá, lograron la incubación protegida y liberación exitosa al océano Pacífico de más...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d39",
              "titulo": "Murales mayas de Bonampak reciben tratamiento de conservación preventiva contra humedad selvática",
              "categoria": "Turismo y Cultura",
              "score": 1.7957,
              "num_palabras": 140,
              "url_fuente": "https://www.inah.gob.mx/boletines/restauracion-pinturas-murales-bonampak-chiapas",
              "fragmento": "Restauradores especializados de la Coordinación Nacional de Conservación del Patrimonio Cultural realizaron trabajos de mantenimiento microclimático y limpieza físico-química en los célebres murales...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d29",
              "titulo": "Lagunas de Montebello enfrentan retos de conservación para preservar la coloración cristalina de sus aguas",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 1.3326,
              "num_palabras": 151,
              "url_fuente": "https://www.gob.mx/conanp/prensa/conservacion-parque-nacional-lagunas-de-montebello",
              "fragmento": "El Parque Nacional Lagunas de Montebello, célebre a nivel mundial por su sistema kárstico de más de cincuenta lagos que exhiben tonalidades desde el verde esmeralda hasta el azul turquesa profundo, es objeto...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    },
    "infraestructura carretera y puentes": {
      "consulta": "infraestructura carretera y puentes",
      "motores": {
        "bm25": {
          "consulta": "infraestructura carretera y puentes",
          "motor": "bm25",
          "nombre_motor": "Motor 1 · Léxico Probabilístico (Okapi BM25)",
          "latencia_ms": 0.078,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 0.5419,
            "MRR": 1.0,
            "R@5": 0.3333
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d10",
              "titulo": "Avanza obra de rehabilitación y modernización en la carretera Tuxtla-Costa",
              "categoria": "Infraestructura y Transporte",
              "score": 8.3747,
              "num_palabras": 152,
              "url_fuente": "https://www.gob.mx/sct/prensa/modernizacion-carretera-tuxtla-costa-chiapas",
              "fragmento": "Los trabajos de rehabilitación asfáltica, ampliación de acotamientos y estabilización de taludes en el corredor carretero que conecta la capital Tuxtla Gutiérrez con la región Istmo-Costa a través de...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d55",
              "titulo": "Ampliación de la red de fibra óptica lleva internet de alta velocidad a cabeceras municipales indígenas",
              "categoria": "Infraestructura y Transporte",
              "score": 7.4781,
              "num_palabras": 143,
              "url_fuente": "https://www.gob.mx/promtel/prensa/conectividad-fibra-optica-municipios-chiapas",
              "fragmento": "El despliegue de más de seiscientos kilómetros de cableado troncal de fibra óptica oscura sobre la infraestructura de líneas de transmisión eléctrica y carreteras federales permitió habilitar puntos gratuitos...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 3,
              "id": "d40",
              "titulo": "Dragado y desazolve de ríos en la costa de Huixtla y Mapastepec mitigan riesgo de desbordamientos",
              "categoria": "Hidrología y Clima",
              "score": 2.4559,
              "num_palabras": 161,
              "url_fuente": "https://www.gob.mx/conagua/acciones/desazolve-rios-costa-soconusco-chiapas",
              "fragmento": "Con maquinaria pesada consistente en excavadoras de brazo largo y tractores de oruga, brigadas de infraestructura hidráulica ejecutaron el dragado de sedimentos pétreos y el reforzamiento de bordos de...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 4,
              "id": "d07",
              "titulo": "UPCh inaugura moderno laboratorio de inteligencia artificial y cómputo de alto rendimiento",
              "categoria": "Ciencia y Tecnología",
              "score": 2.3448,
              "num_palabras": 157,
              "url_fuente": "https://www.upchiapas.edu.mx/noticias/inauguracion-laboratorio-inteligencia-artificial",
              "fragmento": "La Universidad Politécnica de Chiapas (UPCh), con sede en el municipio de Suchiapa, inauguró un moderno laboratorio de inteligencia artificial y ciencia de datos equipado con servidores de cómputo de alto...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d06",
              "titulo": "Sismo de magnitud 5.1 se registra frente a las costas de Chiapas sin dejar daños",
              "categoria": "Hidrología y Clima",
              "score": 2.2334,
              "num_palabras": 120,
              "url_fuente": "http://www.ssn.unam.mx/sismicidad/reportes-especiales/chiapas-costa-2025",
              "fragmento": "Un sismo de magnitud 5.1 en la escala de magnitud de momento se registró durante la madrugada del martes con epicentro localizado en el océano Pacífico, a cuarenta y dos kilómetros al suroeste de Ciudad...",
              "relevancia_qrel": 0
            }
          ]
        },
        "embeddings": {
          "consulta": "infraestructura carretera y puentes",
          "motor": "embeddings",
          "nombre_motor": "Motor 2 · Semántico Denso (Embeddings 384d)",
          "latencia_ms": 1.034,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d10",
              "titulo": "Avanza obra de rehabilitación y modernización en la carretera Tuxtla-Costa",
              "categoria": "Infraestructura y Transporte",
              "score": 0.9032,
              "num_palabras": 152,
              "url_fuente": "https://www.gob.mx/sct/prensa/modernizacion-carretera-tuxtla-costa-chiapas",
              "fragmento": "Los trabajos de rehabilitación asfáltica, ampliación de acotamientos y estabilización de taludes en el corredor carretero que conecta la capital Tuxtla Gutiérrez con la región Istmo-Costa a través de...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d26",
              "titulo": "Construyen puente atirantado sobre el embalse de La Angostura para integrar municipios de La Concordia",
              "categoria": "Infraestructura y Transporte",
              "score": 0.7756,
              "num_palabras": 150,
              "url_fuente": "https://www.gob.mx/sct/acciones/puentes-atirantados-la-concordia-chiapas",
              "fragmento": "La conclusión e inauguración del nuevo puente vehicular atirantado que cruza el embalse de la presa Belisario Domínguez (La Angostura) ha transformado radicalmente la conectividad terrestre entre los...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d47",
              "titulo": "Rehabilitan caminos sacacosechas con concreto hidráulico en zonas cafetaleras de la Sierra Madre",
              "categoria": "Infraestructura y Transporte",
              "score": 0.6662,
              "num_palabras": 139,
              "url_fuente": "https://www.chiapas.gob.mx/obras-publicas/caminos-sacacosechas-sierra-madre-2025",
              "fragmento": "Con la participación directa de comités comunitarios de obra y cuadrillas municipales, se concluyó la pavimentación mediante huellas de concreto hidráulico y empedrado ahogado en más de cuarenta kilómetros de...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d42",
              "titulo": "Manglares de La Encrucijada capturan carbono azul y sostienen la pesquería artesanal de camarón",
              "categoria": "Biodiversidad y Medio Ambiente",
              "score": 0.0931,
              "num_palabras": 152,
              "url_fuente": "https://www.gob.mx/conanp/articulos/reserva-biosfera-la-encrucijada-manglares-chiapas",
              "fragmento": "La Reserva de la Biosfera La Encrucijada, extendida a lo largo de la llanura costera del Pacífico chiapaneco entre Pijijiapan y Mazatán, alberga los bosques de manglar más altos de toda la costa pacífica del...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d55",
              "titulo": "Ampliación de la red de fibra óptica lleva internet de alta velocidad a cabeceras municipales indígenas",
              "categoria": "Infraestructura y Transporte",
              "score": 0.0343,
              "num_palabras": 143,
              "url_fuente": "https://www.gob.mx/promtel/prensa/conectividad-fibra-optica-municipios-chiapas",
              "fragmento": "El despliegue de más de seiscientos kilómetros de cableado troncal de fibra óptica oscura sobre la infraestructura de líneas de transmisión eléctrica y carreteras federales permitió habilitar puntos gratuitos...",
              "relevancia_qrel": 0
            }
          ]
        },
        "hibrido": {
          "consulta": "infraestructura carretera y puentes",
          "motor": "hibrido",
          "nombre_motor": "Motor 3 · Híbrido 2 Etapas (BM25 + Embeddings RRF + Reranker)",
          "latencia_ms": 4.222,
          "total_resultados": 5,
          "metricas_consulta": {
            "tipo_consulta": "mixta",
            "nDCG@5": 1.0,
            "MRR": 1.0,
            "R@5": 1.0
          },
          "resultados": [
            {
              "posicion": 1,
              "id": "d10",
              "titulo": "Avanza obra de rehabilitación y modernización en la carretera Tuxtla-Costa",
              "categoria": "Infraestructura y Transporte",
              "score": 2.5821,
              "num_palabras": 152,
              "url_fuente": "https://www.gob.mx/sct/prensa/modernizacion-carretera-tuxtla-costa-chiapas",
              "fragmento": "Los trabajos de rehabilitación asfáltica, ampliación de acotamientos y estabilización de taludes en el corredor carretero que conecta la capital Tuxtla Gutiérrez con la región Istmo-Costa a través de...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 2,
              "id": "d26",
              "titulo": "Construyen puente atirantado sobre el embalse de La Angostura para integrar municipios de La Concordia",
              "categoria": "Infraestructura y Transporte",
              "score": 1.576,
              "num_palabras": 150,
              "url_fuente": "https://www.gob.mx/sct/acciones/puentes-atirantados-la-concordia-chiapas",
              "fragmento": "La conclusión e inauguración del nuevo puente vehicular atirantado que cruza el embalse de la presa Belisario Domínguez (La Angostura) ha transformado radicalmente la conectividad terrestre entre los...",
              "relevancia_qrel": 3
            },
            {
              "posicion": 3,
              "id": "d47",
              "titulo": "Rehabilitan caminos sacacosechas con concreto hidráulico en zonas cafetaleras de la Sierra Madre",
              "categoria": "Infraestructura y Transporte",
              "score": 1.2585,
              "num_palabras": 139,
              "url_fuente": "https://www.chiapas.gob.mx/obras-publicas/caminos-sacacosechas-sierra-madre-2025",
              "fragmento": "Con la participación directa de comités comunitarios de obra y cuadrillas municipales, se concluyó la pavimentación mediante huellas de concreto hidráulico y empedrado ahogado en más de cuarenta kilómetros de...",
              "relevancia_qrel": 2
            },
            {
              "posicion": 4,
              "id": "d55",
              "titulo": "Ampliación de la red de fibra óptica lleva internet de alta velocidad a cabeceras municipales indígenas",
              "categoria": "Infraestructura y Transporte",
              "score": 1.1597,
              "num_palabras": 143,
              "url_fuente": "https://www.gob.mx/promtel/prensa/conectividad-fibra-optica-municipios-chiapas",
              "fragmento": "El despliegue de más de seiscientos kilómetros de cableado troncal de fibra óptica oscura sobre la infraestructura de líneas de transmisión eléctrica y carreteras federales permitió habilitar puntos gratuitos...",
              "relevancia_qrel": 0
            },
            {
              "posicion": 5,
              "id": "d40",
              "titulo": "Dragado y desazolve de ríos en la costa de Huixtla y Mapastepec mitigan riesgo de desbordamientos",
              "categoria": "Hidrología y Clima",
              "score": 0.3761,
              "num_palabras": 161,
              "url_fuente": "https://www.gob.mx/conagua/acciones/desazolve-rios-costa-soconusco-chiapas",
              "fragmento": "Con maquinaria pesada consistente en excavadoras de brazo largo y tractores de oruga, brigadas de infraestructura hidráulica ejecutaron el dragado de sedimentos pétreos y el reforzamiento de bordos de...",
              "relevancia_qrel": 0
            }
          ]
        }
      }
    }
  }
};
