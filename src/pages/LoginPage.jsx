import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex max-w-lg mx-auto flex-col justify-center p-6 lg:px-8 bg-2 text-2 rounded-lg w-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="/marketplace.svg"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-2">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
        <p className="mt-6 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <a href="#" className="font-semibold text-2 hover:text-[#000000]">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
