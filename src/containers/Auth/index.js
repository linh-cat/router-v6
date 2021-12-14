import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const index = ({ children }) => {
  console.log(children);

  return (
    <div>
      <div>Auth template</div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Routes>
          {children.map((child, index) => (
            <Route key={index} path={child.path} element={child.element} />
          ))}
        </Routes> */}
      </Suspense>
    </div>
  );
};

export default index;
