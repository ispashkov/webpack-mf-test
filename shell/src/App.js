import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import Navigation from "./Navigation";

import localRoutes from "./routes";
import ShellStore from "./store";
import lolRoutes from "lol/routes";
import tftRoutes from "tft/routes";
import LolStore from "lol/store";

const stores = {
  shellStore: new ShellStore(),
  lolStore: new LolStore(),
};

const routes = [...localRoutes, ...lolRoutes, ...tftRoutes];

const App = () => (
  <Provider {...stores}>
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
  </Provider>
);

export default App;
