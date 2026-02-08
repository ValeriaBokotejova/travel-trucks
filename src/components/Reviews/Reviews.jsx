import { useSelector } from "react-redux";
import BookingForm from "../BookingForm/BookingForm";
import css from "./Reviews.module.css";
import { getSelectedCamper } from "../../redux/campers/selectors";
import icons from "../../assets/sprite.svg";

const Reviews = () => {
  const camper = useSelector(getSelectedCamper);
  const totalStars = 5;

  if (!camper || !camper.reviews) {
    return (
      <div className={css.review}>
        <p>Loading reviews...</p>
        <BookingForm />
      </div>
    );
  }

  return (
    <div className={css.review}>
      {camper.reviews.length === 0 ? (
        <p>Sorry, there are no reviews yet.</p>
      ) : (
        <ul className={css.list}>
          {camper.reviews.map((item, index) => (
            <li className={css.list_item} key={index}>
              <div className={css.reviewer_wrapper}>
                <div className={css.reviewer_name}>
                  {item.reviewer_name.charAt(0)}
                </div>

                <div>
                  <h3>{item.reviewer_name}</h3>

                  {[...Array(totalStars)].map((_, starIndex) => (
                    <svg
                      width="16"
                      height="16"
                      key={starIndex}
                      fill={
                        starIndex < item.reviewer_rating
                          ? "#ffc531"
                          : "#f2f4f7"
                      }
                    >
                      <use href={`${icons}#icon-Rating-1`} />
                    </svg>
                  ))}
                </div>
              </div>

              <p className={css.comment}>{item.comment}</p>
            </li>
          ))}
        </ul>
      )}
      <BookingForm />
    </div>
  );
};

export default Reviews;
