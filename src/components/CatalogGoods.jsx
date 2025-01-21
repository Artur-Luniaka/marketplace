import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { selectGoods } from "../redux/goods/selectors";
import { useEffect, useState } from "react";
import { fetchAllGoods } from "../redux/goods/operations";
import { IoFilterSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const CatalogGoods = () => {
  const [mobFilter, setMobFilter] = useState(false);
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const [firstItem, setFirstItem] = useState(0);
  const [lastItem, setLastItem] = useState(12);

  const visibleGoods = goods.slice(firstItem, lastItem);

  const handleNextGoods = () => {
    scrollTo({
      behavior: "smooth",
      top: "start",
    });
    setFirstItem(firstItem + 12);
    setLastItem(lastItem + 12);
  };

  const handlePreviousGoods = () => {
    scrollTo({
      behavior: "smooth",
      top: "start",
    });
    setFirstItem(firstItem - 12);
    setLastItem(lastItem - 12);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setMobFilter(true);
      } else {
        setMobFilter(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch]);

  return (
    <>
      <span className="flex items-center mb-2.5 p-2 md:px-3 xl:justify-center xl:p-0 xl:mb-3.5">
        <h1 className="text-1 font-gambetta text-3xl md:text-4xl xl:text-6xl">
          Catalog
        </h1>
        {mobFilter ? <IoFilterSharp className="text-1 ml-auto text-2xl" /> : ""}
      </span>
      <ProductCard visibleGoods={visibleGoods} />
      <span className="flex justify-between mb-2.5">
        <button
          disabled={firstItem === 0}
          onClick={handlePreviousGoods}
          type="button"
          className="disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-1 btn-2 font-merriweather rounded-lg p-1.5 text-2"
        >
          <MdKeyboardDoubleArrowLeft />
          Previous
        </button>
        <button
          onClick={handleNextGoods}
          type="button"
          className="flex items-center gap-1 btn-2 font-merriweather rounded-lg p-1.5 text-2"
        >
          Next
          <MdKeyboardDoubleArrowRight />
        </button>
      </span>
    </>
  );
};

export default CatalogGoods;
