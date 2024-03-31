import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Link to={`product/${product?.id}`} className=" bg-gray-50 transition-all hover:shadow-none hover:cursor-pointer px-5 my-3 rounded-md shadow-md"> 
      <img
        className="pt-2 w-[350px] h-[250px] object-cover rounded-t-lg"
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt={product?.attributes?.title}
      />
      <div className="p-3 flex justify-between items-center">
        <div className="">
          <h2 className="mb-1 text-[20px] font-bold line-clamp-1">
            {product?.attributes?.title}
          </h2>
          <h2 className="text-[15px] font-medium text-gray-500">
            {product?.attributes?.category}
          </h2>
        </div>
        <h2 className="font-bold text-lg">
           $ {product?.attributes?.price}
          </h2>
      </div>
    </Link>
  );
};

export default ProductItem;
