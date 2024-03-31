import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div className="my-8 grid justify-items-center gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
     
      {productList.map((item) => (
        <ProductItem product={item} key={item.id}/>
      ))}
    </div>
  );
};

export default ProductList;
