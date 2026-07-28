# WCB Worker Progress Report 

A pixel-matched, data-driven rebuild of the WCB Manitoba **Worker Progress
Report** PDF, built with **Pug, HTML and CSS only** — no Node.js, no build
step, no backend, and no manual data entry on screen.

## How to run it

**Just double-click `index.html`.** That's it — no server, no npm install,
nothing to build. The only thing your browser needs is an internet
connection, because it loads the (client-side) Pug template engine from a
CDN so it can compile the real `.pug` files into HTML on the fly.

If you'd rather see the templates load straight from disk instead of the
embedded fallback copy (see *Architecture* below for why that fallback
exists), serve the folder with any static file server you like — none of
these are Node:

```bash
python3 -m http.server 8000      # then open http://localhost:8000
# or use VS Code's "Live Server" extension
# or: php -S localhost:8000
```
## DEMO LINK 
https://drive.google.com/file/d/1TVaW-wrOLagPUXVLhhikYd1PkipFqMlc/view?usp=drive_link

## Using it

- The blue toolbar at the top lets you **switch between two simulated
  backend datasets** (`js/datasets.js`) — nothing is typed into the form by
  hand, every field is driven entirely by whichever dataset object is
  currently selected.
- Your choice is remembered (`localStorage`) so **refreshing the page keeps
  showing the same dataset** instead of resetting to the first one.
- Edit either object in `js/datasets.js` (or add a third!) and reload the
  page — the UI always reflects whatever is currently in that file.
- **"Print / Save as PDF"** opens the browser print dialog, already
  configured for standard A4 paper. Chrome/Edge → "Save as PDF" produces a
  clean, correctly paginated document.

## Architecture

``
├── index.html
├── css/
│   ├── style.css
│   └── print.css
├── pug/
│   ├── mixins.pug
│   └── blocks.pug
├── js/
│   ├── datasets.js
│   ├── pug-loader.js
│   ├── paginate.js
│   ├── app.js
│   └── templates-inline.js
├── build/
│   └── embed-templates.js
└── assets/
    └── logo.jpeg
``
### "Use Pug Template to render the page"

`pug/mixins.pug` and `pug/blocks.pug` are the real, authored Pug source —
open them to review the actual template code, mixins, conditionals and
loops. There is no separate hand-written HTML version of the form; every
box, checkbox and label you see on screen is produced by compiling this Pug
source with the standalone browser build of the Pug engine
(`jade.js` on the CDN — Pug's original package name; same engine, same
`.compile()` API, still the officially-linked browser-standalone build).

### Why `templates-inline.js` exists (and why that's not cheating)

Browsers block `fetch()` of local files when a page is opened directly as
`file://…` (no server) — that's a browser security rule, not something this
project can opt out of. Since the assignment asks for a solution that
**just works with plain HTML/CSS/Pug and no Node**, `pug-loader.js` tries
`fetch("pug/mixins.pug")` / `fetch("pug/blocks.pug")` first, and only falls
back to `js/templates-inline.js` — an exact, auto-generated string copy of
those same two files — when that fetch is blocked. Either way, **the HTML on
screen is produced by compiling genuine Pug source**, never hand-written
markup. If you edit `pug/mixins.pug` or `pug/blocks.pug`, re-sync the copy
with:

```bash
node build/embed-templates.js
```

(plain Node + `fs`, no packages installed — this script is a convenience,
not a requirement to run the app itself.)

### Code modularity & reuse (mixins)

- `mixins.pug` defines the shared visual primitives once: `checkbox`,
  `checkboxRow`, `optionBox`, `textBox`, `underlineField`, `sectionHeading`,
  `pageHeader`, `pageFooter`.
- `blocks.pug` composes those primitives into one mixin per form section
  (`blockReturnToWork`, `blockRecovery`, `blockMedicalTreatment`, …) — every
  section reuses the same checkbox/box/underline styling instead of
  redefining it.
- `pageHeader`/`pageFooter` are called once per printed page, so the
  Claim No., logo and address block never have to be duplicated by hand.

### Dynamic pagination & the footer

`js/paginate.js` renders every content block into an offscreen A4-sized
element, measures each block's real height with the real CSS applied, and
greedily packs blocks onto pages until the next block would overflow the
usable page height — then starts a new page. Only once the *actual* number
of pages for the current dataset is known does it stamp
`Page {n} of {total}` into each page's footer. That's why:

- **Dataset 1** (short answers, closely matching the source PDF) lays out
  on **3 pages**, just like the original.
- **Dataset 2** (longer free-text answers, a populated exercise list, an
  active medical-treatment schedule) is free to spread across **more
  pages** without the footer ever showing the wrong page count.

`print.css` adds `break-inside: avoid` to every box/checkbox group so a
question is never split awkwardly across a page break in the printed PDF.

## Data flow

`datasets.js` → `app.js` (picks the selected dataset) → `paginate.js`
(lays out + renders pages) → `pug-loader.js` (compiles the Pug mixins that
paginate.js calls) → DOM. There is no form input anywhere in this chain —
everything the page shows comes from the selected dataset object, simulating
what would otherwise be a backend API response.
