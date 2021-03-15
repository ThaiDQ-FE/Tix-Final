import React from "react";
import { withRouter } from "react-router-dom";

function MovieCart({ movie, history }) {
  const handleClick = () => {
    history.push(`/movie-detail/${movie.maPhim}`);
  };
  return (
    <div className="card text-left">
      <img className="card-img-top" src={movie.hinhAnh} alt="hinh anh" />
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">Body</p>
      </div>
      <div className="cart-footer">
        <button className="btn btn-info" onClick={handleClick}>
          Xem Chi Tiết
        </button>
      </div>
    </div>
  );
}
export default withRouter(MovieCart);
