import { Link } from "react-router-dom";
import css from './Banner.module.css'

function Banner() {
  return (
    <section className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button type="button" className={css.button}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Banner;
