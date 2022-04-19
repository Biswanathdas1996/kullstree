import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";
import Layout from "./components/Layout";
const App = () => {
  return (
    <>
      <Layout
        body={() => {
          return (
            <Routes>
              <Route path="/" element={<Timeline />} />

              <Route path="/register" element={<Registration />} />
            </Routes>
          );
        }}
      />
    </>
  );
};
export default App;
