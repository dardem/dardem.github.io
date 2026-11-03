# Daryna Dementieva — Academic Portfolio

A static multi-page academic portfolio ready to deploy as a GitHub Pages site.

## 🔄 After changing CSS or JS: bump the version

Every page loads the shared files with a version tag, e.g.
`assets/css/style.css?v=20261104`. Browsers cache these files, so whenever you change
`style.css` or `nav.js`, change the number (e.g. to today's date) on **all** pages,
so visitors get the new version straight away. One command in Terminal, from the repo folder:

```bash
sed -i '' -E 's/(style\.css|nav\.js)\?v=[0-9a-z]+/\1?v=20261120/g' *.html blog/*.html
```

(Replace `20261120` with the new date. Changes to HTML pages alone don't need this.)

## 🚀 Deployment

1. Push this folder to a GitHub repository named `<your-username>.github.io`
   (or any repo — enable Pages under **Settings → Pages → Deploy from branch → main / root**)
2. Your site will be live at `https://<your-username>.github.io`

## 📁 Structure

```
portfolio/
├── index.html          ← Home / landing page
├── bio.html            ← Biography
├── projects.html       ← Projects portfolio
├── papers.html         ← Publications with tag filtering
├── teaching.html       ← Teaching statement
├── interests.html      ← Personal interests
├── assets/
│   ├── css/
│   │   └── style.css   ← All styles
│   ├── js/
│   │   └── nav.js      ← Shared nav + footer (injected into every page)
│   ├── images/         ← Put your photos here (see below)
│   └── files/
│       └── cv.pdf      ← Your CV (linked from home page)
└── README.md
```

## 🖼️ Adding Your Photo

Save your headshot as `assets/images/photo.jpg`, then in `index.html`:

1. **Remove** (or delete) the `<div class="hero__photo-placeholder">` block
2. **Uncomment** the `<img>` tag directly above it

```html
<img src="assets/images/photo.jpg" alt="Daryna Dementieva" class="hero__photo" />
```

## 📄 Uploading Your CV

Place your CV PDF at `assets/files/cv.pdf`. The home page already links to it.
Create the directory first: `mkdir -p assets/files/`

## ✏️ Editing Content

| Page | What to edit |
|------|-------------|
| `index.html` | Bio blurb (`.hero__bio`), social links (update `href` values) |
| `bio.html` | Replace placeholder `<p>` tags with your biography |
| `projects.html` | Duplicate `<article class="project-card">` blocks; update emoji, title, description, links |
| `papers.html` | Papers are pre-populated from Google Scholar. Add/remove `<article class="paper-card">` blocks. Update `data-tags` for filtering |
| `teaching.html` | Replace placeholder text with your teaching statement and course list |
| `interests.html` | Replace placeholder text and emoji with your own content and photos |

## 🏷️ Paper Tags

The following tags are already used — add your own as needed:

`multilingual` · `text-detoxification` · `hate-speech` · `fake-news` ·
`text-style-transfer` · `explainability` · `emotion-recognition` ·
`low-resource` · `formality` · `llm` · `survey`

To add a tag to a paper, update its `data-tags` attribute (comma-separated):
```html
<article class="paper-card" data-tags="multilingual,explainability,llm">
```

## 🎨 Customisation

All design tokens (colors, fonts) are CSS variables in `assets/css/style.css`:

```css
:root {
  --navy:   #1A2340;   /* primary dark color */
  --amber:  #C8874A;   /* accent color */
  --cream:  #F7F3EE;   /* background */
  ...
}
```

Change `--amber` to your preferred accent color (e.g. `#5B8DB8` for a blue accent).

## 📦 No Build Step Required

Pure HTML + CSS + vanilla JS. No npm, no bundler, no dependencies.
Just open any `.html` file in a browser to preview locally.
