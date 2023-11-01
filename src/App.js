import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./Main/Main";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/project" element={<ProjectInfo />}>
        <Route path=":id" element={<ProjectInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
