const mongoose = require("mongoose");
const Article = require("../models/articleModel");
const Author = require("../models/authorModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/APIFeatures");

exports.createArticle = catchAsync(async (req, res) => {
  const newArticle = await Article.create(req.body);

  await Author.findByIdAndUpdate(req.body.author, {
    $inc: { articleCount: 1 },
  }); // update the author article count

  res.status(201).json({
    status: "success",
    data: {
      article: newArticle,
    },
  });
});

exports.getArticle = catchAsync(async (req, res) => {
  const article = await Article.findById(req.params.id).populate("author");

  res.status(200).json({
    status: "success",
    data: {
      article,
    },
  });
});

exports.getAllArticles = async (req, res) => {
    
    // Excute query
    const features = new APIFeatures(Article.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const articles = await features.query.populate('author');

    // Send response
    res.status(200).json({
      status: 'success',
      results: articles.length,
      data: {
        articles,
      },
    });
};
