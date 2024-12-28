import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
/* eslint-disable no-useless-escape */
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
/* eslint-enable no-useless-escape */
const FeedbackSchema = Yup.object().shape({
  email: Yup.string().matches(re, "Invalid email format!").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long")
    .required("Required"),
});

const LoginForm = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <div className="flex min-h-full max-w-lg mx-auto flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-5 bg-2 text-2 rounded-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=400"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-2">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          validationSchema={FeedbackSchema}
          onSubmit={handleSubmit}
        >
          <Form className="">
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-2 hover:text-[#000000]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
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

            <div className="mt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md btn-2 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]"
              >
                Sign in
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <a href="#" className="font-semibold text-2 hover:text-[#000000]">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};
export default LoginForm;
