import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { getFilteredItems } from "../../redux/filters/selectors";
import { updateFilters } from "../../redux/filters/slice";

import css from "./Filter.module.css";
import icons from "../../assets/sprite.svg";

const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});

export default function FilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector(getFilteredItems);

  return (
    <div className={css.filterWrapper}>
      <Formik
        initialValues={{
          location: filters.location,
          form: filters.form,
          features: filters.features,
        }}
        validationSchema={LocationSchema}
        onSubmit={(values) => {
          dispatch(updateFilters(values));
        }}
      >
        {({ errors, touched }) => (
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
            <div
              role="group"
              aria-labelledby="features-group"
              className={css.groupWrapper}
            >
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
                <Field type="checkbox" name="features" value="automatic" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#diagram`} />
                  </svg>
                  Automatic
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
            <div
              role="group"
              aria-labelledby="form-group"
              className={css.groupWrapper}
            >
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
            {errors.bodyType && touched.bodyType ? (
              <div className={css.error}>{errors.bodyType}</div>
            ) : null}

            <button className={css.searchButton} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
