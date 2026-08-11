# Images folder

Drop your image files into the subfolders below. In Next.js, everything inside
`public/` is served from the site root, so a file at:

```
public/images/hero/hero-main.jpg
```

is referenced in code as:

```
/images/hero/hero-main.jpg
```

(no `public` in the path).

## Folder guide

| Folder            | What goes here                                             |
| ----------------- | ---------------------------------------------------------- |
| `hero/`           | Home + About hero images (generator + compressor shots)    |
| `products/`       | Product photos (generators, compressors, spare parts)      |
| `services/`       | Technicians working, installations, maintenance shots      |
| `projects/`       | Completed project / site photos                            |
| `gallery/`        | General gallery + before/after photos                      |
| `clients/`        | Client company logos (transparent PNG or SVG preferred)    |
| `brands/`         | Equipment brand logos (Perkins, Cummins, Atlas Copco, ...) |
| `blog/`           | Blog article cover images                                  |
| `logo/`           | KGCS logo variants (light / dark / favicon)                |
| `og/`             | Social share image `og-image.jpg` (1200x630)               |

## Recommended filenames the site already looks for

You can rename freely, but if you use these names the images will "just work"
where I've wired them in. Otherwise tell me your filenames and I'll update the
code.

### hero/
- `hero-main.jpg`       – main home hero (generator + compressor, ~1600px wide)
- `about-hero.jpg`      – about page hero panel

### logo/
- `logo.svg` or `logo.png`      – primary KGCS logo
- `logo-white.svg`              – white version for dark backgrounds
- `favicon.ico`                 – browser tab icon

### products/
- `generator-1.jpg`, `generator-2.jpg` ...
- `compressor-1.jpg`, `compressor-2.jpg` ...
- `spare-parts-1.jpg` ...

### og/
- `og-image.jpg`  (1200 x 630, used for WhatsApp / Facebook / X previews)

## Tips
- Prefer `.webp` or optimized `.jpg` for photos, `.svg`/`.png` for logos.
- Keep hero images around 1600–2000px wide; Next/Image resizes the rest.
- Logos with transparent backgrounds look best in the clients/brands strips.
