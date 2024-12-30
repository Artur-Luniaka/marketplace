import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods, fetchMoreGoods } from "../redux/goods/operations";
import { selectGoods, selectSkip } from "../redux/goods/selectors";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const currentSkip = useSelector(selectSkip);
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  const handleMoreGoods = () => {
    dispatch(fetchMoreGoods(currentSkip));
  };
  return (
    <div>
      <h1 className="text-1 font-gambetta text-4xl text-center mb-2.5 md:text-5xl xl:text-6xl">
        New Arrivals
      </h1>
      <ProductCard goods={goods} />
      <button onClick={handleMoreGoods} type="button">
        Load More
      </button>
    </div>
  );
};

export default NewArrivals;
