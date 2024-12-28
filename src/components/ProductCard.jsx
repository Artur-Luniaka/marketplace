const ProductCard = ({ goods }) => {
  return (
    <ul>
      {goods.map((item) => (
        <li key={item.id}>
          <img src={item.images[0]} alt="image of goods" />
          <h3>{item.title}</h3>
          <p>{item.rating} / 5</p>
          <p>{item.price} $</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductCard;
