import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "../../../components/carousel";
import Footer from "../../../components/footer";
import NewIn from "../../../components/new-in";
import "./styles.scss";
const Background = "https://i.ibb.co/5rQSh8d/back-news.png";
class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <div className="home-newin">
          <NewIn />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(Home);
