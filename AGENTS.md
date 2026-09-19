# CollectorX project rules

These rules apply to all work in this repository.

- This is a TripleTen final project.
- Use JavaScript, not TypeScript.
- Use functional React components.
- Use React hooks correctly.
- Use React Router for routing.
- Use vanilla `fetch()` for external API requests. Do not use Axios or jQuery.
- API request functions must live in separate utility modules.
- Use BEM methodology for CSS class names.
- Components should be reusable when appropriate.
- Keep application-level component names generic when they represent generic collectibles. Rebrickable-specific code should remain isolated to the Rebrickable integration layer.
- Do not introduce unnecessary third-party libraries.
- Do not add features outside the approved MVP without asking first.
- Do not put secrets or API keys in source control.
- Do not commit `.env` files containing secrets.
- Avoid hardcoding configuration values throughout components.
- Keep code readable and use descriptive camelCase names.
- Component names should use PascalCase.
- No unexplained generated code. The project owner must be able to understand and explain the implementation.
- Preserve accessibility and semantic HTML.
- The application must ultimately be responsive down to 320px without horizontal scrolling.
- Do not use CSS `overflow: hidden` merely to conceal layout problems.
- Do not use `reset.css`.
- Internal navigation should use React Router.
- Avoid build/runtime warnings and console errors.
- Do not implement future collectible providers until explicitly requested.
- Do not implement optional features simply because they seem useful.
- Before making substantial architectural changes, explain why they are necessary.

## Approved MVP and current stage

The MVP supports only LEGO sets through Rebrickable, the first planned collectible provider. Keep the application structure generic without implementing additional providers.

Stage 1 includes the React/Vite application shell, routes for `/` and
`/collection`, live Rebrickable LEGO-set search, loading/empty/error states,
local Show More batching, and frontend-only Login and Register modals. Search
state and modal state are coordinated in App. Rebrickable request construction
and normalization remain isolated in the provider utility layer.

- Do not expose, log, hard-code, or commit the Rebrickable API key.
- Do not implement real authentication or store credentials in the Stage 1 modal forms.
- Do not implement the Express backend, MongoDB/Mongoose infrastructure, or JWT authentication yet.
- Do not deploy or create external service accounts.
- Do not add comics, trading cards, games, action figures, pricing, valuation, marketplace functionality, or other collectible categories.
- Complete the current stage, report the changes and verification results, and wait for the project owner's explicit approval before beginning the next phase.
