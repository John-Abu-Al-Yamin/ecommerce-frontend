import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../utils/ProductApis";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      setProductList(res.data.data);
      
    });
  };

  return (
    <div className='px-10 md:px-20 mb-3' >
      <h1 className="my-4 font-bold text-2xl ">Our Latest Products</h1>
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
