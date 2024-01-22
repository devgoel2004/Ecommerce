const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
//check user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  let token = req.headers.authorization;
  let token1 = req.cookies.token;
  if (!token && !token1) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
  if (!token) {
    token = token1;
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodeData.id);
  next();
});

//check authorization of user
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
