import React, { useContext, useRef, useState } from "react";
import login from "/images/login/login.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(" ");

  const {
    loginUser,
    resetPassword,
    githubLogin,
    googleLogin,
    isShow,
    setIsShow,
  } = useContext(AuthContext);

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setTimeout(() => {
          navigate("/");
        }, 2000);

        setError("");
        setSuccess("login Succeessfully");
      })
      .catch((error) => {
        setError(error.code);
        console.error(error.message);
        setSuccess("");
      });
  };

  // google Login handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setError("");
      })
      .catch((error) => {
        setError(error.code);
        console.error(error.message);
      });
  };

  // google Login handler
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        setError("");
      })
      .catch((error) => {
        setError(error.code);
        console.error(error.message);
      });
  };

  // password reset handler
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    resetPassword(email)
      .then((result) => {
        setError("");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="my-20 grid-container-2-1 items-center justify-items-center px-4">
      <div>
        <img src={login} alt={login} />
      </div>
      <div className="shadow px-6 py-10 w-full">
        <h2 className="text-center font-bold text-4xl">Login</h2>
        <p className="text-error text-sm text-center my-3">{error}</p>
        <p className="text-success text-sm text-center my-3">{success}</p>
        <form
          onSubmit={handleFormOnSubmit}
          action="#"
          className="my-8 space-y-3"
        >
          {/* email input field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              classemail="inline-block font-semibold text-sm text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              required
              id="email"
              ref={emailRef}
              name="email"
              placeholder="Enter your email"
              className="block w-full text-gray-500 text-semibold  outline-0 border-2  border-gray-300  rounded-md px-4 py-2 "
            />
          </div>

          {/* password input field */}
          <div className="space-y-2 ">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                classemail="inline-block font-semibold text-sm text-gray-700"
              >
                Password
              </label>
              <span
                onClick={handleResetPassword}
                className=" text-error text-xs font-semibold hover:cursor-pointer hover:underline"
              >
                Forget Password?
              </span>
            </div>

            <input
              type={isShow ? "text" : "password"}
              required
              id="password"
              name="password"
              placeholder="Enter your password"
              className="block w-full text-gray-500 text-semibold  outline-0 border-2  border-gray-300  rounded-md px-4 py-2 "
            />
          </div>

          <label
            onChange={() => setIsShow(!isShow)}
            className="flex items-center gap-2 my-2"
          >
            <input
              type="checkbox"
              className="checkbox outline-0  checkbox-xs focus-visible:outline-0 outline-offset-0 focus-visible:border-0 border-offset-0"
            />
            <span className=" text-error text-sm font-semibold hover:cursor-pointer hover:underline">
              Show Password?
            </span>
          </label>

          <button
            type="submit"
            className="btn w-full block capitalize  bg-[#FF3811] border-0 "
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-lg font-medium text-[#444444]">
          <span>or Sign in with</span>
        </div>
        {/* other social login  */}
        <div className="flex justify-center items-center gap-5 mt-4">
          <FaGoogle
            onClick={handleGoogleLogin}
            className="drop-shadow-2xl shadow-lg inline-block bg-gray-100 text-5xl rounded-full p-3 text-red-800 cursor-pointer"
          ></FaGoogle>
          <FaGithub
            onClick={handleGithubLogin}
            className="drop-shadow-2xl shadow-lg inline-block bg-gray-100 text-5xl rounded-full p-3 text-gray-950 cursor-pointer"
          ></FaGithub>
        </div>
        <div className="text-center  font-medium text-[#444444] mt-5 text-sm">
          <h5>
            Not a member?{" "}
            <Link
              to="/login_signup/signup"
              className="text-red-700 hover:underline cursor-pointer "
            >
              Click here
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
