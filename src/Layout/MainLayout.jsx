import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductsCards from "../Components/ProductsCards";

export default function MainLayout() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  console.log(products);

  function handleOnsearch(searchtext) {
    console.log(searchtext);
    let NewFilterArray = products.filter((singleProduct) =>
      singleProduct.productName.toLowerCase().includes(searchtext.toLowerCase())
    );
    setproducts(NewFilterArray);
  }

  return (
    <>
      <Header></Header>
      <ProductsCards
        onSearch={handleOnsearch}
        products={products}
      ></ProductsCards>
      <Footer></Footer>
    </>
  );
}
