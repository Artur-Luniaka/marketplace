import { useDispatch, useSelector } from "react-redux";
import { fetchSingleGood } from "../redux/goods/operations";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectIsLoader, selectItem } from "../redux/goods/selectors";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const item = useSelector(selectItem);
  const loader = useSelector(selectIsLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchSingleGood(productId));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, productId]);
  return (
    !loader &&
    item && (
      <div>
        <h2 className="text-xl">{item.title}</h2>
        <img src={item.thumbnail} alt={item.description} />
        <p>{item.description}</p>
      </div>
    )
  );
};

export default ProductDetailsPage;
