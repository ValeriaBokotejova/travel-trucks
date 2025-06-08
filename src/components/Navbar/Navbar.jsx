import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import clsx from "clsx";

const active = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={active}>
          Catalog
        </NavLink>
      </nav>
    </>
  );
}
