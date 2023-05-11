import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import Spinner from "../comopnents/Spinner";

const Layouts = () => {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" ? <Spinner /> : ""}
      <div className="max-w-5xl mx-auto">
        <NavBar></NavBar>
        <div>
          {navigation.state === "loading" ? <Spinner /> : ""}
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
