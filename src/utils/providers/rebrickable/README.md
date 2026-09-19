# Rebrickable integration

This folder contains the first collectible provider integration: LEGO sets from
Rebrickable. Provider request details stay here so generic CollectorX components
do not depend on Rebrickable response fields.

`rebrickableApi.js` uses vanilla `fetch()` and reads the API key from
`import.meta.env.VITE_REBRICKABLE_API_KEY`. The local `.env` file is ignored by
Git and must never be committed. Because Vite embeds `VITE_` variables into the
browser bundle, this value is client-visible and is not a server-side secret.

The provider accepts a LEGO set search term, requests up to 100 matching sets in
one controlled request, and normalizes Rebrickable fields into generic
collectible objects. App reveals the returned objects locally in groups of three,
so Show More does not generate repeated API requests.
