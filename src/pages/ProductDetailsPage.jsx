import { useDispatch, useSelector } from "react-redux";
import { fetchSingleGood } from "../redux/goods/operations";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectIsLoader, selectItem } from "../redux/goods/selectors";
import Rating from "../components/ReactStars";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const item = useSelector(selectItem);
  console.log(item);

  const formattedDate = (rawDate) =>
    new Date(rawDate).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

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
      <>
        <div className="bg-2 rounded-lg p-2 mb-1 font-merriweather">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-slate-400">Product code: {item.sku}</p>
          <p>Category: {item.category.toUpperCase()}</p>
          <p className="flex gap-1 items-center">
            Tags:{" "}
            {item.tags.map((tag, index) => (
              <span className="bg-3 rounded-md p-1 text-3" key={index + 1}>
                {tag}
              </span>
            ))}
          </p>

          <img
            src={item.images[0]}
            alt={item.description}
            width={"600"}
            height={"600"}
            className=""
          />
          <div className="flex">
            {item.images.slice(1).map((img, index) => (
              <img
                src={img}
                alt={`Product image ${index + 2}`}
                key={index}
                width={"200"}
                height={"200"}
              />
            ))}
          </div>
          <div className="mb-1">
            <p className="mb-2">{item.description}</p>
            <button className="flex justify-center rounded-md btn-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]">
              Buy Now
            </button>
            <p>
              Price: <span className="font-bold">{item.price}$</span>
            </p>
            <p>Sale: {item.discountPercentage}%</p>
            <p>
              <Rating rating={item.rating} size="35" edit={true} />
            </p>
            <p>Status: {item.availabilityStatus}</p>
          </div>
          <div className="mb-1">
            <h3 className="font-bold">Dimensions & Weight</h3>
            <p>
              Dimensions: {item.dimensions.width} x {item.dimensions.height} x{" "}
              {item.dimensions.depth} sm
            </p>
            <p>Weight: {item.weight} kg</p>
          </div>
          <div>
            <h3 className="font-bold">Other Information</h3>
            <p>Warranty Information: {item.warrantyInformation}</p>
            <p>Return Policy: {item.returnPolicy}</p>
            <p>Shipping Information: {item.shippingInformation}</p>
          </div>
        </div>
        <ul className="flex flex-col gap-1 mb-2.5 font-merriweather">
          {item.reviews.map((review, index) => (
            <li key={index + 1} className="bg-2 rounded-lg p-2">
              <p className="font-bold">{review.reviewerName}</p>
              <p>
                <Rating rating={review.rating} />
              </p>
              <p className="italic">{review.comment}</p>
              <p className="text-sm">{formattedDate(review.date)}</p>
              <p className="text-slate-400">{review.reviewerEmail}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default ProductDetailsPage;
