import React from "react";
import Table from "./img/tab.jpg";
import List from "./img/list.png";

export const Shopping = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-around max-w-screen-xl mx-auto bg-slate-200 py-4 w-full">
        <ul>
          <li className="font-bold leading-tight text-3xl mt-0 mb-2 text-blue-600">
            Shopping App
          </li>
        </ul>
        <ul className="flex gap-x-4">
          <li className>
            <img
              className="h-8 w-8 border border-1 border-blue-500 hover:border-2 hover:border-blue-800"
              src={Table}
            />
          </li>
          <li className>
            <img
              className="h-8 w-8 border border-1 border-red-500 hover:border-2 hovder:red-800"
              src={List}
            />
          </li>
        </ul>
        <ul className="flex gap-x-4 px-4">
          <li className="list-none">
            <label className="px-2 font-semibold text-lg">Name:</label>
            <select
              id="name"
              className="text-white bg-slate-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 gray:focus:ring-blue-700"
            >
              <option
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                value="all"
              >
                All
              </option>
              <option
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                value="a-z"
              >
                A-Z
              </option>
              <option
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                value="z-a"
              >
                Z-A
              </option>
            </select>
          </li>

          <li className="list-none px-4">
            <label className="px-2 font-semibold text-lg">Sort By:</label>

            <select className="text-white bg-slate-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 gray:focus:ring-blue-700">
              <option
                value="name"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
              >
                Name
              </option>
              <option
                value="price-low-to-high"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
              >
                Price Low To High
              </option>
              <option
                value="price-high-to-low"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
              >
                Price High To Low
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
};
