import PropTypes from "prop-types";
import icons from "../../assets/sprite.svg";
import css from "./CamperFeatures.module.css";

export default function CamperFeatures({ camper }) {
  const features = [
    { id: "transmission", name: "Automatic", svg: "diagram" },
    { id: "kitchen", name: "Kitchen", svg: "cup-hot" },
    { id: "radio", name: "Radio", svg: "radio" },
    { id: "gas", name: "Gas", svg: "fuel-pump" },
    { id: "AC", name: "AC", svg: "ac" },
    { id: "engine", name: "Hybrid", svg: "engine", value: "hybrid" },
    { id: "engine", name: "Diesel", svg: "engine", value: "diesel" },
    { id: "bathroom", name: "Bathroom", svg: "water" },
    { id: "TV", name: "TV", svg: "tv" },
    { id: "microwave", name: "Microwave", svg: "wave" },
    { id: "ref", name: "Frige", svg: "frige" },
    { id: "engine", name: "Petrol", svg: "engine", value: "petrol" },
  ];

  return (
    <div className={css.features}>
      {features.map((feature) => {
        const isFeatureAvailable =
          camper[feature.id] === true || camper[feature.id] === feature.value;
        return isFeatureAvailable ? (
          <div className={css.feature} key={feature.id}>
            <svg width="20" height="20">
              <use href={`${icons}#${feature.svg}`} />
            </svg>
            <span>{feature.name}</span>
          </div>
        ) : null;
      })}
    </div>
  );
}

CamperFeatures.propTypes = {
  camper: PropTypes.shape({
    transmission: PropTypes.bool,
    kitchen: PropTypes.bool,
    radio: PropTypes.bool,
    gas: PropTypes.bool,
    AC: PropTypes.bool,
    engine: PropTypes.oneOf(["hybrid", "diesel", "petrol"]),
    bathroom: PropTypes.bool,
    TV: PropTypes.bool,
    microwave: PropTypes.bool,
    ref: PropTypes.bool,
  }).isRequired,
};
