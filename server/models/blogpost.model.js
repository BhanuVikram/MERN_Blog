const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: [2, "Title cannot be shorter than 2 characters"],
    maxlength: [80, "Title cannot be longer than 80 characters"],
    required: [true, "Please enter a title"],
  },
  content: [
    {
      type: String,
      minlength: [100, "Content cannot be shorter than 100 characters"],
      maxlength: [30000, "Content cannot be longer than 30000 characters"],
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
