# CollectorX

CollectorX is a TripleTen Software Engineering final project: a collection-management platform being built incrementally toward a full-stack application.

## MVP scope and current stage

The MVP supports **LEGO sets only**. Rebrickable will be the first supported collectible data provider. Application-level components use generic names so future providers can be considered without making the application itself LEGO-specific. No additional providers or collectible categories are being implemented.

The current stage establishes the React frontend, shared page layout, navigation, and placeholder routes:

| Route | Current behavior | Planned behavior |
| --- | --- | --- |
| `/` | Discover placeholder | Search and discover LEGO sets through Rebrickable |
| `/collection` | Collection placeholder | Manage a collection using frontend state initially, then a protected route when backend authentication is connected |

Search, collection management, forms, modals, API requests, backend services, and authentication are not implemented yet. Each next phase requires the project owner's explicit approval. Pricing, valuation, marketplace functionality, and other collectible categories are outside the approved MVP.

## Technology stack

**Installed now:** JavaScript, React, React DOM, React Router, Vite, the Vite React plugin, and Oxlint. Styling uses plain CSS with BEM class names.

**Planned for later stages:** vanilla `fetch()` with the Rebrickable API, Node.js and Express, MongoDB and Mongoose, and JWT authentication. No backend dependencies, database services, or authentication implementation have been added.

The current official Vite React JavaScript template uses Oxlint, so the project retains that linter without adding ESLint or another linting stack. React Router is installed as `react-router` and uses its declarative routing APIs. Setup references: [Vite guide](https://vite.dev/guide/) and [React Router declarative installation](https://reactrouter.com/start/declarative/installation).

## Local development

Node.js **24.18.0** is the initial development baseline. Use npm from the project root:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Other available commands:

```sh
npm run build
npm run lint
npm run preview
```

`build` produces the production frontend in `dist/`. `lint` checks the project with Oxlint and treats warnings as failures. Run `preview` after a build to serve that build locally; it does not deploy the application.

## Project structure

```text
CollectorX/
|-- AGENTS.md
|-- README.md
|-- .gitignore
|-- .oxlintrc.json
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- public/
|   `-- favicon.svg
`-- src/
    |-- main.jsx
    |-- index.css
    |-- components/
    |   |-- App/              # App.jsx and App.css
    |   |-- Header/           # Header.jsx and Header.css
    |   |-- Navigation/       # Navigation.jsx and Navigation.css
    |   |-- Main/             # Main.jsx and Main.css
    |   |-- Footer/           # Footer.jsx and Footer.css
    |   |-- SearchForm/       # README.md only
    |   |-- SearchResults/    # README.md only
    |   |-- CollectibleCard/  # README.md only
    |   |-- Preloader/        # README.md only
    |   |-- ModalWithForm/    # README.md only
    |   |-- LoginModal/       # README.md only
    |   `-- RegisterModal/    # README.md only
    `-- utils/
        |-- constants.js
        `-- providers/
            `-- rebrickable/
                `-- README.md
```

`src/main.jsx` mounts `App` inside `BrowserRouter` and React `StrictMode`. `App` composes `Header`, `Main`, and `Footer`; `Header` includes `Navigation`. `Main` defines the two primary routes and a fallback for unknown paths. Shared route paths live in `src/utils/constants.js` so navigation links and route definitions stay consistent.

Each implemented component has its own CSS file. `src/index.css` contains shared base styles. The shell includes semantic landmarks, an accessible navigation label, a skip link, and visible keyboard focus styles.

The seven component folders containing only a README document future responsibilities; they are not working components or imported stubs. `src/utils/providers/rebrickable/` similarly reserves the integration layer without implementing it. Future request functions and any conversion from provider responses to generic collectible data belong there, separate from UI components. No provider registry or additional provider implementation exists.

## Configuration and secrets

No `.env` file, API key, or credentials are needed for this stage. `.gitignore` excludes `.env`, `.env.*`, dependencies, build output, logs, and common local editor files.

Never commit secrets. Frontend `VITE_` environment variables are exposed in the client bundle and must not contain secret values. Configuration will be added in a shared utility module when an approved feature needs it.

Project rules and the current stage boundaries are documented in [AGENTS.md](./AGENTS.md).

## Deployment link

To be added after deployment is explicitly approved and completed. The project is not deployed.

## Pitch video

To be added.
