const Payments = () => {
  return (
    <ul className="flex gap-1 ">
      <li className="bg-1 rounded-lg flex justify-center items-center p-0.5 transform transition-transform duration-300 hover:scale-105">
        <a href="">
          <svg width="40" height="30">
            <use xlinkHref="/payments.svg#icon-visa" />
          </svg>
        </a>
      </li>
      <li className="bg-1 rounded-lg flex justify-center items-center p-0.5 transform transition-transform duration-300 hover:scale-105">
        <a href="">
          {" "}
          <svg width="40" height="30">
            <use xlinkHref="/payments.svg#icon-mastercard" />
          </svg>
        </a>
      </li>
      <li className="bg-1 rounded-lg flex justify-center items-center p-0.5 transform transition-transform duration-300 hover:scale-105">
        <a href="">
          {" "}
          <svg width="40" height="30">
            <use xlinkHref="/payments.svg#icon-paypal" />
          </svg>
        </a>
      </li>
      <li className="bg-1 rounded-lg flex justify-center items-center p-0.5 transform transition-transform duration-300 hover:scale-105">
        <a href="">
          {" "}
          <svg width="40" height="30">
            <use xlinkHref="/payments.svg#icon-apay" />
          </svg>
        </a>
      </li>
      <li className="bg-1 rounded-lg flex justify-center items-center p-0.5 transform transition-transform duration-300 hover:scale-105">
        <a href="">
          {" "}
          <svg width="40" height="30">
            <use xlinkHref="/payments.svg#icon-gpay" />
          </svg>
        </a>
      </li>
    </ul>
  );
};
export default Payments;
