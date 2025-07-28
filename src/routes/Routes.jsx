import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "../layouts/Main";
import CourseDetails from "../pages/CourseDetails";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<CourseDetails />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
