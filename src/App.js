import "./App.css";
import Home from "./pages/user/home";
import DetailMovie from "./pages/user/detail-movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/movie-detail">
            <DetailMovie />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
