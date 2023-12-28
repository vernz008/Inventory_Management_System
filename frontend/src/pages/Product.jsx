import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import AddProductForm from "../components/AddProductForm";
import { useNavigate } from "react-router-dom";
import trash from "../images/trash.png";
import draw from "../images/draw.png";
import axiosAuth from "../utils/axios/axios-auth";

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const [editmodal, setEditModal] = useState(false);

  useEffect(() => {
    axiosAuth.get("http://127.0.0.1:8000/api/product/").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const View_Details = (id) => {
    navigate(`/product/${id}`);
  };

  const deleteProduct = (id) => {
    axiosAuth
      .delete(`http://127.0.0.1:8000/api/product/${id}`)
      .then((res) => {
        alert("Deleted Successfully!");
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="w-screen h-screen">
        <NavigationBar />
        <div className="w-full">
          <button
            onClick={() => setModal(true)}
            className="m-5 border-[1px] rounded-sm p-1 bg-yellow-500 font-bold hover:opacity-75"
          >
            + Add New Product
          </button>
        </div>

        <div className=" grid grid-cols-3 w-[100%] h-[75%] pl-[100px] justify-center items-center border-[1px] overflow-y-auto overflow-hidden bg-blue-200">
          {product.map((data) => {
            return (
              <>
                <div className="shadow-2xl h-[250px] w-[250px] m-[20px] bg-white scale-100 transform transition-all duration-200 hover:scale-110">
                  <div className="w-full bg-red-500 p-2">
                    <span className="font-bold text-yellow-400 text-[20px]">
                      {data.product_name}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-[30px] font-bold text-gray-700 mr-2">
                      ₱ {data.price}.00
                    </span>
                  </div>
                  <div className="p-2">
                    <span className="text-[12px] shadow-lg">
                      <h3>{data.description}</h3>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </span>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div className="flex flex-row justify-end mt-1 mr-1">
                    <div className="m-1">
                      <button
                        onClick={() => View_Details(data.id)}
                        className="bg-black text-white p-1 rounded-md hover:opacity-75 w-[120px]"
                      >
                        <img className="absolute h-6 w-5" src={draw} alt="" />
                        <span className="ml-3"> Edit Details</span>
                      </button>
                    </div>
                    <div className="m-1">
                      <button
                        onClick={() => deleteProduct(data.id)}
                        className="bg-gray-600 text-white p-1 rounded-md hover:opacity-75 w-[100px]"
                      >
                        <img className="absolute h-5 w-5" src={trash} alt="" />
                        <span className="ml-3">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {modal === true ? <AddProductForm setModal={setModal} /> : ""}
    </>
  );
};

export default Product;
