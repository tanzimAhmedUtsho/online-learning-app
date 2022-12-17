import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar.js";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
