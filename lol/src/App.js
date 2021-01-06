import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import routes from "./routes";
import LolStore from "./store";
import ShellStore from "shell/store";

const stores = {
  shellStore: new ShellStore(),
  lolStore: new LolStore(),
};

const App = () => (
  <Provider {...stores}>
    <BrowserRouter>
      <div>
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
    </BrowserRouter>
  </Provider>
);

export default App;
