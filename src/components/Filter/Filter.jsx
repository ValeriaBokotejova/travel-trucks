import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { getFiltersState } from "../../redux/filters/selectors";
import { updateFilters } from "../../redux/filters/slice";
import { getCampers } from "../../redux/campers/operations";

import css from "./Filter.module.css";
import icons from "../../assets/sprite.svg";

const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});

export default function FilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector(getFiltersState);

  return (
    <div className={css.filterWrapper}>
      <Formik
        enableReinitialize
        initialValues={{
          location: filters.location,
          form: filters.form,
          features: filters.features,
        }}
        validationSchema={LocationSchema}
        onSubmit={(values) => {
          dispatch(updateFilters(values));
          // features[] -> query params (AC=true, kitchen=true ...)
          const featuresParams = {};
          (values.features || []).forEach((f) => {
            featuresParams[f] = true;
          });

          dispatch(
            getCampers({
              page: 1,
              limit: 4,
              location: values.location || "",
              form: values.form || "",
              ...featuresParams,
              append: false,
            })
          );
        }}
      >
        {({ errors }) => (
          <Form>
            <div className={css.inputWrapper}>
              <label className={css.filterTitle} htmlFor="location">
                Location
              </label>
              <Field
                className={css.inputLocation}
                name="location"
                type="text"
                placeholder="City"
              />
              <svg className={css.icon} width="20" height="20">
                <use href={`${icons}#Map`} />
              </svg>
            </div>

            {errors.location ? (
              <div className={css.errorMessage}>{errors.location}</div>
            ) : null}

            <p className={css.filterTitle}>Filters</p>

            <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
            <div role="group" className={css.groupWrapper}>
              <label>
                <Field type="checkbox" name="features" value="AC" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#ac`} />
                  </svg>
                  AC
                </p>
              </label>

              <label>
                <Field type="checkbox" name="features" value="kitchen" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#cup-hot`} />
                  </svg>
                  Kitchen
                </p>
              </label>

              <label>
                <Field type="checkbox" name="features" value="TV" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#tv`} />
                  </svg>
                  TV
                </p>
              </label>

              <label>
                <Field type="checkbox" name="features" value="bathroom" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#water`} />
                  </svg>
                  Bathroom
                </p>
              </label>

            </div>

            <h3 className={css.equipmentTitle}>Vehicle type</h3>
            <div role="group" className={css.groupWrapper}>
              <label>
                <Field type="radio" name="form" value="panelTruck" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#van`} />
                  </svg>
                  Van
                </p>
              </label>

              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#full`} />
                  </svg>
                  Fully Integrated
                </p>
              </label>

              <label>
                <Field type="radio" name="form" value="alcove" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#alcove`} />
                  </svg>
                  Alcove
                </p>
              </label>
            </div>

            <button className={css.searchButton} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
