import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";
import Layout from "./components/Layout";
import Training from "./components/Training";
import Products from "./components/Products";

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
              <Route path="/products" element={<Products />} />
            </Routes>
          );
        }}
      />
    </>
  );
};
export default App;
