# Personal website — Prasanjit Dubey

A single-page academic site built with plain HTML and CSS. No build step, no
dependencies — just open `index.html`.

## Files

| File         | What it is                                              |
|--------------|---------------------------------------------------------|
| `index.html` | All page content.                                       |
| `style.css`  | All styling, including the light/dark theme.            |
| `script.js`  | Mobile nav, dark-mode toggle, footer year.              |
| `CV_Jun2026_DUBEY_Prasanjit.pdf` | Your CV (the CV icon links to it).  |
| `mypicnov2025.jpg` | Your headshot, shown as the circular avatar.      |
| `assets/`    | Spare folder for any additional images.                 |

## Sections

Profile card (photo, name, title, location, social icons, email) · Research
Interests · Publications · Experience · Awards · Teaching & Service · News ·
Contact.

Publications are grouped into the two primary lines — **Optimal Multiple
Testing** and **Federated & Communication-Constrained Learning** — plus a
**Bridging the Two Lines** group (the two in-preparation papers) and a
**Statistical Machine Learning** group. All 8 published/preprint arXiv IDs were
verified against the arXiv API; the two in-prep papers (private repos) are
listed without links on purpose.

## Still to personalize

A few things only you can supply — search `index.html` for these:

- **LinkedIn URL** — the LinkedIn icon points to `https://www.linkedin.com/`;
  drop in your profile URL.
- **Photo crop** — the avatar uses `object-position: center 22%` in `style.css`
  (`.avatar`) to center your face. Nudge that percentage if you want a tighter
  or looser crop.
- **CV filename** — the CV icon links to `CV_Jun2026_DUBEY_Prasanjit.pdf`. When
  you update the CV, either keep that exact filename or change the one `href` in
  `index.html` to match the new name.
- **Phone number** — intentionally left off the public site for privacy. Add it
  to the Contact section if you want it.

## Preview locally

Double-click `index.html`, or serve it:

```bash
cd Website
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo named `<your-username>.github.io` (user site) or any repo
   (project site).
2. Push these files to the default branch:
   ```bash
   git init
   git add .
   git commit -m "Add personal website"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<repo>.git
   git push -u origin main
   ```
3. In **Settings → Pages**, set the source to `main` (root). The site goes live
   at `https://<your-username>.github.io/`.

### Custom domain (optional)

Add a `CNAME` file containing your domain (e.g. `prasanjitdubey.com`) and point
the domain's DNS at GitHub Pages per their docs.
