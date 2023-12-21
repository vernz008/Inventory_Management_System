import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import axiosAuth from "../utils/axios/axios-auth";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("white");

  const logout = () => {
    axiosAuth
      .post("/api/logout")
      .then((res) => {
        Cookie.remove("login_token");
        // setTimeout(() => {
        navigate("/");
        // }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-[10%] bg-black">
      <div className="flex justify-end mr-5">
        <ul className="mt-5">
          <a className="text-white font-bold m-3 hover:text-yellow-600">
            <Link to="/home">Home</Link>
          </a>
          <a className="text-white font-bold m-3 hover:text-yellow-600">
            <Link to="/home">Dashboard</Link>
          </a>
          <a className="text-white font-bold m-3 hover:text-yellow-600">
            <Link to="/product/">Product</Link>
          </a>
          <a className="text-white font-bold m-3 hover:text-yellow-600">
            <Link to="/home">Inventory</Link>
          </a>
          <a className="text-white font-bold m-3 hover:text-yellow-600">
            <Link to="/home">Contact</Link>
          </a>
          {/* <a className="text-white font-bold m-3 hover:text-yellow-600"></a> */}
          <button className="text-white" onClick={logout}>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
