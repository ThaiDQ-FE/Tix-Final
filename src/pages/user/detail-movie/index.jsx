import React, { Component } from "react";
import { getMovieDetail } from "../../../store/actions/movie.action";
import { connect } from "react-redux";
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
    this.props.dispatch(getMovieDetail());
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
  };
};
export default connect(mapStateToProps)(DetailMovie);
