import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../comopnents/Spinner";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login_signup/login" />;
};

export default PrivateRoute;
