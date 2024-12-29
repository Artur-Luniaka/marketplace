import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/auth/selectors";
import Auth from "./Auth";
import CartLink from "./CartLink";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navigation = () => {
  const isLogged = useSelector(selectIsLogged)
  return (
    <>
      <Logo />
      {isLogged ? 
      <span className="flex place-items-center gap-2.5">
        <CartLink />
        <UserMenu />
      </span> : <Auth />}
    </>
  );
};

export default Navigation;
