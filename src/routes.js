import React from "react";
const Home = React.lazy(() => import("./containers/Home"));
const Auth = React.lazy(() => import("./containers/Auth"));

const routes = [
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "auth/*",
    element: <Auth />,
  },
];

export default routes;
