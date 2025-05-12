import { useState } from "react";

export default function Search({ products, onSearch }) {
  const [searchtext, setsearchtext] = useState("");

  function handleOnSearchChange(e) {
    setsearchtext(e.target.value);
  }

  function handleSearchSubmit(data) {
    onSearch(data);
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
        <div className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">
          Products :{" "}
          <span className="text-indigo-600 hover:text-red-500 hover:duration-700">
            {products.length}
          </span>
        </div>
        <div className="relative w-full sm:w-64">
          <input
            onChange={handleOnSearchChange}
            type="text"
            placeholder="Search products..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => handleSearchSubmit(searchtext)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
