import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination, Thumbs, Zoom } from "swiper/modules";

const SwiperComponent = ({ imgArray }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Zoom, Navigation, Thumbs, Pagination]}
        zoom={true}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        {imgArray.map((img, index) => (
          <SwiperSlide key={index + 1}>
            <div className="swiper-zoom-container">
              <img src={img} className="object-contain w-full xl:h-96 pb-2" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-sm text-center text-sky-300">
        You can to use Double-click for Zoom!
      </p>
      {imgArray.length > 2 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imgArray.map((img, index) => (
            <SwiperSlide key={index + 1}>
              <img src={img} className="h-24 object-contain w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SwiperComponent;
