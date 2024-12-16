import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex gap-2.5">
      <Link to="register" className="text-2xl text-3 font-gambetta">
        Registration
      </Link>
      <Link to="login" className="text-2xl text-3 font-gambetta">
        Login
      </Link>
    </div>
  );
};

export default Auth;
