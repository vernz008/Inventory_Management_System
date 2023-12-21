import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductForm = ({ setModal }) => {
  const [product, setProduct] = useState([]);
  const [product_inputs, setProductInput] = useState({
    product_name: "",
    product_code: "",
    product_description: "",
    product_price: "",
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/product").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const send = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/product", {
        product_name: product_inputs.product_name,
        product_code: product_inputs.product_code,
        description: product_inputs.product_description,
        price: product_inputs.product_price,
      })
      .then((res) => {
        setProductInput({
          ...product_inputs,
          product_name: "",
          product_code: "",
          product_description: "",
          product_price: "",
        });

        setProduct(res.data);
        alert("Successfully Saved!");
        window.location.reload();
        setModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black/50 absolute z-999 !top-0 !left-0">
      <div className="h-[68%] w-[50%] bg-white p-5">
        <div className="w-full flex justify-end">
          <button
            onClick={() => setModal(false)}
            className="bg-red-500 text-white text-[19px] font-semibold w-8"
          >
            X
          </button>
        </div>

        <div className="flex flex-row mb-1">
          <div className="mr-[75px]">
            <img
              className="h-full w-[300px]"
              src="\src\images\productadd.jpg"
              alt=""
            />
          </div>

          <div className="flex justify-end ">
            <form
              className="m-2 p-2 border-[1px] border-gray-500 rounded-md bg-slate-200"
              onSubmit={send}
            >
              <label className="font-bold" htmlFor="">
                Product Name
              </label>
              <br />
              <input
                className="border-[1px] border-gray-600 focus: outline-none p-1 rounded-md"
                type="text"
                name="name"
                id=""
                onChange={(e) =>
                  setProductInput({
                    ...product_inputs,
                    product_name: e.target.value,
                  })
                }
              />
              <br />
              <label className="font-bold" htmlFor="">
                Product Code
              </label>
              <br />
              <input
                className="border-[1px] border-gray-600 focus: outline-none p-1 rounded-md"
                type="text"
                name="name"
                id=""
                onChange={(e) =>
                  setProductInput({
                    ...product_inputs,
                    product_code: e.target.value,
                  })
                }
              />
              <br />
              <label className="font-bold" htmlFor="">
                Product Description
              </label>
              <br />
              <input
                className="border-[1px] border-gray-600 focus: outline-none p-1 rounded-md"
                type="text"
                name="name"
                id=""
                onChange={(e) =>
                  setProductInput({
                    ...product_inputs,
                    product_description: e.target.value,
                  })
                }
              />
              <br />
              <label className="font-bold" htmlFor="">
                Product Price
              </label>
              <br />
              <input
                className="border-[1px] border-gray-600 focus: outline-none p-1 rounded-md"
                type="text"
                name="name"
                id=""
                onChange={(e) =>
                  setProductInput({
                    ...product_inputs,
                    product_price: e.target.value,
                  })
                }
              />
              <hr />
              <div className="flex justify-end mt-3">
                <button
                  className="p-1 bg-green-950 text-white font-bold rounded-md"
                  type="submit"
                >
                  + Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
