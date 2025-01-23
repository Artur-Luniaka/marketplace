const CategoryList = ({ goodsList }) => {
  return (
    <ul className="flex flex-col mx-auto text-center gap-2">
      {goodsList.map((item) => (
        <li className="font-merriweather text-2 text-sm" key={item.id}>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
