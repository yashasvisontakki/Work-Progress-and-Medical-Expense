/**
 * paginate.js
 *
 * Turns a flat list of rendered content blocks into a stack of A4
 * "sheets" (.wcb-page elements), automatically deciding how many
 * pages are needed for *this* dataset. A short dataset (few, short
 * answers) lands on 3 pages, just like the source PDF; a dataset
 * with longer free-text answers or a longer exercise list is free
 * to spill onto a 4th page - and the footer's "Page X of Y" is only
 * stamped once the real page count is known, so it is always correct
 * regardless of how much data a given page ends up holding.
 */

const Paginator = (function () {
  // Ordered list of the mixins that make up the whole form, top to bottom.
  // Grouping (which page a block lands on) is decided at render time by
  // measuring real heights - this array only fixes reading order.
  const BLOCK_ORDER = [
    "blockIntro",
    "blockReturnToWork",
    "blockWorkingStatus",
    "blockRtwGoing",
    "blockExpectDate",
    "blockConcerns",
    "blockContact",
    "blockRecovery",
    "blockRecoveryComments",
    "blockPainScale",
    "blockMedicalTreatment",
    "blockMedication",
    "blockHomeExercise",
    "blockOtherInfo",
    "blockCertification"
  ];

  function outerHeight(el) {
    const style = getComputedStyle(el);
    return (
      el.getBoundingClientRect().height +
      parseFloat(style.marginTop || 0) +
      parseFloat(style.marginBottom || 0)
    );
  }

  /** Build an offscreen .wcb-page used purely to measure sizes with real CSS applied. */
  function buildMeasuringRig(dataset) {
    const rig = document.createElement("div");
    rig.className = "wcb-page";
    rig.style.position = "absolute";
    rig.style.left = "-9999px";
    rig.style.top = "0";
    rig.style.visibility = "hidden";

    rig.innerHTML =
      PugLoader.renderHeader(dataset.claimNo, dataset.formCode, "Worker Progress Report") +
      '<div class="wcb-page__content"></div>' +
      PugLoader.renderFooter(dataset.appId, dataset.submitted, 1, 1);

    document.body.appendChild(rig);
    return rig;
  }

  /** Render every content block once and measure its rendered height. */
  function measureBlocks(dataset) {
    return BLOCK_ORDER.map((mixinName) => {
      const html = PugLoader.render(mixinName, { data: dataset });
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html.trim();
      const el = wrapper.firstElementChild;
      return { mixinName, html, el };
    });
  }

  /** Core layout: decide which blocks go on which page. */
  function layoutPages(dataset) {
    const rig = buildMeasuringRig(dataset);
    const rigContent = rig.querySelector(".wcb-page__content");

    const pageBoxHeight = rig.getBoundingClientRect().height;
    const headerEl = rig.querySelector(".wcb-header");
    const footerEl = rig.querySelector(".wcb-footer");
    const headerH = outerHeight(headerEl);
    const footerH = outerHeight(footerEl);
    const rigStyle = getComputedStyle(rig);
    const paddingV =
      parseFloat(rigStyle.paddingTop || 0) + parseFloat(rigStyle.paddingBottom || 0);

    const availableHeight = pageBoxHeight - paddingV - headerH - footerH;

    const blocks = measureBlocks(dataset);

    // Measure each block's real rendered height by temporarily mounting it.
    const heights = blocks.map((b) => {
      rigContent.appendChild(b.el);
      const h = outerHeight(b.el);
      rigContent.removeChild(b.el);
      return h;
    });

    const pages = [];
    let current = [];
    let currentHeight = 0;

    blocks.forEach((b, i) => {
      const h = heights[i];
      if (current.length > 0 && currentHeight + h > availableHeight) {
        pages.push(current);
        current = [];
        currentHeight = 0;
      }
      current.push(b);
      currentHeight += h;
    });
    if (current.length) pages.push(current);

    document.body.removeChild(rig);
    return pages;
  }

  /** Render the final, visible pages into the given container. */
  function renderInto(container, dataset) {
    container.innerHTML = "";
    const pages = layoutPages(dataset);
    const total = pages.length;

    pages.forEach((pageBlocks, idx) => {
      const pageNumber = idx + 1;
      const pageEl = document.createElement("section");
      pageEl.className = "wcb-page";
      pageEl.setAttribute("aria-label", "Worker Progress Report, page " + pageNumber);

      const headerHtml = PugLoader.renderHeader(
        dataset.claimNo,
        dataset.formCode,
        "Worker Progress Report"
      );
      const footerHtml = PugLoader.renderFooter(
        dataset.appId,
        dataset.submitted,
        pageNumber,
        total
      );
      const contentHtml = pageBlocks.map((b) => b.html).join("\n");

      pageEl.innerHTML =
        headerHtml + '<div class="wcb-page__content">' + contentHtml + "</div>" + footerHtml;

      container.appendChild(pageEl);
    });
  }

  return { renderInto };
})();
