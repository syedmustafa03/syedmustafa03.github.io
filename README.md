# Portfolio (React + Vite + GitHub Pages)

A git-log/terminal themed portfolio site. Project entries render like commit history —
fitting, since this is meant to sit in a repo.

## 1. Install dependencies
```bash
npm install
```

## 2. Run locally
```bash
npm run dev
```
Visit the URL it prints (usually `http://localhost:5173`).

## 3. Customize content
- **Your info**: edit `src/components/Hero.jsx`, `About.jsx`, `Contact.jsx` directly —
  replace the bio text, email, GitHub/LinkedIn links.
- **Projects**: edit `src/data/projects.js` — add, remove, or update entries. Each object
  becomes one project card automatically; no need to touch `Projects.jsx`.
- **Resume**: drop a `resume.pdf` into the `public/` folder — the Contact section already
  links to `/resume.pdf`.
- **Colors/fonts**: all design tokens are CSS variables at the top of `src/index.css`.

## 4. Push the source code to GitHub

If this is your MAIN portfolio (recommended), the repo must be named exactly
`yourusername.github.io`.

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin git@github.com:yourusername/yourusername.github.io.git
git push -u origin main
```

## 5. Deploy to GitHub Pages
```bash
npm run deploy
```
This builds the site and pushes the compiled output to a `gh-pages` branch automatically
(via the `gh-pages` package already included in `package.json`).

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` → `/ (root)`**.

Your live site: `https://yourusername.github.io`

## 6. Updating later
Whenever you change something:
```bash
git add .
git commit -m "Describe the change"
git push              # updates the source code
npm run deploy        # updates the LIVE site
```
These are two separate steps — pushing to `main` alone will NOT update the live site.

## Important: if this becomes a PROJECT site instead
If you rename this repo to something other than `yourusername.github.io` (e.g. to host
a demo for one specific project under `yourusername.github.io/repo-name`), open
`vite.config.js` and change:
```js
base: '/',
```
to:
```js
base: '/repo-name/',
```
Skipping this is the #1 cause of a blank white page after deploying.
