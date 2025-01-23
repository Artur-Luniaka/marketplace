import { useDispatch } from "react-redux";
import { fetchAllGoods } from "../redux/goods/operations";

const CategoryList = ({ goodsList }) => {
  const dispatch = useDispatch();
  return (
    <ul className="flex flex-col mx-auto text-center gap-2">
      {goodsList.map((item) => (
        <li
          className="font-merriweather text-3 text-sm md:text-lg"
          key={item.name}
        >
          <a onClick={() => dispatch(fetchAllGoods(item.slug))}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
