import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import { fetchALLCategory } from "../redux/goods/operations";
import { selectGoodsList } from "../redux/goods/selectors";

const MobTabFilter = () => {
  const [isShow, setIsShow] = useState(false);
  const goodsList = useSelector(selectGoodsList);
  const dispatch = useDispatch();

  const handleCategoriesList = () => {
    if (isShow) return setIsShow(false);
    if (!isShow) return setIsShow(true);
  };

  useEffect(() => {
    dispatch(fetchALLCategory());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col absolute bg-3 z-10 h-auto w-full p-2.5 opacity-75 rounded-xl">
        <h2 className="font-gambetta text-xl text-3 mx-auto mt-2.5 md:text-3xl">
          Filters
        </h2>
        <h3 className="font-gambetta text-lg text-3 my-2 md:text-2xl">
          <button onClick={handleCategoriesList}>Categories</button>
        </h3>
        {isShow && <CategoryList goodsList={goodsList} />}
      </div>
    </>
  );
};

export default MobTabFilter;
