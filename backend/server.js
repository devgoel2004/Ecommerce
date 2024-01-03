const app = require("./app");
const dotenv = require("dotenv");
//config
dotenv.config({ path: "backend/config/config.env" });
const connectDB = require("./config/database");

connectDB();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught Exception`);
  process.exit(1);
});

//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error :${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
