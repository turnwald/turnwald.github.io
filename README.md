# Turnwald Teaching

Public teaching portal built with Astro. No private teaching material is included.

## Develop locally

Install Node.js 22.12 or later, then run:

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Add content

- **Courses:** add an entry to `src/data/courses.js`, using the documented fields and a unique URL-safe slug. Each entry creates a course detail page. Links can point to teaching materials, demos or repositories.
- **Labs:** add an entry to `src/data/labs.js`. For locally hosted applications put static files in `public/labs/<name>/` and link to `/labs/<name>/`; external URLs also work.
- **Theses:** approved open snapshots and curated, anonymized status records are exported from the private teaching repository through its review workflow. `src/data/thesis-history.json` contains only approved public status records; non-available IDs suppress matching open pages. Do not copy internal records.

- **Publications:** update `src/data/publications.json` with verified metadata and links; use `proceedingsUrl` for an additional IEEE proceedings link and `manuscriptUrl` for an author manuscript. Entries are sorted by year on the site.
- **Featured demonstrations:** update `src/data/media.js`; add only verified external video URLs to `videoUrl`. Set `animation` to an optional optimized, silent animated WebP; otherwise the `poster` is shown. Use `wide: true` for demonstrations that need the full gallery width. Keep original media and video files outside this repository, and use optimized images or posters in `public/media/` after checking publication rights.
- **Open source:** add verified public links to `src/data/resources.js`.

Do not add confidential content. Status records require explicit review before publication.

## Publish

Push to `main`. The included GitHub Actions workflow builds and deploys the static site to the root of `https://turnwald.github.io/`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow can also be started manually from the Actions tab. Check its deployment status after pushing.
