import { Route, Routes } from "react-router-dom";
import WordCounter from "../Pages/WordCounter";
import ChuckNorris from "../Pages/ChuckNorris";
import PageNotFound from "../Pages/PageNotFound";

import React from "react";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<WordCounter />} path="/word-counter" />
        <Route element={<ChuckNorris />} path="/chuck-norris" />

        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </>
  );
};

export default AllRoutes;
