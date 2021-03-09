import React from "react";
import { Route } from "react-router";
import Header from "../../components/header";
function AdminTemplate(props) {
  return (
    <>
      <header></header>
      <main>
        <section>sidebar</section>
        <section>{props.children}</section>
      </main>
    </>
  );
}

const RouterAdminTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <AdminTemplate>
        <Component />
      </AdminTemplate>
    </Route>
  );
};

export default RouterAdminTemplate;
