// import { TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";
import Rating from "../components/ReactStars.jsx";

const ProductCard = ({ visibleGoods }) => {
  return (
    <ul className="flex gap-2 flex-col mb-2.5 md:flex-row md:flex-wrap md:gap-3 md:justify-center">
      {visibleGoods.map((item) => (
        <li
          key={item.id}
          className="bg-2 p-2.5 rounded-lg mx-auto md:w-[350px] md:mx-0 xl:w-[400px]"
        >
          <Link to={`/catalog/${item.id}`}>
            <img
              className="mx-auto mb-1 w-[272px] h-[272px] object-contain md:w-[334px] md:h-[334px] md:object-contain"
              src={item.images[0]}
              alt="image of goods"
            />
            <h3 className="font-merriweather text-2 max-w-[272px] xl:text-lg">
              {item.title}
            </h3>
            <span className="flex place-items-center gap-0.5">
              {/* <TiStar className="text-gray-500 text-lg" />
              <TiStar className="text-gray-500 text-lg" />
              <TiStar className="text-gray-500 text-lg" />
              <TiStar className="text-gray-500 text-lg" />
              <TiStar className="text-gray-500 text-lg" /> */}
              <Rating rating={item.rating} />
              <p className="text-2 font-merriweather">{item.rating} / 5</p>
            </span>
            <p className="text-2 font-bold font-merriweather">{item.price} $</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductCard;
