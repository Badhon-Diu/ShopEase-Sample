import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductsCards from "../Components/ProductsCards";
export default function MainLayout() {
  const [products, setproducts] = useState([]);
  const [isshowmodal, setisshowmodal] = useState(false);
  const [modalinfo, setmodalinfo] = useState([]);
  const [carts, setcarts] = useState([]);
  const notify = () => toast("  Added to the Card !");
  function handlesetCart(singlecart) {
    setcarts((prev) => {
      return [...prev, singlecart];
    });
  }

  function ModalInfo(info) {
    //console.log(info);
    setmodalinfo(info);
  }

  console.log(modalinfo);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  //console.log(products);

  function handleOnsearch(searchtext) {
    //console.log(searchtext);
    let NewFilterArray = products.filter((singleProduct) =>
      singleProduct.productName.toLowerCase().includes(searchtext.toLowerCase())
    );
    setproducts(NewFilterArray);
  }

  return (
    <>
      <ToastContainer></ToastContainer>
      <Header carts={carts}></Header>
      <ProductsCards
        handlesetCart={handlesetCart}
        setisshowmodal={setisshowmodal}
        modalinfo={modalinfo}
        ModalInfo={ModalInfo}
        isshowmodal={isshowmodal}
        onSearch={handleOnsearch}
        products={products}
        notify={notify}
      ></ProductsCards>
      <Footer></Footer>
    </>
  );
}
