# SearchResults

Reusable result grid that receives collectible data through props and renders
CollectibleCard components. It presents loading, API error, zero-result, initial
preview, and successful-result states supplied by its parent. Its heading reflects
the active state and the submitted search term.

It does not fetch data. For successful searches, it renders the App-controlled
visible result slice and a Show More button while more normalized results remain.
