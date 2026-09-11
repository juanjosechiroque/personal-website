# Personal Website

Bilingual professional website for Juan José Chiroque, Senior Software Engineer and Tech Lead. Built with semantic HTML, vanilla CSS and a small JavaScript enhancement layer, with no dependencies or build step.

## Structure

```text
index.html                 English site
es/index.html              Spanish site
assets/css/styles.css      Shared responsive styles
assets/js/config.js        Public-profile links
assets/js/site.js          Mobile navigation and small enhancements
assets/images/             Profile photo, social preview and favicon
robots.txt / sitemap.xml   Search-engine discovery
```

## Preview locally

From the project root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. The Spanish page is available at `http://localhost:8000/es/`.

## Updating content

- Keep English and Spanish content aligned by updating both `index.html` and `es/index.html`.
- Update public profile URLs in `assets/js/config.js` and their matching HTML links.
- Replace images in `assets/images/` only with optimized files that preserve the existing dimensions and references.

## License

Copyright © 2026 Juan José Chiroque. All rights reserved.

This repository and its contents, including source code, design, text, photographs and other assets, may not be copied, modified, distributed or used without prior written permission from the copyright holder.
