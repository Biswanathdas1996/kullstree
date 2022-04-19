import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";
import Layout from "./components/Layout";
import Training from "./components/Training";
const App = () => {
  return (
    <>
      <Layout
        body={() => {
          return (
            <Routes>
              <Route path="/" element={<Timeline />} />

              <Route path="/register" element={<Registration />} />
              <Route path="/trainings" element={<Training />} />
            </Routes>
          );
        }}
      />
    </>
  );
};
export default App;
