import { Link } from 'react-router';
import Navigation from '../Navigation/Navigation.jsx';
import { routePaths } from '../../utils/constants.js';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to={routePaths.discover}>
        CollectorX
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
