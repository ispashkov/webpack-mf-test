import React from "react";

const HomePage = React.lazy(() => import("./HomePage"));

const routes = [
  {
    path: "/tft",
    component: HomePage,
  },
];

export default routes;
