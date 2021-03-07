import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getMovieList } from "../../../store/actions/movie.action";
class Home extends Component {
  renderMovieList = () => {
    return this.props.movieList.map((movie, index) => {
      return (
        <div className="col-4">
          <div className="card text-left">
            <img className="card-img-top" src={movie.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Body</p>
            </div>
            <div className="cart-footer">
              <button className="btn btn-info">Xem Chi Tiết</button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Danh Sách Phim</h2>
        <div className="container">
          <div className="row">{this.renderMovieList()}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      data: null,
    })
      .then((res) => {
        console.log(res.data);
        this.props.dispatch(getMovieList(res.data));
      })
      .catch((err) => {});
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps)(Home);
