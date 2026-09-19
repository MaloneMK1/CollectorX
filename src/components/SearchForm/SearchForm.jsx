import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch, isLoading }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedSearchTerm = searchTerm.trim();

    if (!trimmedSearchTerm) {
      return;
    }

    onSearch(trimmedSearchTerm);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-form__label" htmlFor="collectible-search">
        Search the vault
      </label>
      <div className="search-form__controls">
        <input
          className="search-form__input"
          id="collectible-search"
          name="search"
          type="search"
          placeholder="Search LEGO sets..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          required
        />
        <button className="search-form__button" type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
