# Rebrickable integration (planned)

This folder reserves the first collectible provider integration: LEGO sets from
Rebrickable. It contains no API implementation or credentials.

When this stage is approved, request functions using vanilla `fetch()` and any
translation from provider responses to generic collectible data belong here.
Components should receive generic data and should not depend on Rebrickable's
response fields. Define the data shape when the integration is actually built.

Do not add other providers, a provider registry, API keys, or network requests
during initial setup. Configuration should have one home in the utility layer
when it is needed. Values exposed to a frontend bundle are public, so a secret
must never be placed in client-side code or a `VITE_` environment variable.
