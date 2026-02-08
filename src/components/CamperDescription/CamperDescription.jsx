import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";

import css from "./CamperDescription.module.css";
import { getSelectedCamper } from "../../redux/campers/selectors";
import Gallery from "../Gallery/Gallery";
import CamperInfo from "../CamperInfo/CamperInfo";

const activeLink = ({ isActive }) => clsx(css.link, isActive && css.activeLink);

export default function CamperDescription() {
  const camper = useSelector(getSelectedCamper);
  const { id } = useParams();

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
        <NavLink className={activeLink} to={`/catalog/${id}/features`}>
          Features
        </NavLink>
        <NavLink className={activeLink} to={`/catalog/${id}/reviews`}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </section>
  );
}
