import React from "react";
import SwiperCore, { A11y, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import data from "./data.json";
import "./styles.scss";
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
function Carousel() {
  const renderCarousel = () => {
    return data.map((movie, index) => {
      return (
        <SwiperSlide key={index}>
          {/* <div
            className="test"
            style={{ backgroundImage: `url(${movie.hinhAnh})` }}
          ></div> */}

          {movie.trailer != null ? (
            <img
              src="https://i.ibb.co/QcZF5VY/play-video.png"
              alt="play-video"
              border="0"
            ></img>
          ) : null}
          <img className="carousel-images" src={movie.hinhAnh} alt="" />
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="carousel-wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // autoplay={({ delay: 1000 }, { disableOnInteraction: false })}
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {renderCarousel()}
      </Swiper>
    </div>
  );
}
export default Carousel;
