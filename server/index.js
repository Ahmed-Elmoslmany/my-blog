const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

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

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
  );

    
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected successfully');
    });
  const port = process.env.PORT || 3000;
  app.listen(port, '127.0.0.1', () => {
    console.log('sha8al ya kber');
  });
  
module.exports = app;
