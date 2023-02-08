import React, { useEffect, useState } from "react";
import Table from "./img/tab.jpg";
import List from "./img/list.png";
import Cart from "./img/cart.png";

import { stockData } from "./stockData";

export const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [format, setFormat] = useState("list");
  const [sortOrder, setSortOrder] = useState("priceAsc");
  const [cart, setCart] = useState([]);
  const [showAlertSucesss, setShowAlertSuccess] = useState(false);

  useEffect((e) => {
    setProducts(stockData);
    setLoading(false);
  }, []);

  const handleFormat = (format) => {
    setFormat(format);
  };

  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setShowAlertSuccess(true);

    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setShowAlertSuccess(false);
    }, 1000);
    return () => clearTimeout(timer);
  };
  console.log(cart);

  let sortedProducts = [...products];

  if (sortOrder === "priceDesc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "priceAsc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "nameAsc") {
    sortedProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (sortOrder === "nameDesc") {
    sortedProducts.sort((a, b) => (a.name < b.name ? 1 : -1));
  } else if (sortOrder === "nameAll" && sortOrder === "priceAll") {
    sortedProducts.sort((item) => item);
  }

  const TableData = () => {
    return (
      <table className="ml-10 w-5/6">
        <tbody className="px-8 py-4">
          {sortedProducts.map((product) => (
            <tr
              key={product.id}
              className="ml-8 my-4 py-1 flex flex-row  border  rounded-md  border-yellow-300 hover:border-yellow-700 bg-pink-100 hover:bg-pink-200 items-center justify-around"
            >
              <td className="px-8 mr-4">
                <img className="h-16 w-12" src={product.image} />
              </td>

              <td className="px-4 mr-8 text-lg font-medium">{product.name}</td>
              <td className="font-semibold  text-blue-900">
                Price: {product.price} ₹
              </td>
              <td className="px-4 mx-4">
                <button
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const ListData = () => {
    return (
      <div className="grid grid-cols-3 ml-8 gap-5 py-4">
        {sortedProducts.map((product) => (
          <ul
            key={product.id}
            className="px-8 py-4 flex flex-col items-center gap-y-2 border rounded-3xl  border-pink-300 hover:border-pink-700 bg-yellow-50 hover:bg-yellow-100"
          >
            <li>
              <img className="h-24 w-16" src={product.image} />
            </li>
            <li className="font-medium text-xl">{product.name}</li>
            <li className="font-semibold text-blue-900">
              Price: {product.price} ₹
            </li>

            <li>
              <button
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  };

  const ShowSuccessMeg = () => {
    return (
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2 py-1 shadow-md sticky top-0 right-0"
        role="alert"
      >
        <div class="flex items-center gap-x-8">
          <div class="py-1">
            <img className="w-8 h-8" src={Cart} />
          </div>
          <div>
            <p className="font-extrabold">
              Product is Added to Cart Successfully
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-around max-w-screen-xl mx-auto bg-slate-600 py-3 w-full">
        <ul>
          <li className="font-semibold hoverLfont-bold leading-tight text-2xl mt-0 mb-2 text-blue-600 hover:text-blue-700 bg-slate-100 rounded-lg py-1 px-2 hover:bg-cyan-200 ">
            Shopping App
          </li>
        </ul>
        <ul className="flex gap-x-4">
          <li className>
            <img
              className="h-8 w-8 border border-1 border-blue-500 hover:border-2 hover:border-blue-800"
              src={Table}
              onClick={() => handleFormat("table")}
            />
          </li>
          <li className>
            <img
              className="h-8 w-8 border border-1 border-red-500 hover:border-2 hovder:red-800"
              src={List}
              onClick={() => handleFormat("list")}
            />
          </li>
        </ul>
        <ul className="flex gap-x-4 px-4">
          <li className="list-none">
            <label
              htmlFor="inputConfirmType"
              className="px-2 font-semibold text-lg text-white"
            >
              Name:
            </label>
            <select
              className="form-control text-white border-2 border-blue-700 bg-slate-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 gray:focus:ring-blue-700"
              value={sortOrder}
              onChange={handleChange}
            >
              <option
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                value="nameAll"
              >
                All
              </option>
              <option
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                value="nameAsc"
              >
                A-Z
              </option>
              <option
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                value="nameDesc"
              >
                Z-A
              </option>
            </select>
          </li>

          <li className="list-none px-4">
            <label
              htmlFor="inputConfirmType"
              className="px-2 font-semibold text-lg text-white"
            >
              Sort By:
            </label>

            <select
              name="confirmType"
              className="form-control text-white border-2 border-blue-700 bg-slate-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 gray:focus:ring-blue-700"
              value={sortOrder}
              onChange={handleChange}
            >
              <option
                value="priceALL"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
              >
                All
              </option>
              <option
                value="priceAsc"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
              >
                Price Low To High
              </option>
              <option
                value="priceDesc"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
              >
                Price High To Low
              </option>
            </select>
          </li>
        </ul>
      </nav>
      <div></div>
      <div className="h-screen bg-blue-100">
        <div className="grid grid-cols-12 bg-blue-100 h-screen">
          {/* products */}
          <div className="col-span-8  px-4">
            {format === "table" ? <TableData /> : <ListData />}
          </div>
          {/* carts */}

          <div className="col-span-4 px-4 bg-green-200">
            <div> {showAlertSucesss && <ShowSuccessMeg />}</div>
            <div className="bg-green-200">
              
              <h1 className="text-3xl mt-20 text-center">Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
