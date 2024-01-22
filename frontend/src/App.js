import Header from "./components/Layout/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./components/Layout/Footer/Footer";
import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import Product from "./components/Product/Product";
import Search from "./components/Product/Search";
import LoginSignup from "./components/User/LoginSignup";
import { loadUser } from "./actions/userAction";
import store from "./store";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:keyword" element={<Product />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
