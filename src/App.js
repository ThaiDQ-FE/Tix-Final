import "./App.css";
import Home from "./pages/user/home";
import DetailMovie from "./pages/user/detail-movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Booking from "./pages/user/booking";
import Header from "./components/header";
import { userRouter } from "./configs/router";
import RouterUserTemplate from "./templates/user";
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
  return (
    <>
      <BrowserRouter>
        <Switch>{renderUserRouter()}</Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
