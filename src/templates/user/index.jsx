import React from "react";
import { Route } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
function UserTemplate(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

const RouterUserTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <UserTemplate>
        <Component />
      </UserTemplate>
    </Route>
  );
};

export default RouterUserTemplate;
