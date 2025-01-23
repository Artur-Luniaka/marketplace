import ReactStars from "react-stars";

const Rating = ({ rating, size = 24, edit = false }) => {
  return (
    <div>
      <ReactStars
        count={5}
        value={rating}
        size={size}
        activeColor="#ffd700"
        isHalf={true}
        edit={edit}
      />
    </div>
  );
};

export default Rating;
