import CollectibleCard from '../CollectibleCard/CollectibleCard.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import './SearchResults.css';

function SearchResults({
  collectibles,
  isLoading,
  errorMessage,
  hasSearched,
  submittedSearchTerm,
  hasMore,
  onShowMore,
}) {
  const hasNoResults = hasSearched && !isLoading && !errorMessage && collectibles.length === 0;
  let eyebrow = 'Featured finds';
  let title = 'Start your collection';

  if (isLoading) {
    eyebrow = 'Searching';
    title = `Looking for "${submittedSearchTerm}"`;
  } else if (errorMessage) {
    eyebrow = 'Search error';
    title = 'Something went wrong';
  } else if (hasNoResults) {
    eyebrow = 'Search results';
    title = 'Nothing found';
  } else if (hasSearched) {
    eyebrow = 'Search results';
    title = `Results for "${submittedSearchTerm}"`;
  }

  return (
    <section className="search-results" aria-labelledby="search-results-title">
      <div className="search-results__heading" aria-live="polite">
        <p className="search-results__eyebrow">{eyebrow}</p>
        <h2 className="search-results__title" id="search-results-title">
          {title}
        </h2>
      </div>
      {!hasSearched && (
        <p className="search-results__status">
          Preview cards. Search to load live Rebrickable results.
        </p>
      )}
      {isLoading && <Preloader />}
      {errorMessage && (
        <p className="search-results__status" role="alert">
          {errorMessage}
        </p>
      )}
      {hasNoResults && (
        <p className="search-results__status">Try another search term.</p>
      )}
      {!isLoading && !errorMessage && collectibles.length > 0 && (
        <>
          <ul className="search-results__grid">
            {collectibles.map((collectible) => (
              <li className="search-results__item" key={collectible.id}>
                <CollectibleCard collectible={collectible} />
              </li>
            ))}
          </ul>
          {hasSearched && hasMore && (
            <button
              className="search-results__more-button"
              type="button"
              onClick={onShowMore}
            >
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default SearchResults;
