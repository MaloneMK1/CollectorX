import { Link, Route, Routes } from 'react-router';
import { routePaths } from '../../utils/constants.js';
import './Main.css';

function Main() {
  return (
    <main className="main" id="main-content" tabIndex={-1}>
      <Routes>
        <Route
          path={routePaths.discover}
          element={
            <section className="main__section" aria-labelledby="discover-title">
              <h1 className="main__title" id="discover-title">
                Discover collectibles
              </h1>
              <p className="main__description">
                CollectorX starts with LEGO sets. Search and discovery are coming
                in a later stage.
              </p>
            </section>
          }
        />
        <Route
          path={routePaths.collection}
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
              <Link className="main__link" to={routePaths.discover}>
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
