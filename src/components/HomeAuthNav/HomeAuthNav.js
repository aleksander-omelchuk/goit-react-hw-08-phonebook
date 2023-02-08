import { NavLink } from 'react-router-dom';
import css from './HomeAuthNav.module.css';

const HomeAuthNav = () => {
  return (
    <div className={css.homenav}>
      <NavLink className={css.homenav__link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.homenav__link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default HomeAuthNav;
