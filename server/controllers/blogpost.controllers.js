const Blog = require("../models/blogpost.model");

// * CREATE NEW BLOG - ADMIN

exports.createBlog = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    const newBlogpost = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
    });
    await newBlogpost.save();
    return res.status(201).json({
      success: true,
      newBlogpost,
      message: "Blog created successfully!!!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Blog creation failed. The error is ${error.message}`,
    });
  }
};

// * EDIT BLOGPOST - ADMIN

// * DELETE BLOGPOST - ADMIN

// * GET ALL BLOGPOSTS
