import React from "react";
import NavBar from "../common/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LoginSignup = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginSignup;
