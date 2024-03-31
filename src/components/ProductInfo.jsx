import React, { useContext, useEffect } from "react";
import Skeleton from "./Skeleton";

import { useNavigate } from "react-router-dom";
import CartApis from "../utils/CartApis";
import { useUser } from "@clerk/clerk-react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
const ProductInfo = ({ product }) => {
  const { user } = useUser();

  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Must Be login in");
      navigate("/sign-in");
      return; // Exit function early if user is not authenticated
    }
    const data = {
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        products: [product?.id],
      },
    };
    CartApis.addToCart(data)
      .then((res) => {
        setCart((oldCart) => [
          ...oldCart,
          {
            id: res?.data?.data?.id,
            product,
          },
        ]);
        toast.success("Product added to cart successfully");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };
  return (
    <>
      {product?.id ? (
        <div className="ml-3">
          <h2 className="text-2xl font-bold">{product?.attributes?.title}</h2>
          <h2 className="text-xl text-gray-400 font-bold">
            {product?.attributes?.category}
          </h2>
          <h2 className="text[15px] mt-5 font-bold">
            {product?.attributes?.description[0]?.children[0].text}
          </h2>
          {product?.attributes?.instantDelivery ? (
            <h2 className="text-[14px] text-gray-500 font-bold">
               Eligible For Instant Delivery
            </h2>
          ) : null}

          <h2 className="font-bold text-2xl text-primary mt-3">
            $ {product?.attributes?.price}
          </h2>

          <button
            onClick={handleAddToCart}
            className="font-bold bg-primary hover:bg-teal-600 p-3 text-white rounded-lg mt-2"
          >
            Add To Card
          </button>
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default ProductInfo;
