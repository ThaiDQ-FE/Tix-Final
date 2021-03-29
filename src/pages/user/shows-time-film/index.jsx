import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ScheduleCart from "../../../components/schedule-cart";
import ScheduleDetail from "../../../components/schedule-detail";
import { getMovieSchedule } from "../../../store/actions/movie.action";
import "./styles.scss";
function ShowTimeFilm(props) {
  const dispatch = useDispatch();
  const { movieSchedule } = useSelector((state) => state.movie);
  const listHeThongRapChieu = movieSchedule.heThongRapChieu;
  const { cumRapChieu } = useSelector((state) => state.movie);
  //   const { vaiThiLonX } = useSelector((state) => state.movie);
  const x = useSelector((state) => state.movie);
  //   console.log(vaiThiLonX);
  useEffect(function () {
    const {
      params: { maPhim },
    } = props.match;
    console.log(props.match);
    dispatch(getMovieSchedule(maPhim));
  }, []);
  const renderListCinema = () => {
    if (Object.keys(movieSchedule).length > 0) {
      return listHeThongRapChieu.map((cinema, index) => {
        return <ScheduleCart key={index} cinema={cinema} />;
      });
    }
  };
  const test = () => {
    if (Object.keys(cumRapChieu).length > 0) {
      return cumRapChieu.map((cumRapChieu, index) => {
        console.log(cumRapChieu);
        return (
          <ScheduleDetail
            lichChieu={cumRapChieu.lichChieuPhim}
            tenCumRap={cumRapChieu.tenCumRap}
          />
        );
      });
    }
  };
  //   const test2 = () => {
  //     if (Object.keys(vaiThiLonX).length > 0) {
  //       return vaiThiLonX.map((a, index) => {
  //         console.log(a.ngayChieuGioChieu);
  //         return <></>;
  //       });
  //     }
  //   };
  return (
    <div className="show-time-wrapper">
      <div className="show-time-list">{renderListCinema()}</div>
      {test()}
    </div>
  );
}
export default withRouter(ShowTimeFilm);
