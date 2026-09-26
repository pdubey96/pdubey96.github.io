# Personal website, Prasanjit Dubey

A six-page academic site built with plain HTML and CSS. No build step, no
dependencies, just open `index.html`.

Live at <https://pdubey96.github.io/>.

## Files

| File         | What it is                                              |
|--------------|---------------------------------------------------------|
| `index.html` | Home: profile, bio, interests, latest papers, experience, education, skills. |
| `research.html` | The four research lines, each with its papers.       |
| `publications.html` | The full, numbered publication list.             |
| `news.html`  | Recent news.                                            |
| `talks.html` | Invited talks and presentations.                        |
| `awards.html` | Awards & honors; teaching, mentoring and service.      |
| `style.css`  | All styling, including the light/dark theme.            |
| `script.js`  | Dark-mode toggle, footer year.                          |
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

## Pages

The layout follows <https://hamedkhosravi99.github.io/>: a top bar on every
page, a home page that summarizes, and the detail on pages of its own.

- **Home** (`index.html`): photo beside name, title, affiliation and links
  (email, Scholar, GitHub, LinkedIn, CV) · bio · contact callout with both
  email addresses · Research Interests chips · Latest Papers · Research &
  Professional Experience · Education · Technical Skills.
- **Research**: each research line's description and its papers.
- **Publications**: Publications & Preprints, numbered `[1]`–`[10]`.
- **News** · **Talks** · **Awards & Service** (Awards & Honors; Teaching,
  Mentoring & Service).
- **CV** in the top bar opens `cv.pdf`.

Every section of the academic CV has a counterpart on one of the pages.

Things that are repeated, and so must be edited in more than one place:

- **The top bar** is copied into all six pages. Edit them together; only the
  `aria-current="page"` attribute moves.
- **Latest Papers** on Home repeats the five newest entries of
  `publications.html` by arXiv date. When a paper is posted or its status
  changes, update both.
- **Research** lists each paper's title and link again, grouped the same way.

Old links to sections of the single-page site (`/#publications`, `/#talks`,
`/#news`, `/#awards`, `/#service`) are forwarded to the new pages by a script in
the head of `index.html`.

Content is kept in sync with `~/Documents/GitHub/CV/academic/Prasanjit_Dubey_Academic_CV.tex`,
which is the source of truth. Publications appear in the CV's exact wording,
status and arXiv links, but are grouped by research line rather than by
submission status: **Optimal Multiple Testing**, **Federated &
Communication-Constrained Learning**, **Federated and Anytime-Valid Multiple
Testing**, and **Statistical Machine Learning**. Within each group, papers run
newest first by arXiv date, as on the CV. The working paper sits last in its
group with an "In preparation" badge and no link, on purpose, because it is not
on arXiv yet. All nine arXiv IDs were verified against arxiv.org.

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

Every page therefore requests its assets with a version string:

```html
<link rel="stylesheet" href="style.css?v=20260926a" />
<script src="script.js?v=20260926a"></script>
```

**Bump that string whenever you change `style.css` or `script.js`**, in all six
pages and both to the same value (the date plus a letter works). A new query string is a new URL, so
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
