import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
const ProtectRoute = ({ component: component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  return <Fragment>{!loading && <Route />}</Fragment>;
};

export default ProtectRoute;
