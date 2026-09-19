import { API_REQUEST_ERROR_MESSAGE } from '../../constants.js';

const REBRICKABLE_API_BASE_URL = 'https://rebrickable.com/api/v3';
const REBRICKABLE_SETS_ENDPOINT = `${REBRICKABLE_API_BASE_URL}/lego/sets/`;
const REBRICKABLE_SEARCH_PAGE_SIZE = 100;
const rebrickableApiKey = import.meta.env.VITE_REBRICKABLE_API_KEY;

function normalizeRebrickableSet(set) {
  return {
    id: `rebrickable-${set.set_num}`,
    externalId: set.set_num,
    name: set.name,
    setNumber: set.set_num,
    year: set.year,
    imageUrl: set.set_img_url,
    imageAlt: `${set.name} LEGO set`,
    pieceCount: set.num_parts ? `${set.num_parts} pieces` : '',
    source: 'rebrickable',
  };
}

export function getRebrickableSets(searchTerm) {
  if (!rebrickableApiKey) {
    return Promise.reject(new Error(API_REQUEST_ERROR_MESSAGE));
  }

  const requestUrl = new URL(REBRICKABLE_SETS_ENDPOINT);
  requestUrl.searchParams.set('search', searchTerm);
  requestUrl.searchParams.set('page_size', String(REBRICKABLE_SEARCH_PAGE_SIZE));

  return fetch(requestUrl, {
    headers: {
      Authorization: `key ${rebrickableApiKey}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(API_REQUEST_ERROR_MESSAGE);
      }

      return response.json();
    })
    .then((data) => data.results.map(normalizeRebrickableSet));
}
