import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, getMovieList } from "../../store/actions/movie.action";
import MovieCart from "../../components/movie-cart/index";
import SwiperCore, { A11y, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./styles.scss";
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        textTransform: "",
        fontSize: 20,
        fontWeight: "bold",
        transition: "all .2s",
        "&:hover": {
          fontSize: 24,
        },
      },
    },
    MuiPaper: {
      root: {
        display: "flex",
        alignItems: "center",
      },
      elevation4: {
        boxShadow: "unset !important",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "unset",
        color: "#fff",
      },
    },
    MuiButtonBase: {
      root: {
        marginLeft: 10,
        marginRight: 10,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "transparent",
      },
    },
    MuiTouchRipple: {
      root: {
        display: "none  ",
      },
    },
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function NewIn() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movie);
  const [value, setValue] = React.useState(0);
  useEffect(function () {
    dispatch(getMovieList());
  }, []);
  const renderListMovieNew = () => {
    return movieList.map((movie, index) => {
      const movieNew = movie.ngayKhoiChieu;
      if (movieNew.includes(new Date().getFullYear())) {
        return (
          <SwiperSlide key={index}>
            <MovieCart movie={movie} />
          </SwiperSlide>
        );
      }
    });
  };
  const renderListMovie = () => {
    return movieList.map((movie, index) => {
      const movieOld = movie.ngayKhoiChieu;
      if (movieOld.includes(new Date().getFullYear() - 1)) {
        return (
          <SwiperSlide key={index}>
            <MovieCart movie={movie} />
          </SwiperSlide>
        );
      }
    });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="newIn-wrapper" id="newIn-wrapper">
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Đang Chiếu" {...a11yProps(0)} />
            <Tab label="Sắp Chiếu" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Swiper
            // slidesPerView={6}
            // slidesPerColumn={2}
            // slidesPerGroup={4}
            spaceBetween={5}
            // slidesPerColumnFill="row"
            navigation
            breakpoints={{
              1444: {
                slidesPerView: 6,
              },
              1220: {
                slidesPerView: 5,
              },
              997: {
                slidesPerView: 4,
              },
              775: {
                slidesPerView: 3,
              },
              552: {
                slidesPerView: 2,
              },
            }}
          >
            {renderListMovie()}
          </Swiper>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Swiper
            // slidesPerView={6}
            // slidesPerColumn={2}
            // slidesPerGroup={4}
            spaceBetween={5}
            // slidesPerColumnFill="row"
            navigation
            breakpoints={{
              1444: {
                slidesPerView: 6,
              },
              1220: {
                slidesPerView: 5,
              },
              997: {
                slidesPerView: 4,
              },
              775: {
                slidesPerView: 3,
              },
              552: {
                slidesPerView: 2,
              },
            }}
          >
            {renderListMovieNew()}
          </Swiper>
        </TabPanel>
      </MuiThemeProvider>
    </section>
  );
}

export default NewIn;
