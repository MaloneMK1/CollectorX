// Shared route paths keep links and route definitions consistent.
export const ROUTE_PATHS = {
  discover: '/',
  collection: '/collection',
};

export const API_REQUEST_ERROR_MESSAGE =
  'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.';

export const RESULTS_BATCH_SIZE = 3;

// Temporary visual data. Rebrickable data will replace this after API work is approved.
export const MOCK_COLLECTIBLES = [
  { id: 'mock-set-1', name: 'Metro Rescue Station', year: '1981', pieceCount: '356 pieces', accentColor: '#e63735', imageLabel: 'Red brick model placeholder' },
  { id: 'mock-set-2', name: 'Galaxy Explorer', year: '1979', pieceCount: '338 pieces', accentColor: '#ffd426', imageLabel: 'Yellow brick model placeholder' },
  { id: 'mock-set-3', name: 'Harbor Crane', year: '1985', pieceCount: '412 pieces', accentColor: '#ffffff', imageLabel: 'White brick model placeholder' },
];
