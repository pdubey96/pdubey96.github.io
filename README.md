# Personal website, Prasanjit Dubey

A six-page academic site built with plain HTML and CSS. No build step, no
dependencies, just open `index.html`.

Live at <https://pdubey96.github.io/>.

## Files

| File         | What it is                                              |
|--------------|---------------------------------------------------------|
| `index.html` | Home: profile, bio, interests, selected papers, experience, education, skills. |
| `research.html` | The four research lines, each with its numbered papers. |
| `publications.html` | The full, numbered publication list.             |
| `experience.html` | Research & professional experience (also on Home). |
| `news.html`  | Recent news.                                            |
| `awards.html` | Talks; awards & honors; teaching, mentoring and service. |
| `style.css`  | All styling, including the light/dark theme.            |
| `script.js`  | Dark-mode toggle, footer year.                          |
| `cv.pdf`     | The CV. **Permanent link; see below.**                  |
| `mypicnov2025.jpg` | Headshot, shown as the circular avatar.           |
| `assets/`    | Spare folder for any additional images.                 |
| `CV/`        | CV sources. **Git-ignored: never committed, never served.** |

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
cp CV/academic/Prasanjit_Dubey_Academic_CV.pdf cv.pdf
git add cv.pdf && git commit -m "Update CV" && git push
```

The `CV/` folder sits inside this repo for convenience but is listed in
`.gitignore`, so `git add -A` never picks it up. Keep it that way: it also holds
private files, and anything committed here becomes a public URL on the site.

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
  (email, Scholar, GitHub, LinkedIn, CV) · bio · contact callout (the gmail
  address only, as on the CV) · Research Interests chips · Selected Papers ·
  Research & Professional Experience · Education · Technical Skills.
- **Research**: each research line's description and its papers, numbered as
  on the Publications page.
- **Publications**: Publications & Preprints, numbered `[1]`–`[11]`.
- **Experience** (`experience.html`): Research & Professional Experience, the
  same section Home shows, on a tab of its own.
- **News**.
- **Talks, Awards & Service** (`awards.html`): Invited Talks & Presentations;
  Awards & Honors; Teaching, Mentoring & Service. Talks had a page of their
  own for a day; with three entries it read thin, so it merged here.
- **CV** in the top bar opens `cv.pdf`.

Every section of the academic CV has a counterpart on one of the pages.

Things that are repeated, and so must be edited in more than one place:

- **The top bar** is copied into all six pages. Edit them together; only the
  `aria-current="page"` attribute moves.
- **Selected Papers** on Home repeats five hand-picked entries of
  `publications.html` (BOOST, the JASA and JCGS papers, Report Resolution,
  LLmFPCA-detect). When one of them changes status, update both.
- **Research & Professional Experience** appears on Home and on
  `experience.html`, word for word. Edit both.
  It is grouped by kind, Industry and then Sponsored Research, each newest
  first, so Bloomberg leads; the CV lists all five in one newest-first run.
- **Research** lists each paper's title and link again. Its `[n]` come from
  a CSS counter, like the Publications page's, so the two pages must list the
  papers in the same groups and order for the numbers to agree.

Old links to sections of the single-page site (`/#publications`, `/#talks`,
`/#news`, `/#awards`, `/#service`) are forwarded to the new pages by a script in
the head of `index.html`. `talks.html` no longer exists.

Content is kept in sync with `CV/academic/Prasanjit_Dubey_Academic_CV.tex`,
which is the source of truth. Publications appear in the CV's exact wording,
status and arXiv links, but are grouped by research line rather than by
submission status: **Optimal Multiple Testing**, **Federated &
Communication-Constrained Learning**, **Federated and Anytime-Valid Multiple
Testing**, and **Statistical Machine Learning**. Within each group, papers run
newest first by arXiv date, as on the CV. Byzantine-Robust Federated RAG sits
last in its group with no link, on purpose, because it is not on arXiv yet
(under review at ICLR 2027). Workshop acceptances (Second Workshop on MLxOR,
NeurIPS 2026) appear as a ★ line under the paper, the way the CV marks a
presentation, so each paper's badge keeps its main status. arXiv:2512.14131,
which was merged into the JCGS paper, is its own entry here (after the JCGS
paper, by arXiv date), at Prasanjit's request; the CV instead carries it inside
the JCGS entry as a "[Companion paper]" line. All ten arXiv
IDs were verified against arxiv.org.

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
<link rel="stylesheet" href="style.css?v=20261005b" />
<script src="script.js?v=20261005b"></script>
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
