import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import routes from "./routes";

const App = () => (
  <HashRouter>
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
  </HashRouter>
);

export default App;
