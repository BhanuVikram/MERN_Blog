const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: [4, "Title cannot be shorter than four characters"],
    maxlength: [64, "Title cannot be longer than 64 characters"],
    required: [true, "Please enter a title"],
  },
  content: {
    type: String,
    minlength: [128, "Content cannot be shorter than 128 characters"],
    maxlength: [32768, "Content cannot be longer than 32768 characters"],
    required: [true, "Please enter your blog content"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Blogpost", blogpostSchema);