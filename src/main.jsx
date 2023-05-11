import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layouts from "./Layouts/Layouts";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import LoginSignup from "./Layouts/LoginSignup";
import AuthProvider from "./Provider/AuthProvider";
import Services from "./pages/Service/Services";
import Checkout from "./pages/Checkout/Checkout";
import AddNewService from "./pages/NewService/AddNewService";
import Order from "./pages/Order/Order";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "addnewservice",
        element: <AddNewService></AddNewService>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "manageorders",
        element: <ManageOrders></ManageOrders>,
      },
    ],
  },
  {
    path: "login_signup",
    element: <LoginSignup></LoginSignup>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
