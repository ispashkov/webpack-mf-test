import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from "react";
import routes from "./routing/routes";
import { ShellProvider } from "shell/store";

const App = () => (
  <ShellProvider>
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
  </ShellProvider>
);

export default App;
