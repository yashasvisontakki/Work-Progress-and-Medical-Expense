# 📄 WCB Medical & Travel Expense Request
### Pure Front-End | HTML • CSS • JavaScript • Pug

A fully front-end implementation of the **WCB Medical & Travel Expense Request** form that recreates the original PDF layout using **HTML, CSS, JavaScript, and Pug**.

This project requires **no Node.js, Express, or backend server** at runtime. Everything is rendered directly in the browser using a precompiled Pug template and simulated backend datasets.

---

## ✨ Features

- 📋 Pixel-friendly layout matching the original WCB form
- 🎨 Built with reusable **Pug Mixins**
- 🔄 Dynamic rendering using multiple datasets
- 📄 Print-ready A4 layout with automatic page breaks
- 🖨️ Save directly as PDF from the browser
- 🚫 No backend required
- ⚡ Runs entirely as static files

---

# 📁 Project Structure

```
wcb-form-static/
│
├── index.html
│   └── Application entry point
│
├── css/
│   └── style.css
│       ├── Complete page styling
│       ├── Print layout
│       └── A4 pagination
│
├── images/
│   └── logo.jpeg
│
├── pug/
│   ├── expense-form.pug
│   │   └── Main template source
│   │
│   └── mixins.pug
│       └── Reusable Pug mixins
│
└── js/
    ├── pug-templates.js
    │   └── Precompiled browser-ready template
    │
    ├── data/
    │   ├── dataset1.js
    │   └── dataset2.js
    │
    └── main.js
        └── Handles rendering & dataset switching
```

---

# 🎥 Project Demo

📹 **Demo Video**

https://drive.google.com/file/d/1m_Bm4Wm_7X0IyT0K9SyHQC5nOToaRi41/view?usp=drive_link

---
# Snapshots
<img width="2822" height="1466" alt="Screenshot 2026-07-28 152559" src="https://github.com/user-attachments/assets/3ebdb755-f3ba-498f-9c38-6fa21cafde86" />
<img width="2862" height="1352" alt="Screenshot 2026-07-28 152621" src="https://github.com/user-attachments/assets/0a605f20-4852-4a0c-b40b-9d269d1244eb" />
<img width="2832" height="1448" alt="Screenshot 2026-07-28 152633" src="https://github.com/user-attachments/assets/48967bc3-851a-49f4-8ecf-f077826a5611" />
<img width="2626" height="1474" alt="Screenshot 2026-07-28 152648" src="https://github.com/user-attachments/assets/d1301d65-7439-4832-80b4-c2216cceaafb" />
<img width="2612" height="1428" alt="Screenshot 2026-07-28 152707" src="https://github.com/user-attachments/assets/403f207f-c35c-4c98-8e62-d96a9ab06d29" />

---
# 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Pug Template Engine
- Browser Print API

---

# 💡 Why Are There Both `.pug` Files and `pug-templates.js`?

Pug is a template engine—it isn't understood directly by web browsers.

Normally:

```
Pug
   ↓
Node.js / Express
   ↓
HTML
```

Since this project is designed to run **without any backend**, the Pug template was **compiled only once** into a plain JavaScript rendering function.

That generated file is:

```
js/pug-templates.js
```

This allows the browser to render the page without needing Node.js or Express.

The original Pug files are still included because they:

- demonstrate the actual template source
- showcase reusable mixins
- satisfy assignment requirements
- make future template modifications much easier

---

# 🧩 Reusable Pug Mixins

The project is organized using reusable mixins to keep the template clean and maintainable.

Included mixins:

- `docHeader`
- `sectionTitle`
- `dataTable`
- `expenseSection`
- `pageFooter`

These components eliminate duplicate markup while improving readability.

---

# 🔨 Recompiling the Template (Optional)

If you modify the Pug template, regenerate the JavaScript renderer using:

```bash
npx pug-cli --client --no-debug -O js/pug-templates.js pug/expense-form.pug
```

or

```javascript
pug.compileFileClient()
```

> This is a **one-time build step** only.
>
> The running application never depends on Node.js.

---

# ▶️ Running the Project

No installation is required.

Simply open:

```
index.html
```

inside any modern browser.

### If your browser blocks `file://` scripts

Serve the folder using a lightweight static server.

Using npm:

```bash
npx serve .
```

or use the **Live Server** extension in Visual Studio Code.

---

# 🔄 Switching Between Datasets

The project includes two simulated backend records:

```
dataset1.js
dataset2.js
```

Each file exposes a JavaScript object:

```
window.WCB_DATASET_1
window.WCB_DATASET_2
```

Use the **Dataset 1** and **Dataset 2** buttons at the top of the page to instantly re-render the form.

No:

- page refresh
- backend call
- API request

The UI updates entirely in the browser by passing a different object into the same Pug template.

---

# ✏️ Adding or Editing Data

Updating the displayed information is simple.

### Edit an existing dataset

```
js/data/dataset1.js
```

or

```
js/data/dataset2.js
```

### Add another dataset

1. Create

```
dataset3.js
```

2. Register it inside

```
main.js
```

No changes are needed in:

- HTML
- CSS
- Pug Template

The application is completely data-driven.

---

# 🖨️ Printing & Exporting to PDF

Click

```
Print / Save as PDF
```

or simply press

```
Ctrl + P
```

The layout has been optimized for:

- A4 paper
- clean page breaks
- repeating footer
- browser-native PDF generation

The footer (Worker App ID and Submitted Date) uses fixed positioning during printing, ensuring it appears correctly on every printed page.

Everything is achieved using **pure CSS**—no external libraries or third-party dependencies are required.

---

# 🎯 Project Highlights

✔ Pure Front-End Architecture

✔ Browser-Only Rendering

✔ Reusable Pug Components

✔ Dynamic Data Binding

✔ Static Deployment Ready

✔ Responsive Layout

✔ Print-Friendly Design

✔ No Backend Dependencies

✔ Easy to Extend

✔ Clean Project Structure

---

# 📌 Notes

- The application simulates backend responses using local JavaScript datasets.
- Rendering is performed by a precompiled Pug template.
- No frameworks or server-side technologies are required at runtime.
- The project can be hosted on any static hosting platform such as GitHub Pages, Netlify, or Vercel.

---

## 👨‍💻 Author
Yashasvi N Sontakki

**Developed as part of the WCB Medical & Travel Expense Request assignment**

Designed using **HTML, CSS, JavaScript, and Pug** with a focus on clean architecture, maintainability, and browser-only execution.
