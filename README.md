# CollectorX

CollectorX is a responsive collection-management application being developed as
a TripleTen Software Engineering final project. Stage 1 focuses on discovering
LEGO sets through the Rebrickable API. Other collectible providers, pricing,
authentication, and persistence are outside the current scope.

## Stage 1 functionality

- Search Rebrickable for LEGO sets without making a request on every keystroke.
- Display normalized set images, names, numbers, years, and piece counts.
- Show an accessible preloader while a search is pending.
- Present distinct initial, loading, successful, empty, and error states.
- Reveal successful results locally in groups of three with Show More.
- Open reusable frontend-only Login and Register forms.
- Navigate between Discover (`/`) and My Collection (`/collection`) with React Router.
- Adapt the layout from desktop widths down to 320px.

Login and registration are presentation-only in Stage 1. The forms do not create
accounts, authenticate users, send credentials, or store credentials. My
Collection, Grails, and Wishlist are also not functional yet.

## Technology

- JavaScript and JSX
- React and React DOM
- React Router
- Vite
- Vanilla CSS using BEM class names
- Vanilla `fetch()`
- Rebrickable API
- Oxlint

No request library such as Axios or jQuery is used. Rebrickable-specific request
construction and response normalization remain isolated in
`src/utils/providers/rebrickable/`.

## Local setup

Install dependencies from the project root:

```sh
npm install
```

Create a local `.env` file in the project root and add your own Rebrickable API
key:

```env
VITE_REBRICKABLE_API_KEY=<your key>
```

Never commit the real key or the `.env` file. Vite exposes `VITE_` variables to
browser code, so this value is client-visible and is not a server-side secret.

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite.

## Validation and production build

```sh
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. `npm run preview` serves the existing
build locally and does not deploy it.

## Project structure

```text
src/
|-- components/
|   |-- App/
|   |-- Header/
|   |-- Navigation/
|   |-- Main/
|   |-- Footer/
|   |-- SearchForm/
|   |-- SearchResults/
|   |-- CollectibleCard/
|   |-- Preloader/
|   |-- ModalWithForm/
|   |-- LoginModal/
|   `-- RegisterModal/
|-- images/
|-- utils/
|   |-- constants.js
|   `-- providers/rebrickable/
`-- vendor/fonts/
```

Application-level search and modal state live in `App`. Generic presentation
components do not depend on raw Rebrickable response field names.

## Fonts

CollectorX locally hosts Oi Regular and the Poppins weights used by the current
design system (`400`, `600`, `700`, and `900`). Valid `@font-face` declarations
live in `src/vendor/fonts/fonts.css`, which is loaded by `src/main.jsx`.

The WOFF2 files come from the official Google Fonts delivery service. Both
families use the SIL Open Font License 1.1, and license copies are stored beside
the font assets. No Google Fonts `<link>` tag or remote CSS `@import` is used.

The local families are registered for staged visual adoption. Existing approved
typography, including the Arial Black results headings, remains unchanged.

## Deployment

[View the deployed CollectorX application](https://malonemk1.github.io/CollectorX/).

## Project pitch video

**TODO:** Add the project pitch video link after it is recorded and uploaded.
