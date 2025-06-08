import { useSelector } from "react-redux";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import css from "./CamperDescription.module.css";
import { getSelectedCamper } from "../../redux/campers/selectors";
import Gallery from "../Gallery/Gallery";
import CamperInfo from "../CamperInfo/CamperInfo";
import DetailsFeatures from "../DetailsFeatures/DetailsFeatures";
import Reviews from "../Reviews/Reviews";

const activeLink = ({ isActive }) => clsx(css.link, isActive && css.activeLink);

export default function CamperDescription() {
  const camper = useSelector(getSelectedCamper);

  if (!camper) {
    return <p>Camper data is not available.</p>;
  }

  const { name, rating, reviews, location, price, gallery, description } =
    camper;

  return (
    <section className={css.camperDescription}>
      <h2 className={css.title}>{name}</h2>

      <CamperInfo
        rating={rating}
        reviews={reviews}
        location={location}
        price={price}
      />

      <Gallery images={gallery} />

      <p className={css.description}>{description}</p>

      <nav className={css.nav}>
        <NavLink className={activeLink} to="features">
          Features
        </NavLink>
        <NavLink className={activeLink} to="reviews">
          Reviews
        </NavLink>
      </nav>

      <Routes>
        <Route path="" element={<Navigate to="features" />} />
        <Route path="features" element={<DetailsFeatures />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </section>
  );
}
