const PugLoader = (function () {
  let mixinsSource = null;
  let blocksSource = null;
  const compiledCache = new Map();

  async function tryFetch(path) {
    try {
      const res = await fetch(path, { cache: "no-store" });
      if (!res.ok) return null;
      return await res.text();
    } catch (err) {
      return null; // blocked by CORS on file://, or file not served
    }
  }

  /** Load mixins.pug + blocks.pug once, from disk if possible. */
  async function init() {
    if (mixinsSource && blocksSource) return;

    mixinsSource = await tryFetch("pug/mixins.pug");
    blocksSource = await tryFetch("pug/blocks.pug");

    if (!mixinsSource || !blocksSource) {
      if (typeof PUG_SOURCE_FALLBACK === "undefined") {
        throw new Error(
          "Could not load .pug templates via fetch() and no embedded fallback " +
          "(templates-inline.js) was found."
        );
      }
      mixinsSource = mixinsSource || PUG_SOURCE_FALLBACK.mixins;
      blocksSource = blocksSource || PUG_SOURCE_FALLBACK.blocks;
    }

    // blocks.pug uses `include mixins.pug` on disk (real multi-file Pug
    // project structure, readable by any standard Pug tooling). The
    // browser compiler has no filesystem to resolve that include against,
    // and pug-loader concatenates mixinsSource + blocksSource itself
    // before compiling, so the include line is redundant here either way.
    blocksSource = blocksSource.replace(/^include mixins\.pug\n/m, "");
  }

  /**
   * Compile (and cache) a single named mixin from blocks.pug or
   * mixins.pug into a callable render(locals) function.
   */
  function getRenderer(mixinName, args) {
    const cacheKey = mixinName;
    if (!compiledCache.has(cacheKey)) {
      const argList = args || "data";
      const source =
        mixinsSource + "\n" + blocksSource + "\n+" + mixinName + "(" + argList + ")\n";
      const fn = jade.compile(source, { filename: mixinName + ".pug" });
      compiledCache.set(cacheKey, fn);
    }
    return compiledCache.get(cacheKey);
  }

  /** Render one mixin (e.g. "blockConcerns") with the given locals object. */
  function render(mixinName, locals) {
    return getRenderer(mixinName)(locals);
  }

  /** Render pageHeader(claimNo, formCode, formTitle) from mixins.pug. */
  function renderHeader(claimNo, formCode, formTitle) {
    const fn = getRenderer("pageHeader", "claimNo, formCode, formTitle");
    return fn({ claimNo, formCode, formTitle });
  }

  /** Render pageFooter(appId, submitted, pageNumber, totalPages) from mixins.pug. */
  function renderFooter(appId, submitted, pageNumber, totalPages) {
    const fn = getRenderer("pageFooter", "appId, submitted, pageNumber, totalPages");
    return fn({ appId, submitted, pageNumber, totalPages });
  }

  return { init, render, renderHeader, renderFooter };
})();
