import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./CamperDetails.module.css";
import icons from "../../assets/sprite.svg";
import CamperFeatures from "../CamperFeatures/CamperFeatures";

export default function CamperDetails({ camper }) {
  return (
    <div className={css.itemContainer}>
      {camper.gallery?.[0]?.thumb && (
        <img
          className={css.photoImage}
          src={`${camper.gallery[0].thumb}`}
          width="292"
          alt={`${camper.name}`}
        />
      )}
      <div className={css.infoContainer}>
        <div className={css.titleContainer}>
          <h2 className={css.title}>{camper.name}</h2>
          <p>{`€ ${Number(camper.price).toFixed(2)}`}</p>
          <svg width="26" height="24" style={{ cursor: "pointer" }}>
            <use href={`${icons}#heart`} />
          </svg>
        </div>
        <div className={css.ratingContainer}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} />
          </svg>
          <p className={css.reviewText}>
            {camper.rating} ({camper.reviews.length} Reviews)
          </p>
          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg>{" "}
          {camper.location}
        </div>
        <p className={css.descriptionText}>
          {`${camper.description.substring(0, 55)}` + "..."}
        </p>
        <CamperFeatures camper={camper} />
        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className={css.showMoreButton}>
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
}

CamperDetails.propTypes = {
  camper: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string,
      })
    ),
  }).isRequired,
};
