import React from "react";
import { Switch, Route } from "react-router-dom";

import { MdPage } from "./components/page";

const SiteRoutes = () => {
  return (
    <Switch>
      <Route path="/component/:componentName">
        <MdPage renderComponents={true} />
      </Route>

      <Route exact path="*">
        <MdPage />
      </Route>
    </Switch>
  );
};

export default SiteRoutes;
