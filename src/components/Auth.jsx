import { Link } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import { CgLogIn } from "react-icons/cg";

const Auth = () => {
  return (
    <div className="flex xxs:flex-col xxs:gap-2 xs:flex-row xs:gap-3">
      <Link
        to="register"
        className="text-2xl text-3 font-gambetta flex gap-1 place-items-center"
      >
        <TiUserAddOutline className="text-3" />
        Registration
      </Link>
      <Link
        to="login"
        className="text-2xl text-3 font-gambetta flex gap-1 place-items-center"
      >
        <CgLogIn className="text-3" />
        Login
      </Link>
    </div>
  );
};

export default Auth;
