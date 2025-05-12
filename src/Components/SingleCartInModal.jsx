export default function SingleCartInModal({ onDelete, singlecart }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:bg-gray-50 transition duration-300">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            {singlecart.productName}
          </h2>
          <p className="text-gray-600">${singlecart.price}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-gray-500 text-sm ml-2">
              ({singlecart.rating})
            </span>
          </div>
        </div>
        <button
          onClick={() => onDelete(singlecart.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </>
  );
}
