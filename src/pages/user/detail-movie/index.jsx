import React, { Component } from "react";
import { getMovieDetail } from "../../../store/actions/movie.action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./styles.scss";

class DetailMovie extends Component {
  render() {
    return (
      <div>
        <h2 className="test">Detail Movie</h2>
        <img src={this.props.movieDetail.hinhAnh} />
      </div>
    );
  }
  componentDidMount() {
    const {
      params: { maPhim },
    } = this.props.match;
    this.props.dispatch(getMovieDetail(maPhim));
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
  };
};
export default connect(mapStateToProps)(withRouter(DetailMovie));
