import "./App.css";
import Home from "./pages/user/home";
import DetailMovie from "./pages/user/detail-movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Booking from "./pages/user/booking";
import Header from "./components/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/movie-detail">
            <DetailMovie />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
