import React, { useEffect } from "react";
import dateFormat from "date-format";
import "./styles.scss";
import Test from "../test";
function ScheduleDetail({ lichChieu, tenCumRap }) {
  const removeDup = (data) => {
    return data.filter((value, index) => data.indexOf(value) === index);
  };
  let init = "2019-01-01T10:10:00";
  let init2 = "2019-01-01T10:10:00";
  let a = [];
  let count = 0;
  let n = 0;
  let pos = 1;
  let abc = document.getElementsByClassName("x");
  let xyz = document.getElementsByClassName("z");
  const schedule = document.getElementById("chedule-item");
  const ohMen = (id) => {
    return document.getElementById("x" + id);
  };
  const test = () => {
    for (let i = 0; i < abc.length; i++) {
      console.log(abc.length);
      const element = abc[i].textContent;
      let elements = abc[i];
      let elementss = abc[i - 1];
      console.log(abc[i - 1]);
      if (abc.length > 1) {
        if (element.includes(init.substring(0, 10))) {
          elements.style.display = "inline-block";
        } else {
          // element.substring(0, 10);
          // elementss.style.display = "inline";
          elements.style.display = "inline-block";
          init = element;
        }
      }
    }
  };
  const test2 = () => {
    for (let i = 0; i < xyz.length; i++) {
      const element = xyz[i].textContent;
      let elements = xyz[i];
      let elementss = xyz[i - 1];
      let elementtsss = xyz[i + 1];
      if (abc.length > 1) {
        if (element.includes(init2.substring(0, 10))) {
          if (i === 0) {
            elements.style.display = "block";
          } else {
            elements.style.display = "none";
          }
        } else {
          // element.substring(0, 10);
          elements.style.display = "block";
          init2 = element;
        }
      }
    }
  };
  const render = () => {
    return lichChieu.map((list, index) => {
      let day = list.ngayChieuGioChieu.substring(0, 10);
      let time = list.ngayChieuGioChieu.substring(10);
      return (
        <div className="x" id={"x" + count++} style={{ padding: "10px" }}>
          <span style={{ display: "none" }}>{day}</span>
          <span>{time}</span>
          <p></p>
        </div>
      );
    });
  };
  const renderx = () => {
    return lichChieu.map((list, index) => {
      let day = list.ngayChieuGioChieu.substring(0, 10);
      let time = list.ngayChieuGioChieu.substring(10);
      return (
        <div className="z" id={"z" + count++} style={{ padding: "10px" }}>
          <span>{day}</span>
          <p></p>
        </div>
      );
    });
  };
  const finalRender = () => {
    {
      setTimeout(() => {
        test();
        test2();
      }, 1);
    }
  };
  return (
    <div className="schedule-detail-wrapper">
      <p>{tenCumRap}</p>

      <div className="chedule-items" id="chedule-items">
        {renderx()}
      </div>
      <div className="chedule-item" id="chedule-item">
        {render()}
      </div>
      {finalRender()}
    </div>
  );
}
export default ScheduleDetail;
