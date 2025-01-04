import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/auth/selectors";
import Auth from "./Auth";
import CartLink from "./CartLink";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navigation = () => {
  const isLogged = useSelector(selectIsLogged);
  return (
    <header className="xs:items-center bg-3 p-3.5 flex justify-between rounded-lg mb-2.5">
      <Logo />
      {isLogged ? (
        <span className="flex place-items-center gap-2.5">
          <CartLink />
          <UserMenu />
        </span>
      ) : (
        <Auth />
      )}
    </header>
  );
};

export default Navigation;
