import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import { getCampers } from "../../redux/campers/operations";
import {
  getCampersList,
  getHasMore,
  getPage,
  isLoading,
} from "../../redux/campers/selectors";
import { getFiltersParams } from "../../redux/filters/selectors";

import CampersList from "../../components/CampersList/CampersList";
import Filter from "../../components/Filter/Filter";

import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();

  const list = useSelector(getCampersList);
  const loading = useSelector(isLoading);
  const hasMore = useSelector(getHasMore);
  const page = useSelector(getPage);
  const filters = useSelector(getFiltersParams);

  useEffect(() => {
    dispatch(
      getCampers({
        page: 1,
        limit: 4,
        append: false,
      })
    );
  }, [dispatch]);

  const onLoadMore = () => {
    const nextPage = page + 1;

    const featuresParams = {};
    (filters.features || []).forEach((f) => {
      featuresParams[f] = true;
    });

    dispatch(
      getCampers({
        page: nextPage,
        limit: 4,
        location: filters.location || "",
        form: filters.form || "",
        ...featuresParams,
        append: true,
      })
    );
  };

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>

      <section className={css.container}>
        <Filter />
        <CampersList list={list} />
      </section>

      {!loading && hasMore && (
        <button
          className={css.button}
          type="button"
          onClick={onLoadMore}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
