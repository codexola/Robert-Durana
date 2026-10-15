# Robert Durana — Creative Portfolio

A responsive portfolio with 102 project visuals, recommended implementation stacks, and only original personal photograph No. 6. Personal identity and photographs are included; personal contact links are omitted.

## Development

Use Node.js 24 (the environment's validated runtime).

```sh
npm ci --cache /tmp/portfolio-npm-cache
npm run dev -- --port 3000
```

Production validation:

```sh
npm run build
npm run check:content
npm run preview
```

The `predev` and `prebuild` hooks prepare original images automatically. Serve the generated `dist/` directory on a static host. No application backend or runtime secrets are required.

## Unchanged original images

All 103 project/personal images are served from `/artwork/` on the same host as the portfolio. This removes the browser's dependency on GitHub availability and cross-origin networking.

`scripts/prepare-assets.mjs` copies the original local PNG files into `public/artwork/`. In a deployment where the original source PNGs are excluded from upload, it downloads them from their pinned GitHub commit. Every file is checked against its SHA-256 checksum and expected byte count in `content/asset-integrity.json`. Valid cached files are reused; a checksum mismatch fails the build. No resizing, recompression, recoloring, or retouching occurs.

`content/photos.json` explicitly includes only photograph No. 6. The other five personal photos are excluded from the deployed assets and removed from generated artwork during preparation. `projects.json` lists all 102 projects with original dimensions and source links. Image dimensions reserve layout space. Gallery and viewer images preserve their composition and colors. Loading/error feedback and viewer retry controls handle failed requests.

Optional remote-source verification:

```sh
python scripts/verify-originals.py
```

Add `--all` to include every project image. This compares the GitHub source with the untouched repository originals.

## Project content

`content/project-analysis.json` contains visible evidence, scope, a proposed process, and a recommended stack for each project. `PROJECT_STACKS.md` is the readable reference. These are proposed implementation choices inferred from artwork, not claims about the actual original source code.

Technology search and category filters define the project viewer's previous/next sequence. The project viewer supports keyboard navigation and both viewers support Escape dismissal. Reduced-motion preferences are respected.

## Vercel

`vercel.json` builds the Vite app, verifies all content/images, and serves `dist/`. `.vercelignore` excludes root source PNGs and generated artwork from the upload; the build fetches verified originals. The resulting static output contains about 201 MB of unchanged PNGs, so each visitor receives the original files on demand. GitHub access is required during an uncached remote build, not while browsing the deployed site.

Vercel is connected to this GitHub repository and deploys the `main` branch automatically. Pushing a tested application revision to `main` triggers the production deployment. Direct Vercel CLI authentication is not required for this workflow.

Do not store authentication tokens in the repository or chat. A live deployment is confirmed only after a successful deployment and inspection of its actual public URL. The deployment source includes the application, its locked dependencies, Vercel configuration, and the original-image verification manifest.

## Validation

`npm run check:content` verifies analysis coverage, original image hashes and dimensions, and absence of personal contact links. Production Chromium checks cover all project images, the retained personal photograph, filtering/search, filtered keyboard navigation, forced image failure and successful retry, pagination, mobile layout, reduced motion, and runtime errors.

## The Memory Room

The personal section is a CSS 3D room with wall, desktop, bedside, and bed frames, all displaying photograph No. 6. The original PNG remains byte-identical and is displayed with contain sizing. Drag on desktop, use the rotation buttons or focus the room and press the arrow keys, reset the view, or pause/resume its camera and lighting animation. Touch devices retain normal vertical scrolling and use explicit rotation buttons. Any frame opens the full original photograph.

The room scales to the available viewport. Animations pause offscreen and respect reduced-motion preferences. No additional 3D runtime, graphics assets, or backend services are needed.
