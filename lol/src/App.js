import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from "react";
import routes from "./routes";
import { LolProvider } from "./store";
import { ShellProvider } from "shell/store";

const App = () => (
  <ShellProvider>
    <LolProvider>
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
    </LolProvider>
  </ShellProvider>
);

export default App;
