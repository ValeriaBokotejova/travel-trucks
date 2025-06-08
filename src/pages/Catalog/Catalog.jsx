import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";
import Filter from "../../components/Filter/Filter";
import css from "./Catalog.module.css";
import { getFilteredCampers, isLoading } from "../../redux/campers/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilteredCampers);
  const loading = useSelector(isLoading);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filter]);

  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <section className={css.container}>
        <Filter />
        <CampersList list={filter.slice(0, visibleCount)} />
      </section>
      {!loading && visibleCount < filter.length && (
        <button className={css.button} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
