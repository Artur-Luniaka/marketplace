import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../redux/goods/operations";
import { selectGoods } from "../redux/goods/selectors";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-1 font-gambetta text-4xl text-center mb-2.5 md:text-5xl xl:text-6xl">
        New Arrivals
      </h1>
      <ProductCard goods={goods} />
    </div>
  );
};

export default NewArrivals;
