import { FaCircleUser } from "react-icons/fa6";
import { PiUserCircleGearLight } from "react-icons/pi";
import { CgLogOut } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setIsLogged } from "../redux/auth/slice";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(setIsLogged(false));
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="text-3 p-1 text-2xl">
        <FaCircleUser />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <p className="font-merriweather">
            <PiUserCircleGearLight />
            User Info
          </p>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="font-merriweather"
            type="button"
          >
            <CgLogOut />
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
