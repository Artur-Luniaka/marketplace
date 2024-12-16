import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link className="font-telma text-2xl text-3" to="/">
        I&A{" "}
        <span className="font-gambetta bg-1 text-1 rounded-xl p-0.5">
          Market
        </span>
      </Link>
    </div>
  );
};

export default Logo;
