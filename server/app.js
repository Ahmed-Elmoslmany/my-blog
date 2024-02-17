const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


const AppError = require('./utils/appError')

const articleRoutes = require("./routes/articleRoutes");
const authorRoutes = require("./routes/authorRoutes");

const app = express();

app.use(cors());

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// Routes
app.use("/api/v1/articles", articleRoutes);
app.use("/api/v1/authors", authorRoutes);

// Here handle any other routes doesn't exist
app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `The url ${req.originalUrl} not found!`
  // })

  const err = new AppError(`The url ${req.originalUrl} not found!`, 404);

  next(err);
});
module.exports = app;
