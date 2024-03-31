import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductApis from "../utils/ProductApis";
import BreadCrumb from "./BreadCrumb";
import ProductBanner from "./ProductBanner";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
const ProductDetails = () => {
  const pramas = useParams();

  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductsById_();
  }, [pramas?.productId]);

  const getProductsById_ = () => {
    ProductApis.getProductsById(pramas?.productId).then((res) => {
    
      setProductDetails(res.data.data);
      getProductsListCategory(res.data.data);
    });
  };

  const getProductsListCategory = (product) => {
    ProductApis.getProductsByCategory(product?.attributes?.category).then(
      (res) => {
        setProductList(res?.data?.data);
      }
    );
  };

  return (
    <div className="px-8 md:px-28 py-8">
      <BreadCrumb path={pramas} />
      <div className="mt-10 grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-5 sm:gap-0">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div className="">
        <h2 className="mt-20 mb-6 text-2xl font-bold">Similar Products</h2>
        <ProductList productList={productList} />

      </div>
    </div>
  );
};

export default ProductDetails;
