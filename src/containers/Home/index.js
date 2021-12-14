import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Detail = React.lazy(() => import("./Detail"));
const About = React.lazy(() => import("./About"));

const index = ({ children }) => {
  console.log("hOME", children);
  return (
    <div>
      <h1>Home template</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default index;
