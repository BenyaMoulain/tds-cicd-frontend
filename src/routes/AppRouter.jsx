import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { USERS_ROUTE } from "./RouteNames";

import Users from "../components/users";

const AppRouter = () => (
  <>
    <Router>
      <Switch>
        <Route exact path={USERS_ROUTE} component={Users} />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
