import { useState } from 'react';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import RegisterModal from '../RegisterModal/RegisterModal.jsx';
import {
  API_REQUEST_ERROR_MESSAGE,
  RESULTS_BATCH_SIZE,
} from '../../utils/constants.js';
import { getRebrickableSets } from '../../utils/providers/rebrickable/rebrickableApi.js';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');
  const [visibleResultCount, setVisibleResultCount] = useState(RESULTS_BATCH_SIZE);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const visibleSearchResults = searchResults.slice(0, visibleResultCount);
  const hasMoreSearchResults = visibleResultCount < searchResults.length;

  function handleSearch(searchTerm) {
    setSubmittedSearchTerm(searchTerm);
    setHasSearched(true);
    setIsLoading(true);
    setSearchError('');
    setSearchResults([]);
    setVisibleResultCount(RESULTS_BATCH_SIZE);

    getRebrickableSets(searchTerm)
      .then((collectibles) => {
        setSearchResults(collectibles);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setSearchError(API_REQUEST_ERROR_MESSAGE);
      });
  }

  function handleShowMore() {
    setVisibleResultCount((currentCount) =>
      Math.min(currentCount + RESULTS_BATCH_SIZE, searchResults.length),
    );
  }

  function openLoginModal() {
    setActiveModal('login');
  }

  function openRegisterModal() {
    setActiveModal('register');
  }

  function closeModal() {
    setActiveModal(null);
  }

  function handleMockAuthentication() {
    setIsLoggedIn(true);
    closeModal();
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="app">
      <a className="app__skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={openLoginModal}
        onLogoutClick={handleLogout}
      />
      <Main
        searchResults={visibleSearchResults}
        isLoading={isLoading}
        searchError={searchError}
        hasSearched={hasSearched}
        submittedSearchTerm={submittedSearchTerm}
        hasMoreSearchResults={hasMoreSearchResults}
        onSearch={handleSearch}
        onShowMore={handleShowMore}
      />
      <Footer />
      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={closeModal}
        onOpenRegister={openRegisterModal}
        onLogin={handleMockAuthentication}
      />
      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={closeModal}
        onOpenLogin={openLoginModal}
        onRegister={handleMockAuthentication}
      />
    </div>
  );
}

export default App;
