import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const StarsRating = ({ rating = 0, size = 180, onChange }) => {
  const styles = {
    itemShapes: Star,
    itemStrokeWidth: 1,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
    activeStrokeColor: "#ffb700",
    inactiveStrokeColor: "#ffb700",
  };
  if (onChange) {
    rating = Math.ceil(rating);
    return (
      <Rating
        value={rating}
        onChange={onChange}
        style={{ maxWidth: size }}
        itemStyles={styles}
      />
    );
  }
  return (
    <Rating
      value={rating}
      style={{ maxWidth: size }}
      itemStyles={styles}
      readOnly
    />
  );
};

export default StarsRating;
