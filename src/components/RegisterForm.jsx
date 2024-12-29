import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPwd: "",
};
/* eslint-disable no-useless-escape */
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
/* eslint-enable no-useless-escape */
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().matches(re, "Invalid email format!").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long")
    .required("Required"),
  confirmPwd: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long")
    .required("Required"),
});

const RegisterForm = () => {
  const handleSubmit = (values, action) => {
    delete values.confirmPwd;
    console.log(values);

    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className="">
        <div>
          <label htmlFor="name" className="block text-sm/6 font-medium text-2">
            Your name
          </label>
          <div className="mt-2">
            <Field
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-2 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#93c5fd] sm:text-sm/6"
            />
          </div>
          <div className="min-h-5">
            <ErrorMessage
              name="name"
              component="span"
              className="block text-xs/5 font-medium text-red-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-2">
            Email address
          </label>
          <div className="mt-2">
            <Field
              id="email"
              name="email"
              type="text"
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-2 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#93c5fd] sm:text-sm/6"
            />
          </div>
          <div className="min-h-5">
            <ErrorMessage
              name="email"
              component="span"
              className="block text-xs/5 font-medium text-red-500"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-2"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <Field
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-2 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#93c5fd] sm:text-sm/6"
            />
          </div>
          <div className="min-h-5">
            <ErrorMessage
              name="password"
              component="span"
              className="block text-xs/5 font-medium text-red-500"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="confirmPwd"
              className="block text-sm/6 font-medium text-2"
            >
              Confirm password
            </label>
          </div>
          <div className="mt-2">
            <Field
              id="confirmPwd"
              name="confirmPwd"
              type="password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-2 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#93c5fd] sm:text-sm/6"
            />
          </div>
          <div className="min-h-5">
            <ErrorMessage
              name="confirmPwd"
              component="span"
              className="block text-xs/5 font-medium text-red-500"
            />
          </div>
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md btn-2 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]"
          >
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
