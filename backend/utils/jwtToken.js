//Create Token and saving in Cookie
const Cookies = require("js-cookie");
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  console.log(token);
  // Cookies.set("token", token, { expires: 5, secure: true });
  res.cookie("token", token, options);
  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
