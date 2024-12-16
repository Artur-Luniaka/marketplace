import Auth from "./Auth";
import CartLink from "./CartLink";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navigation = () => {
  return (
    <>
      <Logo />
      <Auth />
      {/* <span className="flex place-items-center gap-2.5">
        <CartLink />
        <UserMenu />
      </span> */}
    </>
  );
};

export default Navigation;
