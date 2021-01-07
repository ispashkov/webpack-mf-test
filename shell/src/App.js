import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";

import localRoutes from "./routing/routes";
import { ShellProvider } from "./store/store";
import lolRoutes from "lol/routes";
import tftRoutes from "tft/routes";
import { LolProvider } from "lol/store";

const routes = [...localRoutes, ...lolRoutes, ...tftRoutes];

const App = () => (
  <ShellProvider>
    <LolProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </LolProvider>
  </ShellProvider>
);

export default App;
