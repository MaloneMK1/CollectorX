import { NavLink } from 'react-router';
import { routePaths } from '../../utils/constants.js';
import './Navigation.css';

function getLinkClassName({ isActive }) {
  return isActive
    ? 'navigation__link navigation__link_active'
    : 'navigation__link';
}

function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to={routePaths.discover} end className={getLinkClassName}>
            Discover
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to={routePaths.collection} className={getLinkClassName}>
            My collection
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
