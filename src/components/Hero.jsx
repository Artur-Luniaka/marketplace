const Hero = () => {
  return (
    <>
      <div className="bg-[url('/bg-version-3.webp')] h-[600px] bg-cover bg-center rounded-lg">
        <div className="flex h-full bg-black bg-opacity-20 rounded-lg p-2.5">
          <div className="flex order-1 items-center md:ml-auto">
            <h1 className="text-3 text-2xl text-center font-gambetta max-w-[300px] md:text-5xl">
              Transforming Your Shopping Experience.
            </h1>
          </div>
          <div className="flex flex-shrink-1 items-end">
            <p className="text-3 text-[10px] font-merriweather max-w-[250px]">
              <span className="text-red-600">*</span> Please, pass the
              Registrationor Login to continue
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
