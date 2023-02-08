import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div className={css.link}>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/"
        >
          Home
        </NavLink>
      </div>
      {isLoggedIn && (
        <div className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
