const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoutes");
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
//middleware for errors
app.use(errorMiddleware);
module.exports = app;
