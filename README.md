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
- **Theses:** approved snapshots are exported from the private teaching repository using its documented preview and approval workflow. The Markdown filename is the stable lowercase topic ID; do not copy internal records.

- **Open source:** add verified public links to `src/data/resources.js`.

Do not add confidential content. Thesis announcements remain empty until public topics are approved.

## Publish

Push to `main`. The included GitHub Actions workflow builds and deploys the static site to the root of `https://turnwald.github.io/`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow can also be started manually from the Actions tab. Check its deployment status after pushing.
