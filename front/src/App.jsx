import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout";
import Home from "./views/Home";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-gray-200");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
