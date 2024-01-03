//creating token and saving it
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  //options for cookie
  const cookieExpire = parseInt(process.env.COOKIE_EXPIRE);
  const options = {
    expires: new Date(Date.now() + cookieExpire * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
