import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";

import localRoutes from "./routes";
import lolRoutes from "lol/routes";
import tftRoutes from "tft/routes";

const routes = [...localRoutes, ...lolRoutes, ...tftRoutes];

const App = () => (
  <HashRouter>
    <div>
      <Navigation />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  </HashRouter>
);

export default App;
