import { NavLink } from 'react-router';
import { ROUTE_PATHS } from '../../utils/constants.js';
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
          <button className="navigation__placeholder" type="button" disabled>
            Grails
          </button>
        </li>
        <li className="navigation__item">
          <button className="navigation__placeholder" type="button" disabled>
            Wishlist
          </button>
        </li>
        <li className="navigation__item">
          <NavLink to={ROUTE_PATHS.collection} className={getLinkClassName}>
            My collection
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to={ROUTE_PATHS.discover} end className={getLinkClassName}>
            Discover
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
