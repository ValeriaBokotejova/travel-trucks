import PropTypes from "prop-types";
import css from "./Gallery.module.css";

export default function Gallery({ images }) {
  if (!images || images.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <ul className={css.galleryList}>
      {images.map((item, index) => (
        <li key={index}>
          <img
            className={css.image}
            src={item.thumb}
            alt={`Gallery image ${index + 1}`}
          />
        </li>
      ))}
    </ul>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
    })
  ).isRequired,
};
