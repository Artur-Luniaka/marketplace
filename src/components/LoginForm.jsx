import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setIsLogged } from "../redux/auth/slice";

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
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(setIsLogged(true));
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
              className="block w-full rounded-md bg-white px-3 py-1.5 text-sm h-9 text-2 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#93c5fd]"
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
              <a href="#" className="font-semibold text-2 hover:text-[#000000]">
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
              className="block w-full rounded-md bg-white px-3 py-1.5 text-sm h-9 text-2 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#93c5fd]"
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
            className="flex w-full justify-center rounded-md btn-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]"
          >
            Sign in
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default LoginForm;
