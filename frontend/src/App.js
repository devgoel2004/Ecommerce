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
import Profile from "./components/User/Profile";
import { loadUser } from "./actions/userAction";
import store from "./store";
import UserOptions from "./components/Layout/Header/UserOptions";
import UpdateProfile from "./components/User/UpdateProfile";
import { useSelector } from "react-redux";
import ProtectRoute from "./components/Route/ProtectRoute";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const url = window.location.href;
  console.log(url);
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
        {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:keyword" element={<Product />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSignup />} />
          {isAuthenticated ? (
            <>
              <Route path="/account" element={<Profile />} />
              <Route path="/me/update" element={<UpdateProfile />} />
            </>
          ) : (
            <></>
          )}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
