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
      <h1>New Arrivals</h1>
      <ProductCard goods={goods} />
    </div>
  );
};

export default NewArrivals;
