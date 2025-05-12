import SingleCartInModal from "./SingleCartInModal";

export default function CardsModal({ setisshowcartmodal, carts, onDelete }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/20 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-gray-100 rounded-lg w-96">
          <div className="max-w-4xl mx-auto p-6 ">
            <h1 className="text-3xl font-bold  text-gray-800 mb-6 text-center">
              Product List
            </h1>
            <div className="space-y-4 max-h-96 overflow-auto ">
              {/* Product 1 */}
              {carts.map((singlecart) => (
                <SingleCartInModal
                  onDelete={onDelete}
                  singlecart={singlecart}
                ></SingleCartInModal>
              ))}
            </div>
          </div>
          <div className=" mb-4 flex justify-center">
            <button
              onClick={() => setisshowcartmodal(false)}
              type="button"
              class="text-white cursor-pointer bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
