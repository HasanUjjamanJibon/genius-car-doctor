import React, { useContext, useState } from "react";
import login from "/images/login/login.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");
  const {
    createUser,
    githubLogin,
    googleLogin,
    profileUpdate,
    logOutUser,
    isShow,
    setIsShow,
  } = useContext(AuthContext);

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        profileUpdate(user, name, url);
        logOutUser();
        setTimeout(() => {
          navigate("/login_signup/login");
        }, 2000);

        setError("");
        setSuccess("Account Create Succeessfully");
      })
      .catch((error) => {
        setError(error.code);

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

  return (
    <div className="my-20 grid-container-2-1 justify-items-center items-center px-4">
      <div>
        <img src={login} alt={login} />
      </div>
      <div className="shadow px-6 py-10 w-full">
        <h2 className="text-center font-bold text-4xl">Sign Up</h2>
        <p className="text-error text-sm text-center my-3">{error}</p>
        <p className="text-success text-sm text-center my-3">{success}</p>
        <form onSubmit={handleFormOnSubmit} className="my-8 space-y-3">
          {/* name input field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="inline-block font-semibold text-sm text-gray-700"
            >
              Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
              className="block w-full text-gray-500 text-semibold  outline-0 border-2  border-gray-300  rounded-md px-4 py-2 "
            />
          </div>

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
              name="email"
              id="email"
              placeholder="Enter your email"
              className="block w-full text-gray-500 text-semibold  outline-0 border-2  border-gray-300  rounded-md px-4 py-2 "
            />
          </div>

          {/* email input field */}
          <div className="space-y-2">
            <label
              htmlFor="url"
              classemail="inline-block font-semibold text-sm text-gray-700"
            >
              Photo URL
            </label>

            <input
              type="url"
              required
              name="url"
              id="url"
              placeholder="Enter your photo url"
              className="block w-full text-gray-500 text-semibold  outline-0 border-2  border-gray-300  rounded-md px-4 py-2 "
            />
          </div>

          {/* password input field */}
          <div className="space-y-2 ">
            <label
              htmlFor="password"
              classemail="inline-block font-semibold text-sm text-gray-700"
            >
              Password
            </label>

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
            className="btn w-full block capitalize bg-[#FF3811] border-0 "
          >
            Sign Up
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
            Already have an account?
            <Link
              to="/login_signup/login"
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

export default Signup;
