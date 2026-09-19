import { Link, Route, Routes } from 'react-router';
import SearchForm from '../SearchForm/SearchForm.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import { MOCK_COLLECTIBLES, ROUTE_PATHS } from '../../utils/constants.js';
import './Main.css';

function DiscoverPage({
  searchResults,
  isLoading,
  searchError,
  hasSearched,
  submittedSearchTerm,
  hasMoreSearchResults,
  onSearch,
  onShowMore,
}) {
  const displayedCollectibles = hasSearched ? searchResults : MOCK_COLLECTIBLES;

  return (
    <>
      <section className="discover-hero" aria-labelledby="discover-title">
        <div className="discover-hero__content">
          <p className="discover-hero__eyebrow">The collection starts here</p>
          <h1 className="discover-hero__title" id="discover-title">
            Find your next <span className="discover-hero__title-accent">collectible.</span>
          </h1>
          <p className="discover-hero__description">
            Search LEGO sets, find the grails you have been looking for, and keep
            every piece of your collection in one place.
          </p>
        </div>
        <SearchForm onSearch={onSearch} isLoading={isLoading} />
      </section>
      <SearchResults
        collectibles={displayedCollectibles}
        isLoading={isLoading}
        errorMessage={searchError}
        hasSearched={hasSearched}
        submittedSearchTerm={submittedSearchTerm}
        hasMore={hasMoreSearchResults}
        onShowMore={onShowMore}
      />
    </>
  );
}

function Main({
  searchResults,
  isLoading,
  searchError,
  hasSearched,
  submittedSearchTerm,
  hasMoreSearchResults,
  onSearch,
  onShowMore,
}) {
  return (
    <main className="main" id="main-content" tabIndex={-1}>
      <Routes>
        <Route
          path={ROUTE_PATHS.discover}
          element={
            <DiscoverPage
              searchResults={searchResults}
              isLoading={isLoading}
              searchError={searchError}
              hasSearched={hasSearched}
              submittedSearchTerm={submittedSearchTerm}
              hasMoreSearchResults={hasMoreSearchResults}
              onSearch={onSearch}
              onShowMore={onShowMore}
            />
          }
        />
        <Route
          path={ROUTE_PATHS.collection}
          element={
            <section className="main__section" aria-labelledby="collection-title">
              <h1 className="main__title" id="collection-title">
                My collection
              </h1>
              <p className="main__description">
                Your collection will live here. Adding and managing collectibles
                are coming in a later stage.
              </p>
            </section>
          }
        />
        <Route
          path="*"
          element={
            <section className="main__section" aria-labelledby="not-found-title">
              <h1 className="main__title" id="not-found-title">
                Page not found
              </h1>
              <Link className="main__link" to={ROUTE_PATHS.discover}>
                Return to Discover
              </Link>
            </section>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
