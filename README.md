# Arman Lohtia — Portfolio

My personal portfolio site — and my DevOps practice ground. Every tool I learn (Docker, CI/CD, GitHub Actions, GitLab CI) gets tested here first. This isn't a tutorial project; it's a real site, shipped through a real pipeline, updated as I learn.



---

## Why this exists

I'm learning DevOps in public, one stage at a time. Instead of practicing on throwaway tutorial repos, I use this portfolio as the thing I actually deploy — so every new tool (Docker, a CI pipeline, a registry, a deployment target) gets tested against a real, running site instead of a sandbox that gets deleted afterward.

## Design variants

This repo contains two versions of the same portfolio:

| Folder | Theme | Description |
|---|---|---|
| `portfolio/` | Terminal / pipeline | Dark, terminal-styled UI with a live CI/CD pipeline status strip and command-line-style sections |
| `portfolio-colourful/` | Colourful bento | Bright, bento-grid layout with a tools badge board colour-coded to each tool's real brand colour |

Both are plain **HTML / CSS / JS** — no framework, no build step, no dependencies to install.

## Tech stack

**Frontend**
- HTML5, CSS3, vanilla JavaScript

**DevOps / deployment (in progress)**
- Docker — containerizing the static site
- GitHub Actions — CI on every push (build + deploy)
- GitLab CI — mirrored pipeline for comparison/practice
- Nginx — serving the container

## Project structure

```
├── portfolio-colourful/        
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .github/
│   └── workflows/
│       └── your-workflow.yml
└── README.md

```

## Running locally

No dependencies to install. Pick a variant folder and either:

**Option A — just open it**
Double-click `index.html` in the folder you want to view.

**Option B — serve it properly (recommended)**
In VS Code, install the **Live Server** extension, right-click `index.html` → **Open with Live Server**. Auto-refreshes on save.

## Roadmap — DevOps journey

Tracking what's been added, in order:

- [x] Static site built (HTML/CSS/JS, two design variants)
- [ ] Dockerfile — containerize with Nginx
- [ ] GitHub Actions — CI pipeline (build + lint)
- [ ] GitHub Actions — CD to a live host (GitHub Pages / VPS / Render)
- [ ] GitLab CI — mirrored pipeline for comparison
- [ ] Staging vs production environment split
- [ ] Secrets management for deploy credentials
- [ ] Terraform — provision the deploy target as code
- [ ] Basic monitoring / uptime checks

## Contact

- Email: [armnxlohtia05@gmail.com](mailto:armnxlohtia05@gmail.com)
- GitHub: [github.com/armanlohtia](https://github.com/armanlohtia)
- LinkedIn: [linkedin.com/in/arman-lohtia](https://www.linkedin.com/in/arman-lohtia)


