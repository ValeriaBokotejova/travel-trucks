import { useSelector } from "react-redux";
import BookingForm from "../BookingForm/BookingForm";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import css from "./DetailsFeatures.module.css";
import { getSelectedCamper } from "../../redux/campers/selectors";

const DetailsFeatures = () => {
  const camper = useSelector(getSelectedCamper);

  return (
    <div className={css.featureContainer}>
      <div className={css.featureWrapper}>
        <CamperFeatures camper={camper} />
        <h3 className={css.equipmentTitle}>Vehicle details</h3>

        <div className={css.camperInfo}>
          <div className={css.camperCategory}>
            <p>Form</p>
            <p>{camper.form}</p>
          </div>
          <div className={css.camperCategory}>
            <p>Length</p>
            <p>{camper.length}</p>
          </div>
          <div className={css.camperCategory}>
            <p>Width</p>
            <p>{camper.width}</p>
          </div>
          <div className={css.camperCategory}>
            <p>Height</p>
            <p>{camper.height}</p>
          </div>
          <div className={css.camperCategory}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </div>
          <div className={css.camperCategory}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </div>
        </div>
      </div>

      <BookingForm />
    </div>
  );
};

export default DetailsFeatures;
