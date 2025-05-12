export default function Modal({ modalinfo, setisshowmodal }) {
  console.log(modalinfo);
  return (
    <>
      <div className="fixed inset-0 bg-black/20 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className=" p-6 rounded-lg shadow-lg w-11/12 max-w-md">
          <div className="max-w-md mx-auto bg-gradient-to-br from-indigo-100 via-white to-pink-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">
                Product ID:{" "}
                <span className="font-medium text-indigo-600">
                  #{modalinfo.id}
                </span>
              </div>
              {/* Product Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={modalinfo.image}
                  alt="Product Image"
                  className="w-52 h-52 object-cover rounded-xl shadow-md border-4 border-white"
                />
              </div>
              {/* Product Info */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  {modalinfo.productName}
                </h2>
                <p className="text-xl font-semibold text-green-600">
                  ${modalinfo.price}
                </p>
                {/* Rating */}
                <div className="flex justify-center items-center space-x-1 text-yellow-500">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.64 12.545.76 8.91l6.17-.9L10 2.5l3.07 5.51 6.17.9-4.88 3.636 1.517 5.545z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.64 12.545.76 8.91l6.17-.9L10 2.5l3.07 5.51 6.17.9-4.88 3.636 1.517 5.545z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.64 12.545.76 8.91l6.17-.9L10 2.5l3.07 5.51 6.17.9-4.88 3.636 1.517 5.545z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.64 12.545.76 8.91l6.17-.9L10 2.5l3.07 5.51 6.17.9-4.88 3.636 1.517 5.545z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-300"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.64 12.545.76 8.91l6.17-.9L10 2.5l3.07 5.51 6.17.9-4.88 3.636 1.517 5.545z" />
                  </svg>
                </div>
                {/* Seller Info */}
                <div className="text-sm text-gray-600 mt-3">
                  Sold by:{" "}
                  <span className="font-medium text-blue-600">
                    {modalinfo.seller}
                  </span>
                </div>
                <button
                  onClick={() => setisshowmodal(false)}
                  type="button"
                  className="mt-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
