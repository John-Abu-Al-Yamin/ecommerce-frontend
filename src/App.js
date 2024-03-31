import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import CartPage from "./components/CartPage";

import About from "./components/About";
import Footer from "./components/Footer";
import Contect from "./components/Contect";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <ToastContainer position="top-center" theme="dark" />
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/sign-in" element={<Auth />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
