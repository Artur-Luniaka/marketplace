import { useEffect, useState } from "react";
import { selectGoodsList } from "../redux/goods/selectors";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { fetchALLCategory } from "../redux/goods/operations";

const WebFilter = () => {
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
    <aside className="bg-3 min-w-[230px] mb-auto mr-auto opacity-80 rounded-xl p-3">
      <div className="flex flex-col">
        <h2 className="font-gambetta text-3 mx-auto text-2xl mb-2.5">
          Filters
        </h2>
        <h3 className="font-gambetta text-3 text-xl mb-2">
          <button onClick={handleCategoriesList} type="button">
            Categories
          </button>
        </h3>
        {isShow && <CategoryList goodsList={goodsList} />}
      </div>
    </aside>
  );
};

export default WebFilter;
