import { RingLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <RingLoader color="red" size={80} aria-label="RingLoader" />
    </div>
  );
}
