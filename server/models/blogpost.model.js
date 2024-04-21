const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: [2, "Title cannot be shorter than 2 characters"],
    maxlength: [120, "Title cannot be longer than 120 characters"],
    required: [true, "Please enter a title"],
  },
  content: [
    {
      type: String,
      minlength: [1, "Content cannot be empty"],
      maxlength: [100000, "Content cannot be longer than 100,000 characters"],
      required: [true, "Please enter your blog content"],
    },
  ],
  date: {
    type: String,
    default: function () {
      return new Date().toISOString().slice(0, 10);
    },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Blogpost", blogpostSchema);
