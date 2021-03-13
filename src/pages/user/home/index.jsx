import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "../../../components/carousel";
import MovieCart from "../../../components/movie-cart";
import { getMovieList } from "../../../store/actions/movie.action";
class Home extends Component {
  renderMovieList = () => {
    return this.props.movieList.map((movie, index) => {
      return (
        <div className="col-4" key={index}>
          <MovieCart movie={movie} />
        </div>
      );
    });
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <Carousel />
          {/* <h2>Danh Sách Phim</h2>
          <div className="container">
            <div className="row">{this.renderMovieList()}</div>
          </div> */}
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.dispatch(getMovieList());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(Home);
