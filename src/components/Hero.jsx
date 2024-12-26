import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { GiLetterBomb } from "react-icons/gi";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/bg-version-3.webp')] h-[600px] bg-cover bg-center rounded-lg">
        <div className="flex h-full bg-black bg-opacity-20 rounded-lg p-2.5">
          <div className="flex order-1 items-center ml-auto md:mr-2 xl:mr-10">
            <h1 className="text-3 text-2xl text-center font-gambetta max-w-[300px] md:text-5xl xl:text-6xl xl:max-w-[400px]">
              Transforming Your Shopping Experience.
            </h1>
          </div>
          <div className="flex flex-shrink-1 items-end">
            {/* <p className="text-3 text-[10px] font-merriweather max-w-[250px]">
              <span className="text-red-600">*</span> Please, pass the
              Registrationor Login to continue
            </p> */}
            <span className="flex flex-col md:gap-5 md:my-auto xl:ml-8">
              <button className="btn-2 p-1 rounded-lg font-merriweather flex justify-center items-center text-[12px] md:p-2 md:text-[16px] md:gap-1.5 xl:p-3 xl:text-[18px]">
                Collect Cart
                <MdOutlineShoppingCartCheckout className="text-[16px] md:text-[18px] xl:text-[20px]" />
              </button>
              <p className="text-center text-3 font-merriweather text-[14px] md:text-[18px] xl:text-[20px]">
                or
              </p>
              <button className="btn-2 p-1 rounded-lg font-merriweather flex justify-center items-center text-[12px] gap-0.5 md:p-2 md:text-[16px] md:gap-1.5 xl:p-3 xl:text-[18px]">
                Subscribe
                <GiLetterBomb className="text-[16px] md:text-[18px] xl:text-[20px]" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
