import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";
function MovieCart({ movie, history }) {
  const handleClick = () => {
    history.push(`/movie-detail/${movie.maPhim}`);
  };
  return (
    <div className="card-movie">
      <div className="film">
        <div className="film-warpper" onClick={handleClick}>
          <div
            className="film-thumbnail"
            style={{ backgroundImage: `url(${movie.hinhAnh})` }}
          ></div>
          <div className="film-info">
            <span>{movie.tenPhim}</span>
            <a href="#" className="film-link">
              <img src="https://i.ibb.co/J3M5w4M/ticket.png" alt="ticket" />
              &emsp;Mua Vé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(MovieCart);
