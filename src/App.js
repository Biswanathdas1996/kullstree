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
import Job from "./components/Job";
import UserList from "./components/UserList";

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
              <Route path="/job" element={<Job />} />
              <Route path="/users" element={<UserList />} />
            </Routes>
          );
        }}
      />
      {/* <footer
        className="sticky bottom-0"
        style={{ background: "hotpink", padding: 20, color: "white" }}
      >
        <center>Kullstree</center>
      </footer> */}
    </>
  );
};
export default App;
