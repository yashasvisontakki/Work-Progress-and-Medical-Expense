/**
 * build/embed-templates.js
 *
 * Regenerates js/templates-inline.js from the real pug/mixins.pug and
 * pug/blocks.pug source files, so the file:// fallback copy used by
 * pug-loader.js can never drift out of sync with the actual templates.
 * Run this (with plain Node - no extra packages needed) after editing
 * either .pug file:
 *
 *   node build/embed-templates.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const mixins = fs.readFileSync(path.join(root, 'pug/mixins.pug'), 'utf8');
const blocks = fs
  .readFileSync(path.join(root, 'pug/blocks.pug'), 'utf8')
  // blocks.pug "include"s mixins.pug on disk; pug-loader.js already
  // concatenates mixinsSource + blocksSource itself, so the embedded
  // copy must drop that include line to avoid a duplicate/failed include.
  .replace(/^include mixins\.pug\n/m, '');

const out = `/**
 * templates-inline.js  (AUTO-GENERATED - do not hand edit)
 *
 * Exact copy of pug/mixins.pug and pug/blocks.pug, embedded as strings.
 * Regenerate with:  node build/embed-templates.js
 *
 * Why this file exists: opening index.html directly as a file:// document
 * (i.e. no local server) means fetch() cannot load the real .pug files on
 * disk due to browser CORS rules. pug-loader.js tries fetch() first and
 * only falls back to these strings if that fails - so when the project IS
 * served over http(s), the browser compiles the real files in /pug, not
 * this copy.
 */
const PUG_SOURCE_FALLBACK = {
  mixins: ${JSON.stringify(mixins)},
  blocks: ${JSON.stringify(blocks)}
};
`;

fs.writeFileSync(path.join(root, 'js/templates-inline.js'), out);
console.log('Wrote js/templates-inline.js');
