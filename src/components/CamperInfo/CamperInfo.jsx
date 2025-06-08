import PropTypes from "prop-types";
import icons from "../../assets/sprite.svg";
import css from "./CamperInfo.module.css";

export default function CamperInfo({ rating, reviews, location, price }) {
  return (
    <div className={css.infoContainer}>
      <div className={css.rating}>
        <svg className={css.icon} width="16" height="16">
          <use href={`${icons}#icon-Rating`} />
        </svg>
        <p className={css.reviewsText}>
          {rating} ({reviews ? reviews.length : 0} Reviews)
        </p>
      </div>
      <div className={css.location}>
        <svg className={css.icon} width="20" height="20">
          <use href={`${icons}#Map`} />
        </svg>
        <span>{location}</span>
      </div>
      <p className={css.price}>{`€ ${Number(price).toFixed(2)}`}</p>
    </div>
  );
}

CamperInfo.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
