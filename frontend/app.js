(function () {
  "use strict";

  const API_BASE = window.location.protocol.startsWith("http")
    ? window.location.origin
    : "http://127.0.0.1:8085";

  const ENGINE_META = {
    bm25: {
      title: "Motor 1 · Léxico Probabilístico (Okapi BM25)",
      cssClass: "bm25",
    },
    embeddings: {
      title: "Motor 2 · Semántico Denso (Embeddings 384d)",
      cssClass: "embeddings",
    },
    hibrido: {
      title: "Motor 3 · Híbrido (RRF k=60 + Reranker)",
      cssClass: "hibrido",
    },
  };

  function setupTabs() {
    const buttons = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        const targetId = btn.getAttribute("data-tab");
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      });
    });
  }

  async function fetchJsonWithFallback(endpoint, fallbackKey) {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (_) {
      // Fallback to embedded dataset when opened via file://
    }
    if (window.FALLBACK_DATA && fallbackKey && window.FALLBACK_DATA[fallbackKey]) {
      return window.FALLBACK_DATA[fallbackKey];
    }
    return null;
  }

  function renderComparison(data) {
    const container = document.getElementById("compare-grid");
    if (!container || !data || !data.motores) return;

    const order = ["bm25", "embeddings", "hibrido"];
    container.innerHTML = order
      .map((engineKey) => {
        const engineData = data.motores[engineKey];
        const meta = ENGINE_META[engineKey];
        if (!engineData) return "";

        const hitsHtml = (engineData.resultados || [])
          .map((hit) => {
            const rankPos = hit.posicion || hit.rank || 1;
            let domainLabel = "Fuente Web";
            try {
              domainLabel = new URL(hit.url_fuente).hostname;
            } catch (_) {}

            return `
          <div class="doc-hit-card">
            <div class="doc-hit-top">
              <span class="rank-badge">#${rankPos} · ${hit.id}</span>
              <span>${hit.categoria}</span>
              <span class="score-badge">Score: ${Number(hit.score).toFixed(4)}</span>
            </div>
            <h4 class="doc-hit-title">${hit.titulo}</h4>
            <p class="doc-hit-snippet">${hit.fragmento}</p>
            <div class="doc-hit-footer">
              <span>${hit.num_palabras} palabras</span>
              <a href="${hit.url_fuente}" target="_blank" rel="noopener noreferrer">${domainLabel}</a>
            </div>
          </div>
        `;
          })
          .join("");

        return `
        <div class="engine-column">
          <div class="engine-header ${meta.cssClass}">
            <h3>${meta.title}</h3>
            <span class="latency-pill">${Number(engineData.latencia_ms).toFixed(2)} ms</span>
          </div>
          <div class="engine-results">
            ${hitsHtml}
          </div>
        </div>
      `;
      })
      .join("");
  }

  async function runCompareQuery(queryText) {
    const qClean = queryText.trim();
    const encoded = encodeURIComponent(qClean);
    try {
      const response = await fetch(`${API_BASE}/api/compare?q=${encoded}&k=5`);
      if (response.ok) {
        const payload = await response.json();
        renderComparison(payload);
        return;
      }
    } catch (_) {
      // Offline / file:// mode fallback
    }

    if (window.FALLBACK_DATA && window.FALLBACK_DATA.precomputedQueries) {
      const preset =
        window.FALLBACK_DATA.precomputedQueries[qClean] ||
        Object.values(window.FALLBACK_DATA.precomputedQueries)[0];
      if (preset) {
        renderComparison(preset);
      }
    }
  }

  function renderBenchmarkTable(benchData) {
    const tbody = document.getElementById("benchmark-tbody");
    if (!tbody || !benchData || !benchData.niveles) return;

    const rows = benchData.niveles.map(
      (entry) => `
        <tr>
          <td><strong>${entry.usuarios_concurrentes} usuarios</strong></td>
          <td>${entry.nombre_motor}</td>
          <td><strong>${Number(entry.p50_ms).toFixed(2)} ms</strong></td>
          <td><strong>${Number(entry.p95_ms).toFixed(2)} ms</strong></td>
          <td>${Number(entry.p99_ms).toFixed(2)} ms</td>
          <td>${Number(entry.media_ms).toFixed(2)} ms</td>
          <td>${Number(entry.qps).toFixed(1)} req/s</td>
        </tr>
      `
    );
    tbody.innerHTML = rows.join("");
  }

  function renderEvalTable(evalData) {
    const tbody = document.getElementById("eval-summary-tbody");
    if (!tbody || !evalData) return;

    const list = evalData.resumen_motores || evalData.resumen || [];
    tbody.innerHTML = list
      .map(
        (row) => `
      <tr>
        <td><strong>${row.motor || row.nombre_motor}</strong></td>
        <td><strong>${Number(row["nDCG@5"] ?? row.ndcg_global).toFixed(3)}</strong></td>
        <td>${Number(row["MRR"] ?? row.mrr_global).toFixed(3)}</td>
        <td>${Number(row["R@5"] ?? row.recall_global).toFixed(3)}</td>
        <td>${Number(row.nDCG_lexica ?? row.ndcg_lexica).toFixed(3)}</td>
        <td>${Number(row.nDCG_mixta ?? row.ndcg_mixta).toFixed(3)}</td>
        <td>${Number(row.nDCG_semantica ?? row.ndcg_semantica).toFixed(3)}</td>
      </tr>
    `
      )
      .join("");
  }

  function renderCorpusTable(corpusData) {
    const tbody = document.getElementById("corpus-tbody");
    if (!tbody || !corpusData || !corpusData.documentos) return;

    const statDocs = document.getElementById("stat-docs");
    if (statDocs) {
      const total = corpusData.total || corpusData.documentos.length;
      const minW = corpusData.min_palabras || 114;
      statDocs.textContent = `${total} docs (min ${minW} pal.)`;
    }

    tbody.innerHTML = corpusData.documentos
      .map(
        (doc) => `
      <tr>
        <td><code>${doc.id}</code></td>
        <td>${doc.categoria}</td>
        <td><strong>${doc.titulo}</strong></td>
        <td><strong>${doc.num_palabras}</strong> pal.</td>
        <td><a href="${doc.url_fuente}" target="_blank" rel="noopener noreferrer">${doc.url_fuente}</a></td>
      </tr>
    `
      )
      .join("");
  }

  async function initApp() {
    setupTabs();

    const queryInput = document.getElementById("query-input");
    const runBtn = document.getElementById("btn-run-search");
    const chips = document.querySelectorAll(".chip-btn");

    if (runBtn && queryInput) {
      runBtn.addEventListener("click", () => {
        runCompareQuery(queryInput.value);
      });
      queryInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          runCompareQuery(queryInput.value);
        }
      });
    }

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const q = chip.getAttribute("data-q");
        if (queryInput && q) {
          queryInput.value = q;
          runCompareQuery(q);
        }
      });
    });

    await runCompareQuery(queryInput ? queryInput.value : "problemas de agua");

    const benchData = await fetchJsonWithFallback("/api/benchmark", "benchmark");
    renderBenchmarkTable(benchData);

    const evalData = await fetchJsonWithFallback("/api/eval", "eval");
    renderEvalTable(evalData);

    const corpusData = await fetchJsonWithFallback("/api/corpus", "corpus");
    renderCorpusTable(corpusData);
  }

  document.addEventListener("DOMContentLoaded", initApp);
})();
