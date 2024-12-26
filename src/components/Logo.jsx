import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link className="font-telma text-2xl text-3 relative group" to="/">
        I&A{" "}
        <span className="font-gambetta bg-1 text-1 rounded-xl p-0.5 relative overflow-hidden">
          <span className="relative z-10">Market</span>
          <span className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 blur-sm animate-sweep"></span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
