# CollectorX

CollectorX is a responsive collection-management application built as my
TripleTen Software Engineering final project.

The long-term goal of CollectorX is to provide one place for collectors to
discover, organize, and manage different types of collectibles. Stage 1 focuses
on LEGO sets and uses the Rebrickable API to provide live set data.

## Live Project

[View the deployed CollectorX application](https://malonemk1.github.io/CollectorX/)

## Project Pitch

[Watch the CollectorX project pitch](https://www.loom.com/share/d4b814461f1844e4874335e20b4a05a7)

## Features

CollectorX Stage 1 allows users to:

- Search the Rebrickable catalog for LEGO sets.
- View LEGO set images, names, set numbers, release years, and piece counts.
- View search results in groups of three using a **Show More** button.
- See distinct loading, success, empty, and error states.
- Navigate between the Discover and My Collection pages with React Router.
- Register, log in, and log out through a frontend-only mock authentication flow.
- Receive inline validation feedback from reusable controlled modal forms.
- Use the application across screen sizes from desktop down to 320px.

The search only runs when submitted rather than making an API request on every
keystroke.

Login and registration are simulated in Stage 1 so reviewers can exercise the
complete form flow. Any syntactically valid email and password of at least eight
characters is accepted. Successful submission changes Login to Logout for the
current browser session. The forms do not create accounts, contact a backend,
transmit credentials, or persist credentials.

My Collection, Grails, and Wishlist are also currently presentation or
placeholder features. Persistent collection management, authentication,
additional collectible providers, and pricing are planned for future
development and are outside the scope of Stage 1.

## Technology

CollectorX Stage 1 uses:

- JavaScript
- JSX
- React
- React DOM
- React Router
- Vite
- Vanilla CSS with BEM naming conventions
- Vanilla `fetch()`
- Rebrickable API
- Oxlint

No request library such as Axios or jQuery is used.

Rebrickable-specific request construction and response normalization are
isolated in:

```text
src/utils/providers/rebrickable/
```

This keeps the application components independent of the raw Rebrickable API
response structure and leaves room for additional collectible providers in
future versions of CollectorX.

## Application Structure

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
|-- hooks/
|   `-- useForm.js
|-- utils/
|   |-- constants.js
|   `-- providers/
|       `-- rebrickable/
`-- vendor/
    `-- fonts/
```

Application-level search, modal, and mock login state are managed by `App`.
`useForm` provides reusable controlled values, validation errors, validity, and
reset handling for both authentication forms. Presentation components work with
normalized collectible data rather than raw Rebrickable response fields.

## Routes

CollectorX currently contains two primary application routes:

- `/` — Discover and search LEGO sets.
- `/collection` — My Collection placeholder for future persistent collection
  management.

Unknown routes display a page-not-found fallback with navigation back to
Discover.

## API and Search Behavior

CollectorX uses the Rebrickable API to retrieve LEGO set information.

API requests are handled separately from presentation components. Rebrickable
responses are normalized into generic collectible objects before they are
provided to the UI.

A successful search retrieves matching results and initially displays three
items. Selecting **Show More** reveals three additional results from the
existing result set without making another API request.

The interface also provides dedicated states for:

- Initial content
- Loading
- Successful results
- No results found
- API or connection errors

## Responsive Design and Accessibility

CollectorX was designed to remain usable from desktop displays down to a
minimum width of 320px.

The interface includes:

- Responsive layouts using Flexbox and Grid.
- Semantic HTML where appropriate.
- Keyboard-accessible interactive controls.
- Visible focus states.
- Descriptive image alternative text.
- Accessible form labels.
- Controlled required email and password fields with inline validation.
- Modal dialogs that can be closed with the close button, overlay, or Escape
  key.
- Keyboard focus containment while a modal is open.
- Focus restoration after a modal closes.
- Accessible loading and error feedback.

## Fonts

CollectorX locally hosts:

- Oi Regular
- Poppins Regular (`400`)
- Poppins SemiBold (`600`)
- Poppins Bold (`700`)
- Poppins Black (`900`)

The fonts are registered with local `@font-face` declarations in:

```text
src/vendor/fonts/fonts.css
```

The stylesheet is loaded by `src/main.jsx`.

The WOFF2 font files originate from Google Fonts. Both font families are
licensed under the SIL Open Font License 1.1, and copies of their licenses are
stored with the font assets.

CollectorX does not use a Google Fonts `<link>` element or remote CSS
`@import`. The local fonts are available for the project's design system while
existing approved typography remains unchanged.

## Local Setup

Clone the repository and install the project dependencies:

```sh
npm install
```

Create a `.env` file in the project root and provide a Rebrickable API key:

```env
VITE_REBRICKABLE_API_KEY=<your key>
```

Never commit the real API key or the `.env` file.

Because Vite exposes variables prefixed with `VITE_` to browser code, this value
is client-visible and should not be treated as a server-side secret.

Start the development server:

```sh
npm run dev
```

Open the local URL provided by Vite.

## Validation and Production Build

Run the project linter:

```sh
npm run lint
```

Create a production build:

```sh
npm run build
```

Preview the existing production build locally:

```sh
npm run preview
```

Vite writes the production build to the `dist/` directory.

## Deployment

CollectorX Stage 1 is deployed with GitHub Pages:

[https://malonemk1.github.io/CollectorX/](https://malonemk1.github.io/CollectorX/)

The Vite base path and React Router basename are configured for the
`/CollectorX/` repository path.

## Future Development

CollectorX is intended to grow beyond the Stage 1 frontend.

Potential future development includes:

- Backend-connected user authentication
- Persistent user accounts
- Saved collections
- Wishlist management
- Grail tracking
- Collection quantities and notes
- Backend API and database integration
- Additional collectible providers
- Pricing and collection-value features

These features are intentionally outside the scope of the current Stage 1
submission.
