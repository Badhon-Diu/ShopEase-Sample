export default function SingleProductCard({ SingleProduct }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {SingleProduct.productName}
          </h3>
          <p className="text-gray-600">${SingleProduct.price}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="ml-2 text-gray-500 text-sm">({SingleProduct.rating})</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">Seller : {SingleProduct.seller}</p>
          <button className="mt-4 cursor-pointer w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
