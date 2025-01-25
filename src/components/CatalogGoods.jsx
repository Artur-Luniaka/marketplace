import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {
  selectFirstItem,
  selectGoods,
  selectLastItem,
  selectShowFilter,
} from "../redux/goods/selectors";
import { useEffect, useState } from "react";
import { fetchAllGoods } from "../redux/goods/operations";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import MobTabFilter from "./MobTabFilter";
import {
  closeFilter,
  nextGoods,
  openFilter,
  previousGoods,
} from "../redux/goods/slice";

const CatalogGoods = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const [mobFilter, setMobFilter] = useState(false);
  const showFilter = useSelector(selectShowFilter);
  const [isDisabled, setIsDisabled] = useState(false);
  const firstItem = useSelector(selectFirstItem);
  const lastItem = useSelector(selectLastItem);

  const visibleGoods = goods.slice(firstItem, lastItem);

  const handleShowsFilter = () => {
    if (!showFilter) return dispatch(openFilter());
    if (showFilter) return dispatch(closeFilter());
  };

  const handleNextGoods = () => {
    dispatch(nextGoods());
  };

  const handlePreviousGoods = () => {
    dispatch(previousGoods());
  };

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [firstItem, lastItem, goods.length, visibleGoods.length]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setMobFilter(true);
        dispatch(closeFilter());
      } else {
        setMobFilter(false);
        dispatch(closeFilter());
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch]);

  useEffect(() => {
    const handleDisabledBtn = () => {
      if (goods.length > lastItem) return setIsDisabled(false);
      if (goods.length <= lastItem) return setIsDisabled(true);
    };
    handleDisabledBtn();
  }, [goods.length, lastItem]);

  return (
    <div className="relative order-1">
      <span className="flex justify-between items-center mb-2.5 p-2 md:px-3 xl:justify-center xl:p-0 xl:mb-3.5">
        <h1 className="text-1 font-gambetta text-3xl md:text-4xl xl:text-6xl">
          Catalog
        </h1>
        {mobFilter ? (
          <button onClick={handleShowsFilter}>
            <IoFilterSharp className="text-1 ml-auto text-2xl" />
          </button>
        ) : (
          ""
        )}
      </span>
      {showFilter && <MobTabFilter />}
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
          disabled={isDisabled}
          onClick={handleNextGoods}
          type="button"
          className="disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-1 btn-2 font-merriweather rounded-lg p-1.5 text-2"
        >
          Next
          <MdKeyboardDoubleArrowRight />
        </button>
      </span>
    </div>
  );
};

export default CatalogGoods;
