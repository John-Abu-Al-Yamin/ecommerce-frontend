import React from "react";

const ProductBanner = ({ product }) => {
  return (
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ? (
        <img
          className="pt-2 w-[350px] h-[300px] rounded-lg object-cover"
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt={product?.attributes?.title}
        />
      ) : (
        <div className="w-[400px] h-[350px] bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
};

export default ProductBanner;
