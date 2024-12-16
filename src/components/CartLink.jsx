import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartLink = () => {
  return (
    <div>
      <Link to="cart" className="text-3 text-2xl">
        <FaCartArrowDown />
      </Link>
    </div>
  );
};

export default CartLink;
