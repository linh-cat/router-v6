import React, { Suspense } from "react";
import "./App.css";
import Routes from "./hook/routes";
// import routes from "./routes";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
