# Local fonts

CollectorX includes local Latin-subset WOFF2 files for two Google Fonts families:

- Oi Regular (`400`)
- Poppins Regular (`400`)
- Poppins SemiBold (`600`)
- Poppins Bold (`700`)
- Poppins Black (`900`)

The files were obtained from the official Google Fonts delivery service. Family
metadata and source files are maintained in the official Google Fonts repository:

- https://github.com/google/fonts/tree/main/ofl/oi
- https://github.com/google/fonts/tree/main/ofl/poppins

Both families are distributed under the SIL Open Font License 1.1. License copies
are preserved as `OFL-Oi.txt` and `OFL-Poppins.txt` in this directory.

`fonts.css` contains the local `@font-face` declarations and reusable fallback
stacks. It is loaded through `src/main.jsx`; no Google Fonts `<link>` or remote CSS
`@import` is used at runtime.

These font families are registered but are not broadly applied yet. Existing
approved component typography, including the Arial Black results headings,
remains unchanged pending separate visual review.
