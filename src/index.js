import React from "react";

import { createBrowserHistory } from "history";

import ReactDOM from "react-dom";

import RTL from "layouts/RTL.jsx";

import { Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.jsx";
import Build from "views/Grades/text";
import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
     {/*<Route path="/rtl" component={RTL} /> */} 
      <Redirect from="/" to="/admin/dashboard" />
      {/*<Route path="/admain/create" component={Build}/>*/}
    </Switch>
  </Router>,
  document.getElementById("root")
);
