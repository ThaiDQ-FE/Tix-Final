import DashBoard from "../pages/admin/dashboard";
import Movie from "../pages/admin/movie";
import User from "../pages/admin/user";
import Booking from "../pages/user/booking";
import DetailMovie from "../pages/user/detail-movie";
import Home from "../pages/user/home";
import Login from "../pages/user/login";

export const userRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
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
  ,
  {
    path: "/login",
    exact: false,
    Component: Login,
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
