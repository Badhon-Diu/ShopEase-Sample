import CardsModal from "./CardsModal";
import Modal from "./Modal";
import Search from "./Search";
import SingleProductCard from "./SingleProductCard";

export default function ProductsCards({
  onDelete,
  carts,
  setisshowcartmodal,
  isshowcartmodal,
  handlesetCart,
  setisshowmodal,
  ModalInfo,
  isshowmodal,
  onSearch,
  products,
  modalinfo,
  notify,
}) {
  return (
    <>
      <main className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Search and Filter Section */}
        <Search onSearch={onSearch} products={products}></Search>

        {isshowcartmodal && (
          <CardsModal
            onDelete={onDelete}
            carts={carts}
            setisshowcartmodal={setisshowcartmodal}
          ></CardsModal>
        )}
        {isshowmodal && (
          <Modal setisshowmodal={setisshowmodal} modalinfo={modalinfo}></Modal>
        )}
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Product Card 1 */}
          {products.map((SingleProduct) => (
            <SingleProductCard
              notify={notify}
              handlesetCart={handlesetCart}
              setisshowmodal={setisshowmodal}
              ModalInfo={ModalInfo}
              key={SingleProduct.id}
              SingleProduct={SingleProduct}
            ></SingleProductCard>
          ))}
        </div>
      </main>
    </>
  );
}
