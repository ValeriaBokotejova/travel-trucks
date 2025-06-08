import PropTypes from "prop-types";
import css from "./Layout.module.css";
import Navigation from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Logo />
        <Navigation />
      </header>
      <main>{children} </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
