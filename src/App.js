import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";
import Layout from "./components/Layout";
import Training from "./components/Training";
import Products from "./components/Products";
import Test from "./components/Test";
import Profile from "./components/Profile";

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
              <Route path="/test" element={<Test />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          );
        }}
      />
    </>
  );
};
export default App;
