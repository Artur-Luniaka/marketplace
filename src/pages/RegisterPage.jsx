import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="font-merriweather flex max-w-lg mx-auto w-full flex-col justify-center p-6 lg:px-8 bg-2 text-2 rounded-lg mb-2.5">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="/marketplace.svg"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-2">
          Register your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />{" "}
      </div>
    </div>
  );
};

export default RegisterPage;
