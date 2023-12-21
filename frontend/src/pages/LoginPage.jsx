import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosAuth from "../utils/axios/axios-auth";
import Cookie from "js-cookie";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [login_input, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const send = (e) => {
    e.preventDefault();
    axiosAuth
      .post("/api/login", {
        email: login_input.email,
        password: login_input.password,
      })

      .then((res) => {
        const token = res.data.split("|")[1];

        Cookie.set("login_token", token);

        setLoginInput({
          ...login_input,
          email: "",
          password: "",
        });
        setUser(res.data);

        alert("Welcome!");
        navigate("/home");
      })
      .catch((error) => {
        alert("Invalid User!");
      });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[75%] w-[30%] bg-white rounded-md border-none shadow-md shadow-gray-400 scale-100 transform transition-all duration-200 hover:scale-110">
        <div className="h-[50px] w-full flex justify-center mt-10">
          <h2 className="h-full p-2 font-bold text-[23px]">LOGIN</h2>
        </div>
        <div className="mr-[75px] ml-[75px] mt-9">
          <form onSubmit={send}>
            <img
              className="h-9 w-9 absolute p-1.5"
              src="src/images/email.png"
              alt=""
            />
            <input
              className="border-[1px] rounded-sm w-full h-9 bg-slate-300 pl-[50px] focus:outline-none font-sans mb-5"
              type="email"
              required
              placeholder="Email"
              value={login_input.email}
              onChange={(e) =>
                setLoginInput({ ...login_input, email: e.target.value })
              }
            />
            <img
              className="h-9 w-9 absolute p-1.5"
              src="src/images/padlock.png"
              alt=""
            />
            <input
              className="border-[1px] rounded-sm w-full h-9 bg-slate-300 pl-[50px] focus:outline-none font-sans mb-5"
              required
              type="password"
              placeholder="Password"
              value={login_input.password}
              onChange={(e) =>
                setLoginInput({ ...login_input, password: e.target.value })
              }
            />
            <div className="w-full p-1 mb-3">
              <input className="" type="checkbox" />{" "}
              <span className="text-[15px]">Remember me</span>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full p-2 bg-purple-900 text-white font-bold rounded-md hover:opacity-75"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
