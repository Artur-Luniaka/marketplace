import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/auth/selectors";
import Logo from "./Logo";
import Payments from "./Payments";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const isLogged = useSelector(selectIsLogged);
  return (
    <footer className="xs:items-center flex bg-3 p-3.5 flex-col justify-between rounded-lg text-3 text-sm gap-3">
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex flex-col flex-wrap w-full justify-between gap-2">
          <Logo />
          <p className="font-gambetta font-normal text-gray-400">
            Your ultimate destination for a diverse selection of products,
            crafted to suit every taste, style, and need!
          </p>
        </div>
        <div className="w-full flex justify-between flex-wrap gap-3">
          <SocialLinks />
          {isLogged && <Payments />}{" "}
        </div>
      </div>
      <p className="text-xs text-center text-gray-500 font-merriweather">
        I&A Market © 2024, All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
