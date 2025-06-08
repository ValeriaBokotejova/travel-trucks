import css from "./BookingForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import toast from "react-hot-toast";

registerLocale("en-GB", enGB);

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  comment: Yup.string(),
  date: Yup.date().required("Date is required"),
});
export default function BookingForm() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, { resetForm }) => {
          toast.success("You successfully send form!");
          resetForm();
        }}
      >
        {({ errors, values, touched, setFieldValue }) => (
          <Form>
            <div className={css.fieldsContainer}>
              <label htmlFor="name"></label>
              <Field
                className={css.inputField}
                name="name"
                type="text"
                placeholder="Name*"
              />
              {touched.name && errors.name ? (
                <div className={css.errorText}>{errors.name}</div>
              ) : null}
              <label htmlFor="email"></label>
              <Field
                className={css.inputField}
                name="email"
                type="email"
                placeholder="Email*"
              />
              {touched.email && errors.email ? (
                <div className={css.errorText}>{errors.email}</div>
              ) : null}
              <label htmlFor="date"></label>
              <DatePicker
                selected={values.date}
                onChange={(date) => setFieldValue("date", date)}
                className={css.inputField}
                placeholderText="Booking date*"
                locale="en-GB"
              />
              {touched.date && errors.date ? (
                <div className={css.errorText}>{errors.date}</div>
              ) : null}
              <label htmlFor="comment"></label>
              <Field
                className={css.commentArea}
                name="comment"
                as="textarea"
                placeholder="Comment"
              />
            </div>
            <button className={css.submitButton} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
