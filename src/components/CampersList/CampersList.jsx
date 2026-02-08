import PropTypes from "prop-types";
import css from "./CampersList.module.css";
import CamperDetails from "../CamperDetails/CamperDetails";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";

export default function CampersList({ list }) {
  const loading = useSelector(isLoading);

  if (loading && list.length === 0) {
    return <Loader />;
  }

  if (!loading && list.length === 0) {
    return <p className={css.text}>Sorry, there are no campers!</p>;
  }

  return (
    <>
      {loading && <Loader />}
      <ul className={css.list}>
        {list.map((item) => (
          <li className={css.item} key={item.id}>
            <CamperDetails camper={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

CampersList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
