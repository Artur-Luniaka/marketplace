import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BannerGo = () => {
  const navigate = useNavigate();
  const goToCatalog = () => {
    navigate("/catalog");
    scrollTo({
      behavior: "smooth",
      top: "start",
    });
  };
  return (
    <div className="bg-2 p-2.5 mb-2.5 rounded-lg md:p-3">
      <h2 className="sr-only">Banner Go to Catalog</h2>
      <div className="mb-3 flex flex-col gap-2 md:mb-4">
        <p className="text-2 text-3xl font-semibold font-merriweather md:text-4xl">
          Looking for more Goods?
        </p>
        <p className="text-2 text-3xl font-semibold font-merriweather md:text-4xl">
          Just push the button and open our Catalog.
        </p>
      </div>
      <button
        onClick={goToCatalog}
        className="flex justify-center items-center gap-2 ml-auto font-merriweather btn-3 p-2 rounded-lg md:p-3"
        type="button"
      >
        Go to
        <FaArrowUpRightFromSquare />
      </button>
    </div>
  );
};

export default BannerGo;
