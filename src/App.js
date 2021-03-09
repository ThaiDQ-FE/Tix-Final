import "./App.css";
import Home from "./pages/user/home";
import DetailMovie from "./pages/user/detail-movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Booking from "./pages/user/booking";
import Header from "./components/header";
import { adminRouter, userRouter } from "./configs/router";
import RouterUserTemplate from "./templates/user";
import RouterAdminTemplate from "./templates/admin";
function App() {
  const renderUserRouter = () => {
    return userRouter.map(({ path, exact, Component }) => {
      return (
        <RouterUserTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterUserTemplate>
      );
    });
  };

  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterAdminTemplate>
      );
    });
  };
  return (
    <>
      <BrowserRouter>
        <Switch>{renderUserRouter()}</Switch>
        <Switch>{renderAdminRouter()}</Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
