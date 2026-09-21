# Personal website, Prasanjit Dubey

A single-page academic site built with plain HTML and CSS. No build step, no
dependencies, just open `index.html`.

Live at <https://pdubey96.github.io/>.

## Files

| File         | What it is                                              |
|--------------|---------------------------------------------------------|
| `index.html` | All page content.                                       |
| `style.css`  | All styling, including the light/dark theme.            |
| `script.js`  | Mobile nav, dark-mode toggle, footer year.              |
| `cv.pdf`     | The CV. **Permanent link; see below.**                  |
| `mypicnov2025.jpg` | Headshot, shown as the circular avatar.           |
| `assets/`    | Spare folder for any additional images.                 |

## The CV link is permanent: keep the filename

The CV lives at a fixed, undated URL:

```
https://pdubey96.github.io/cv.pdf
```

Anyone you send that link to keeps getting the **current** CV, forever, because
every update overwrites the same file. It is the only CV this site serves: the
older dated PDF was removed on 2026-09-21, so links to it now 404. To publish a
new version:

```bash
cd ~/Documents/GitHub/Website
cp ~/Documents/GitHub/CV/academic/Prasanjit_Dubey_Academic_CV.pdf cv.pdf
git add cv.pdf && git commit -m "Update CV" && git push
```

That is the whole update. Do **not** rename the file to something dated
(`..._Sep2026.pdf`), a dated filename means every shared link breaks the next
time the CV changes.

Two caveats worth knowing:

- **Caching.** GitHub Pages tells browsers to cache assets for about ten
  minutes, and a reader's browser may hold a PDF longer than that. Someone who
  opened the CV recently might see the old copy for a while; `Cmd-Shift-R` (or
  `cv.pdf?v=2`) forces a refresh. New readers always get the latest.
- **Deploy lag.** The new PDF is live roughly a minute after `git push`, once
  the Pages build finishes.

## Sections

Profile card (photo, name, title, location, labelled links, email) · Research
Interests · Education · Publications & Preprints · Invited Talks &
Presentations · Research & Professional Experience · Awards & Honors ·
Teaching, Mentoring & Service · Technical Skills · Recent News · Contact.

Every section of the academic CV has a counterpart here, in the CV's own order.

Content is kept in sync with `~/Documents/GitHub/CV/academic/Prasanjit_Dubey_Academic_CV.tex`,
which is the source of truth. Publications appear in the CV's exact wording,
status and arXiv links, but are grouped by research line rather than by
submission status: **Optimal Multiple Testing**, **Federated &
Communication-Constrained Learning**, **Federated and Anytime-Valid Multiple
Testing**, and **Statistical Machine Learning**. The two working papers carry an
"In preparation" badge and no link, on purpose, because they are not on arXiv
yet. All
eight arXiv IDs were verified against arxiv.org.

Deliberately **not** on the public site, though they are on the CV: the home
address, the phone number, and per-course GPAs beyond the summary figures.

## Still to personalize

- **Photo crop**: the avatar uses `object-position: center 22%` in `style.css`
  (`.avatar`). Nudge that percentage for a tighter or looser crop.
- **Dissertation title and committee**: absent from both the CV and the site;
  standard to list at this stage.

## Cache busting

GitHub Pages serves every file with `cache-control: max-age=600`, and the page
and its stylesheet are cached independently. Without care you can hold a stale
`style.css` against current markup for up to ten minutes and conclude a CSS
change did not deploy.

`index.html` therefore requests its assets with a version string:

```html
<link rel="stylesheet" href="style.css?v=20260921b" />
<script src="script.js?v=20260921b"></script>
```

**Bump that string whenever you change `style.css` or `script.js`** (both to the
same value; the date plus a letter works). A new query string is a new URL, so
it cannot be served from cache. If a change still looks missing, `Cmd-Shift-R`.

## Preview locally

Double-click `index.html`, or serve it:

```bash
cd Website
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

The repo *is* the site: it is a GitHub Pages user site
(`pdubey96/pdubey96.github.io`), served from `main` at the repository root.
Pushing to `main` publishes.

```bash
git add -A && git commit -m "Update site" && git push
```

### Custom domain (optional)

Add a `CNAME` file containing your domain (e.g. `prasanjitdubey.com`) and point
the domain's DNS at GitHub Pages per their docs. Note that switching to a custom
domain *does* change the CV URL (`https://prasanjitdubey.com/cv.pdf`); the
`pdubey96.github.io` one keeps redirecting, so previously shared links survive.
