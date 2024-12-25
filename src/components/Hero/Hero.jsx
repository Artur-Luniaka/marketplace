import s from "./Hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={s.back_img}>
        <p className="text-3 font-merriweather text-xs xs:mt-auto xs:text-center">
          <span className="text-red-700">*</span>Please, pass the Registration
          or Login to continue
        </p>
        <h1 className="md:max-w-[321px] md:text-5xl text-3 xl:text-6xl font-gambetta flex items-center ml-auto xl:max-w-lg text-center break-words1 xs:text-lg">
          Transforming Your Shopping Experience.
        </h1>
      </div>
    </>
  );
};

export default Hero;
