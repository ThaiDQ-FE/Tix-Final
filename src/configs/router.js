import DashBoard from "../pages/admin/dashboard";
import Movie from "../pages/admin/movie";
import User from "../pages/admin/user";
import Booking from "../pages/user/booking";
import DetailMovie from "../pages/user/detail-movie";
import Home from "../pages/user/home";
import LoadingHome from "../pages/user/home/loadingHome";
import Login from "../pages/user/login";
import LoadingLogin from "../pages/user/login/loadingLogin";
import ShowTime from "../pages/user/shows-time";

export const userRouter = [
  {
    path: "/",
    exact: true,
    Component: LoadingHome,
  },
  {
    path: "/movie-detail/:maPhim",
    exact: false,
    Component: DetailMovie,
  },
  {
    path: "/booking",
    exact: false,
    Component: Booking,
  },
  {
    path: "/shows-time",
    exact: false,
    Component: ShowTime,
  },
];

export const loginRouter = [
  {
    path: "/login",
    exact: false,
    Component: LoadingLogin,
  },
];

export const adminRouter = [
  {
    path: "/admin/dashboard",
    exact: true,
    Component: DashBoard,
  },
  {
    path: "/admin/Movie",
    exact: false,
    Component: Movie,
  },
  {
    path: "/admin/user",
    exact: false,
    Component: User,
  },
];
