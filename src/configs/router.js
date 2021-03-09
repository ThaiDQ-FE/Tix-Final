import Booking from "../pages/user/booking";
import DetailMovie from "../pages/user/detail-movie";
import Home from "../pages/user/home";

export const userRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/movie-detail",
    exact: false,
    Component: DetailMovie,
  },
  {
    path: "/booking",
    exact: false,
    Component: Booking,
  },
];
