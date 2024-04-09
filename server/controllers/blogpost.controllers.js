const Blogpost = require("../models/blogpost.model");

// * CREATE NEW BLOG - ADMIN

exports.createBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    const newBlogpost = new Blogpost({
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
exports.getAllBlogposts = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allBlogposts = await Blogpost.find();
    res.status(200).json({
      success: true,
      allBlogposts,
      message: "Got all blogposts!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: `Error ${err.message}`,
    });
  }
};
