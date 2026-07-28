function getDatasetById(id) {
  return id === "2" ? window.WCB_DATASET_2 : window.WCB_DATASET_1; // default: dataset 1
}

function renderDataset(id) {
  var claim = getDatasetById(id);

  // renderExpenseForm() is the Pug template, compiled ahead of time to
  // a plain JS function (see js/pug-templates.js). Calling it is the
  // entire "render" step — no server round-trip involved.
  var html = window.renderExpenseForm({
    claim: claim,
    activeDataset: id,
  });

  document.getElementById("app").innerHTML = html;
}

// Make it reachable from the inline onclick="" handlers in the
// compiled template output.
window.renderDataset = renderDataset;

// Initial render on page load — defaults to dataset 1, matching the
// sample PDF.
document.addEventListener("DOMContentLoaded", function () {
  renderDataset("1");
});
