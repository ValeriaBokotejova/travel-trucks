import css from "./Logo.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <img src={logo} alt="Logo" width={136} height={16} />
    </Link>
  );
}
