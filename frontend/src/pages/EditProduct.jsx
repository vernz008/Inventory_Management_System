import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.prod_id;

  const [product, setProduct] = useState([]);
  const [product_inputs, setProductInput] = useState({
    name: "",
    code: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/product/${id}`).then((res) => {
      setProductInput({
        ...product_inputs,
        name: res.data.product_name,
        code: res.data.product_code,
        description: res.data.description,
        price: res.data.price,
      });
    });
  }, []);

  const send = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/api/product/${id}`, {
        product_name: product_inputs.name,
        product_code: product_inputs.code,
        description: product_inputs.description,
        price: product_inputs.price,
      })
      .then((res) => {
        setProduct(res.data);
        alert("Product has been updated!");
        navigate("/product");
      });
  };
  return (
    <div className="h-screen w-screen">
      <NavigationBar></NavigationBar>

      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-row">
          <div className="">
            <img
              className="h-full w-[350px]"
              src="\src\images\productadd.jpg"
              alt=""
            />
          </div>

          <div className="w-[350px] p-3 border-[1px] border-gray-500 rounded-md">
            <h2 className="font-bold text-[25px]">Edit Product Info.</h2>
            <form className="mt-3" onSubmit={send}>
              <label className="font-bold">Product</label>
              <br />
              <input
                className="border-[1px] border-gray-500 rounded-md focus:outline-none p-1 w-full"
                type="text"
                value={product_inputs.name}
                onChange={(e) =>
                  setProductInput({ ...product_inputs, name: e.target.value })
                }
              />
              <br />
              <label className="font-bold">Code</label>
              <br />
              <input
                className="border-[1px] border-gray-500 rounded-md focus:outline-none p-1 w-full"
                type="text"
                value={product_inputs.code}
                onChange={(e) =>
                  setProductInput({ ...product_inputs, code: e.target.value })
                }
              />
              <br />
              <label className="font-bold">Description</label>
              <br />
              <input
                className="border-[1px] border-gray-500 rounded-md focus:outline-none p-1 w-full"
                type="text"
                value={product_inputs.description}
                onChange={(e) =>
                  setProductInput({
                    ...product_inputs,
                    description: e.target.value,
                  })
                }
              />
              <br />
              <label className="font-bold">Price</label>
              <br />
              <input
                className="border-[1px] border-gray-500 rounded-md focus:outline-none p-1 w-full"
                type="text"
                value={product_inputs.price}
                onChange={(e) =>
                  setProductInput({ ...product_inputs, price: e.target.value })
                }
              />
              <br />
              <div className="mt-3 flex justify-end">
                <button
                  className="bg-green-600 font-bold text-green p-2 rounded-md hover:opacity-75"
                  type="submit"
                >
                  Save Info
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
