import { useDispatch, useSelector } from "react-redux";
import { fetchSingleGood } from "../redux/goods/operations";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectIsLoader, selectItem } from "../redux/goods/selectors";
import StarsRating from "../components/StarsRating";
import SwiperComponent from "../components/SwiperComponent";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const item = useSelector(selectItem);

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
          <div className="flex flex-col md:justify-between md:flex-row px-4">
            <div>
              <h2 className="text-3xl font-bold mb-1">{item.title}</h2>
              <p>Category: {item.category.toUpperCase()}</p>
            </div>
            <div className="flex flex-col md:items-end gap-1">
              <p className="flex gap-1 items-center">
                Tags:{" "}
                {item.tags.map((tag, index) => (
                  <span
                    className="bg-3 rounded-md p-1 text-3 text-sm"
                    key={index + 1}
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <p className="text-slate-400">Product code: {item.sku}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <div className="w-full md:w-1/2">
              <SwiperComponent imgArray={item.images} />
            </div>
            <div className="md:w-1/2 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="">{item.description}</p>
                <div className="flex gap-2">
                  <button className="flex justify-center rounded-md btn-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]">
                    Buy Now
                  </button>
                  <button className="flex justify-center rounded-md btn-1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]">
                    Add to Cart
                  </button>
                </div>
                <p className="">
                  Price:{" "}
                  <span className="font-bold text-xl">{item.price}$</span>
                </p>
                <p className="text-slate-400">
                  Sale: {item.discountPercentage}%
                </p>

                <div className="flex items-center">
                  <StarsRating rating={item.rating} />
                  <span>({item.rating} / 5)</span>
                </div>
                <p>
                  <span className="font-bold">Status:</span>{" "}
                  {item.availabilityStatus}
                </p>
              </div>
              <div className="">
                <h3 className="font-bold">Dimensions & Weight</h3>
                <p className="text-sm">
                  Dimensions: {item.dimensions.width} x {item.dimensions.height}{" "}
                  x {item.dimensions.depth} sm
                </p>
                <p className="text-sm">Weight: {item.weight} kg</p>
              </div>
              <div>
                <h3 className="font-bold">Other Information</h3>
                <p className="text-sm">
                  Warranty Information: {item.warrantyInformation}
                </p>
                <p className="text-sm">Return Policy: {item.returnPolicy}</p>
                <p className="text-sm">
                  Shipping Information: {item.shippingInformation}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-1 mb-2.5 font-merriweather">
          {item.reviews.map((review, index) => (
            <li key={index + 1} className="bg-2 rounded-lg p-2 px-4">
              <div className="flex gap-1 justify-between flex-wrap">
                <p className="font-bold">{review.reviewerName}</p>
                <StarsRating rating={review.rating} size={100} />
              </div>

              <p className="italic">{review.comment}</p>
              <div className="flex gap-1 justify-between flex-wrap text-slate-400 text-sm">
                <p className="">{formattedDate(review.date)}</p>
                <p className="">{review.reviewerEmail}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default ProductDetailsPage;
