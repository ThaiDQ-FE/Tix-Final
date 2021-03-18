import React, { useState } from "react";
import SwiperCore, { A11y, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import data from "./data.json";
import "./styles.scss";
import ModalTrailer from "../modal-trailer";
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

function Carousel() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [detailTrailer, setdetailTrailer] = useState("");
  const handleOpen = (trailer) => {
    setOpen(true);
    setShow(true);
    setdetailTrailer(trailer);
  };
  const handleClose = () => {
    setOpen(false);
    setShow(false);
  };
  const handleTrailer = () => {};
  const renderCarousel = () => {
    return data.map((movie, index) => {
      return (
        <SwiperSlide key={index}>
          {movie.trailer != null ? (
            <img
              src="https://i.ibb.co/QcZF5VY/play-video.png"
              alt="play-video"
              border="0"
              className="carousel-play"
              onClick={() => handleOpen(movie.trailer)}
            ></img>
          ) : null}
          <img className="carousel-images" src={movie.hinhAnh} alt="hinh anh" />
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="carousel-wrapper">
      <Swiper
        slidesPerView={1}
        navigation
        autoplay={({ delay: 1000 }, { disableOnInteraction: false })}
        pagination={{ clickable: true }}
        loop={true}
      >
        {renderCarousel()}
      </Swiper>
      <ModalTrailer open={open} close={handleClose} trailer={detailTrailer} />
      <div className="carousel-img">
        <img src="https://i.ibb.co/wJbKdnq/scroll-down.png" alt="scroll-down" />
      </div>
    </div>
  );
}
export default Carousel;
