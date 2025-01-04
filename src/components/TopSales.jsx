import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../redux/goods/operations";
import { selectGoods } from "../redux/goods/selectors";
import ProductCard from "./ProductCard";

const TopSales = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleMoreTopSales = () => {
    setVisibleCount(visibleCount + 3);
  };

  const visibleGoods = goods.slice(0, visibleCount);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <div className="mb-2.5">
      <h1 className="text-1 font-gambetta text-4xl text-center mb-2.5 md:text-5xl xl:text-6xl">
        Top Sales
      </h1>
      <ProductCard visibleGoods={visibleGoods} />
      {visibleCount < goods.length && (
        <button
          className="flex btn-2 text-2 font-merriweather p-2 rounded-lg mx-auto md:p-2.5 md:text-md xl:p-3"
          onClick={handleMoreTopSales}
          type="button"
        >
          {" "}
          Load More
        </button>
      )}
    </div>
  );
};

export default TopSales;
