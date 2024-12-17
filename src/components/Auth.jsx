import { Link } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import { CgLogIn } from "react-icons/cg";

const Auth = () => {
  return (
    <div className="flex xs:flex-col xs:gap-1 md:flex-row md:gap-3">
      <Link
        to="register"
        className="text-lg text-3 font-gambetta flex gap-1 place-items-center"
      >
        <TiUserAddOutline className="text-3" />
        Registration
      </Link>
      <Link
        to="login"
        className="text-lg text-3 font-gambetta flex gap-1 place-items-center"
      >
        <CgLogIn className="text-3" />
        Login
      </Link>
    </div>
  );
};

export default Auth;
