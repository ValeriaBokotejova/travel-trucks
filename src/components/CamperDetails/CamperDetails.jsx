import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import css from "./CamperDetails.module.css";
import icons from "../../assets/sprite.svg";
import CamperFeatures from "../CamperFeatures/CamperFeatures";

import { toggleFavorite } from "../../redux/favorites/slice";
import { isFavorite } from "../../redux/favorites/selectors";

export default function CamperDetails({ camper }) {
  const dispatch = useDispatch();
  const fav = useSelector(isFavorite(camper.id));

  const priceUi = Number(camper.price).toFixed(2).replace(".", ",");

  const onToggleFav = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.itemContainer}>
      {camper.gallery?.[0]?.thumb && (
        <img
          className={css.photoImage}
          src={camper.gallery[0].thumb}
          width="292"
          alt={camper.name}
        />
      )}

      <div className={css.infoContainer}>
        <div className={css.titleContainer}>
          <h2 className={css.title}>{camper.name}</h2>

          <p>{`€ ${priceUi}`}</p>

          <button
            type="button"
            onClick={onToggleFav}
            className={css.favButton}
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            title={fav ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
            width="26"
            height="24"
            style={{
              cursor: "pointer",
              color: fav ? "#e44848" : "#101828",
            }}
          >
            <use href={`${icons}#${fav ? "heart-filled" : "heart"}`} />
          </svg>
          </button>
        </div>

        <div className={css.ratingContainer}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} />
          </svg>

          <p className={css.reviewText}>
            {camper.rating} ({camper.reviews?.length || 0} Reviews)
          </p>

          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg>

          {camper.location}
        </div>

        <p className={css.descriptionText}>
          {camper.description?.length > 55
            ? `${camper.description.substring(0, 55)}...`
            : camper.description}
        </p>

        <CamperFeatures camper={camper} />

        <Link to={`/catalog/${camper.id}`} target="_blank" rel="noopener noreferrer">
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
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.array,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string,
      })
    ),
  }).isRequired,
};
