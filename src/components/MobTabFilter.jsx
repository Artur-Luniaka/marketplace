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
      <div className="flex flex-col absolute bg-2 z-10 h-full w-full p-2.5 opacity-85">
        <h2 className="font-gambetta text-xl text-2 mx-auto mt-2.5">Filters</h2>
        <h3 className="font-gambetta text-lg text-2 my-2">
          <button onClick={handleCategoriesList}>Categories</button>
        </h3>
        {isShow && <CategoryList goodsList={goodsList} />}
      </div>
    </>
  );
};

export default MobTabFilter;
