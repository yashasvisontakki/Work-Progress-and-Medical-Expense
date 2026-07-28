const STORAGE_KEY = "wcb-progress-report:selected-dataset";

function getStoredDatasetId() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && DATASETS[stored] ? stored : DEFAULT_DATASET_ID;
  } catch (err) {
    return DEFAULT_DATASET_ID; // localStorage unavailable (e.g. private mode)
  }
}

function storeDatasetId(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch (err) {
    /* non-fatal: selection just won't survive a refresh */
  }
}

async function renderDataset(id) {
  const dataset = DATASETS[id];
  const app = document.getElementById("app");
  await Paginator.renderInto(app, dataset);
}

function populateSelect(select, selectedId) {
  Object.values(DATASETS).forEach((ds) => {
    const opt = document.createElement("option");
    opt.value = ds.id;
    opt.textContent = ds.label;
    if (ds.id === selectedId) opt.selected = true;
    select.appendChild(opt);
  });
}

async function main() {
  await PugLoader.init();

  const select = document.getElementById("dataset-select");
  const printBtn = document.getElementById("print-btn");

  const initialId = getStoredDatasetId();
  populateSelect(select, initialId);
  await renderDataset(initialId);

  select.addEventListener("change", async (e) => {
    const id = e.target.value;
    storeDatasetId(id);
    await renderDataset(id);
  });

  printBtn.addEventListener("click", () => window.print());
}

document.addEventListener("DOMContentLoaded", main);
