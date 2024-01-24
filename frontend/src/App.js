import React, { useEffect } from "react";
import "./App.css";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import WebFont from "webfontloader";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import Product from "./components/Product/Product";
import Search from "./components/Product/Search";
import LoginSignup from "./components/User/LoginSignup";
import Profile from "./components/User/Profile";
import { loadUser } from "./actions/userAction";
import UserOptions from "./components/Layout/Header/UserOptions";
import UpdateProfile from "./components/User/UpdateProfile";
import { useSelector } from "react-redux";
import UpdatePassword from "./components/User/UpdatePassword";
import Error from "./components/Error/Error";
import ForgetPassword from "./components/User/ForgetPassword";
import ResetPassword from "./components/User/ResetPassword";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
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
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Product />} />
          <Route path="/products/:keyword" element={<Product />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LoginSignup />} />
          {isAuthenticated ? (
            <>
              <Route exact path="/account" element={<Profile />} />
              <Route exact path="/me/update" element={<UpdateProfile />} />
            </>
          ) : (
            <></>
          )}
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/password/forget" element={<ForgetPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
