import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";

import localRoutes from "./routes";
import { ShellProvider } from "./store";
import lolRoutes from "lol/routes";
import tftRoutes from "tft/routes";
import { LolProvider } from "lol/store";

const routes = [...localRoutes, ...lolRoutes, ...tftRoutes];

const App = () => (
  <ShellProvider>
    <LolProvider>
      <HashRouter>
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
      </HashRouter>
    </LolProvider>
  </ShellProvider>
);

export default App;
