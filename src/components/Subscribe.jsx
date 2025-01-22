import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

/* eslint-disable no-useless-escape */
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
/* eslint-enable no-useless-escape */
const FeedbackSchema = Yup.object().shape({
  email: Yup.string().matches(re, "Invalid email format!").required("Required"),
});

const Subscribe = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <div className="font-merriweather flex justify-center mb-2.5 xs:flex-col md:flex-row md:items-center xs:gap-4 md:gap-10 p-6 bg-2 text-2 rounded-lg box-border flex-wrap relative overflow-hidden">
      <h2 className="text-3xl xl:text-4xl font-semibold font-merriweather text-center drop-shadow-lg md:w-80 xl:w-auto">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <div>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={FeedbackSchema}
          onSubmit={handleSubmit}
        >
          <Form className="xs:w-full md:w-64 xl:w-80">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-2"
              >
                Email address
              </label>
              <div className="mt-2">
                <Field
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  className="block w-full text-sm rounded-md bg-white px-3 py-1.5  text-2 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#93c5fd]"
                />
              </div>
              <div className="min-h-5">
                <ErrorMessage
                  name="email"
                  component="span"
                  className="block text-xs/5 font-medium text-red-500"
                />
              </div>
            </div>{" "}
            <div className="mt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md btn-3 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Subscribe;
