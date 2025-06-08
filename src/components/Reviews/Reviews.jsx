import { useSelector } from "react-redux";
import BookingForm from "../BookingForm/BookingForm";
import css from "./Reviews.module.css";
import { getSelectedCamper } from "../../redux/campers/selectors";
import icons from "../../assets/sprite.svg";
import { nanoid } from "nanoid";

const Reviews = () => {
  const camper = useSelector(getSelectedCamper);
  const totalStars = 5;
  return (
    <div className={css.review}>
      <ul className={css.list}>
        {camper.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          camper.reviews.map((item) => (
            <li className={css.list_tem} key={nanoid()}>
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
                      fill={
                        starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"
                      }
                      key={nanoid()}
                    >
                      <use href={`${icons}#icon-Rating-1`} />
                    </svg>
                  ))}
                </div>
              </div>
              <p className={css.comment}>{item.comment}</p>
            </li>
          ))
        )}
      </ul>
      <BookingForm />
    </div>
  );
};

export default Reviews;
