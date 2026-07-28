# WCB Medical & Travel Expense Request — Pure Front-End (HTML/CSS/JS/Pug)

No Node.js server, no Express — this runs entirely in the browser as
static files.

## Files

```
wcb-form-static/
├── index.html                # Entry point — open this in a browser
├── css/
│   └── style.css             # Layout matching the PDF + print/A4 pagination
├── images/
│   └── logo.jpeg
├── pug/
│   ├── expense-form.pug      # SOURCE template (readable Pug, for reference/grading)
│   └── mixins.pug            # Reusable mixins: docHeader, dataTable, expenseSection, pageFooter
└── js/
    ├── pug-templates.js      # expense-form.pug PRECOMPILED to a plain JS function
    ├── data/
    │   ├── dataset1.js       # Simulated backend record #1 (matches the sample PDF)
    │   └── dataset2.js       # Simulated backend record #2 (different claim/values)
    └── main.js                # Wires data → template, handles the dataset switcher
```

## Why there's a `.pug` folder AND a `pug-templates.js` file

The assignment requires using Pug to render the page. Pug templates
aren't something a browser can read directly — they need to be
compiled to JavaScript first. Normally that compile step happens on a
Node/Express server on every request. Since you asked for **no
Node/Express**, that compile step was instead run **once, ahead of
time**, producing `js/pug-templates.js`: a plain, self-contained
JavaScript function with zero Node dependencies. `index.html` loads
that file with an ordinary `<script>` tag and calls it directly in the
browser — the same way you'd load any other JS file.

`pug/expense-form.pug` and `pug/mixins.pug` are kept in the project as
the readable **source** — they show the actual Pug template and the
reusable mixins (`docHeader`, `sectionTitle`, `dataTable`,
`expenseSection`, `pageFooter`) that `pug-templates.js` was generated
from.

If you ever need to change the template's structure (not just the
data), edit the `.pug` files and recompile with:

```bash
npx pug-cli --client --no-debug -O js/pug-templates.js pug/expense-form.pug
```
(or use `pug.compileFileClient()` from the `pug` npm package — this is
a one-time build step, not something the running page needs.)

## Running it

Just open `index.html` in a browser — no install, no server.
(Some browsers restrict `file://` script loading; if the switcher or
tables don't appear, serve the folder with any static server, e.g.
`npx serve .` or the VS Code "Live Server" extension.)

## Switching datasets

`js/data/dataset1.js` and `js/data/dataset2.js` each attach a plain
object to `window` (`WCB_DATASET_1` / `WCB_DATASET_2`) — this stands
in for "data coming from the backend." Click **Dataset 1** / **Dataset
2** in the on-screen bar at the top (hidden when printed) to re-render
the same template with the other object — no page reload, no server
call, just `js/main.js` calling `renderExpenseForm()` again with a
different `claim` object.

**To change the data:** edit either `dataset1.js` or `dataset2.js` (or
add `dataset3.js` + one line in `main.js`). Nothing in `index.html` or
the template needs to change — the UI updates because the template is
fully data-driven.

## Printing to PDF

Click **Print / Save as PDF** in the switcher bar (or Ctrl/Cmd+P). The
page is styled for A4 (`@page { size: A4; }` in `style.css`), and the
footer (Worker App ID, Submitted date) switches to `position: fixed`
in the print stylesheet — standard browsers (Chrome, Edge, Firefox)
repeat fixed-position elements on every physical printed page
automatically, so the footer stays correctly placed regardless of how
many pages a given dataset's tables end up spanning. This uses plain
CSS only — no external library or CDN dependency, so nothing can
interfere with the normal on-screen view.
