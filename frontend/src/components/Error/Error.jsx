import React, { Fragment } from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Fragment>
      <div className="errorPage">
        <div>
          <div className="errorIcon">
            <SentimentDissatisfiedIcon
              style={{ fontSize: "5rem", color: "rgba(81, 79, 79, 0.54)" }}
            />
          </div>
          <h1 className="errorHeading">
            <span style={{ fontSize: "4rem", fontWeight: "200" }}>404</span>
            <br /> Error Page Not Found !
          </h1>
          <div className="errorBtn">
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
