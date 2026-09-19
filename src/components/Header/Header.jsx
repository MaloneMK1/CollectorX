import { Link } from 'react-router';
import Navigation from '../Navigation/Navigation.jsx';
import { ROUTE_PATHS } from '../../utils/constants.js';
import './Header.css';

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <Link className="header__logo" to={ROUTE_PATHS.discover}>
        <span className="header__logo-name">Collector</span>
        <span className="header__logo-mark">X</span>
      </Link>
      <Navigation />
      <button className="header__login" type="button" onClick={onLoginClick}>
        Login
      </button>
    </header>
  );
}

export default Header;
