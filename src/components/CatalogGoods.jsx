import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { selectGoods } from "../redux/goods/selectors";
import { useEffect, useState } from "react";
import { fetchAllGoods } from "../redux/goods/operations";
import { IoFilterSharp } from "react-icons/io5";

const CatalogGoods = () => {
  const [mobFilter, setMobFilter] = useState(false);
  const dispatch = useDispatch();
  const visibleGoods = useSelector(selectGoods);

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
    </>
  );
};

export default CatalogGoods;
