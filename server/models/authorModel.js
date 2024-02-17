const express = require("express");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Author must have a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Author must have an email"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  profileImageUrl: {
    type: String,
    required: [true, "Article must have an author profile image"],
  },
  bio: {
    type: String,
    required: [true, "Article must have an author bio"],
    minlength: [50, "Author bio must be at least 100 characters"],
    maxlength: [500, "Author bio must be at most 500 characters"],
  },
  articleCount: {
    type: Number,
    default: 0, // Initialize to zero
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;