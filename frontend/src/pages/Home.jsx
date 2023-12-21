import React from "react";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <NavigationBar></NavigationBar>
      <div className="w-[100%]">
        <div className="flex flex-row">
          <div className="w-[700px] scale-100 transform transition-all duration-200 hover:scale-110">
            <img src="src/images/inventory_landingpage.png" alt="" />
          </div>
          <div className="w-[700px] m-5">
            <h1 className="font-bold text-[29px]">
              Inventory Management System
            </h1>
            <div className="mt-2">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti corrupti quidem modi fugit quis repellat illum,
                deserunt sint minima optio velit obcaecati facere at! Recusandae
                est dolorum accusantium eligendi quas?
              </span>
            </div>
            <div className="mt-2">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti corrupti quidem modi fugit quis repellat illum,
                deserunt sint minima optio velit obcaecati facere at! Recusandae
                est dolorum accusantium eligendi quas?
              </span>
            </div>
            <button className="mt-2 bg-yellow-500 font-bold rounded-sm p-1 hover:opacity-75 scale-100 transform translate-all duration-200 hover:scale-110">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
