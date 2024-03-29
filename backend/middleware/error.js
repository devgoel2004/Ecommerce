const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongoDB ID error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400); // bad request
  }

  //mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //JWT EXPIRE ERROR
  if (err.name === "TokenExpiredError") {
    const message = `Json web token is expired. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({ success: false, error: err.message });
};
