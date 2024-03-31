import { SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartApis from "../utils/CartApis";
import { RiShoppingBag2Fill } from "react-icons/ri";

import Cart from "./Cart";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    CartApis.getUserCartItem(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        res?.data?.data.forEach((cartitem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: cartitem.id,
              product: cartitem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md relative">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="block" to="/">
            <span className="sr-only">Home</span>
            <svg
              id="logo-85"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="ccustom"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
                fill="#5417D7"
              ></path>
            </svg>
          </Link>

          <div className="flex items-center gap-8">
            <nav className={`md:block  ${menuOpen ? "" : "hidden "}`}>
              <ul
                className={`flex ${
                  menuOpen
                    ? "flex-col gap-4 items-center absolute shadow-md top-14 px-11 py-3 bg-gray-100"
                    : "items-center gap-6"
                } text-sm md:flex-row md:items-center`}
              >
                <li>
                  <Link
                    to=""
                    className="font-bold text-gray-500 transition hover:text-gray-500/75"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="font-bold text-gray-500 transition hover:text-gray-500/75"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contect"
                    className="font-bold text-gray-500 transition hover:text-gray-500/75"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              className="block rounded bg-gray-100 p-1 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="pr-3 flex items-center gap-3">
              {!user ? (
                <button className="block rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500">
                  <SignUpButton />
                </button>
              ) : (
                <div className="flex items-center flex-row-reverse gap-1">
                  <button className="block px-4 py-2.5 ">
                    <UserButton />
                  </button>
                  <button className="px-2 py-2.5 flex items-center gap-1">
                    <span className="text-2xl hover:text-primary" onClick={() => setOpenCart(!openCart)}><RiShoppingBag2Fill/></span> (
                    {cart?.length}){openCart && <Cart />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
