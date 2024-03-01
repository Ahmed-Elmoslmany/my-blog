const express = require("express");
const Author = require("./authorModel");
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  metaData: {
    title: {
      type: String,
      required: [true, "Article must have a title"],
      unique: true,
    },
    writtenAt: {
      type: String,
      required: [true, "Article must have a written date"],
    },
    lastUpdatedAt: {
      type: String,
      required: [true, "Article must have last updated date"],
    },
    readTime: {
      type: String,
      required: [true, "Article must have a read time"],
    },
    cover: {
      type: String,
      required: [true, "Article must have a cover"],
    },
    hook: {
      type: String,
      required: [true, "Article must have a hook"],
    }
  },
  tags: {
    type: [String],
    required: [true, "Article must have tags"],
  },
  content: {
    type: String,
    required: [true, "Article must have content"],
    unique: true,
    minlength: [2000, "Article content must be at least 25001 characters"],
    maxlength: [20000, "Article content must be at most 20000 characters"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: [true, "Article must have an author"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
