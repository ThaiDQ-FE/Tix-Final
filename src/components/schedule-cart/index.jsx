import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";

function ScheduleCart({ cinema }) {
  const dispatch = useDispatch();
  const handleClickLogo = () => {
    // dispatch({
    //   type: "CINEMA_SYSTEM_CODE",
    //   payload: cinema.maHeThongRap,
    // });
    dispatch({
      type: "GET_MOVIE_THEATER",
      payload: cinema.cumRapChieu,
    });
  };
  useEffect(function () {
    dispatch({
      type: "GET_MOVIE_THEATER",
      payload: cinema.cumRapChieu,
    });
  }, []);
  return (
    <>
      <div className="schedule-cart-wrapper" onClick={handleClickLogo}>
        <img src={cinema.logo} alt="" />
        <p>{cinema.maHeThongRap}</p>
      </div>
    </>
  );
}
export default ScheduleCart;
