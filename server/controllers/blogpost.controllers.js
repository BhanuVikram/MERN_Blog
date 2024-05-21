const Blogpost = require("../models/blogpost.model");

// * CREATE NEW BLOGPOST - ADMIN

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
      message: "Blog created successfully!",
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

exports.updateBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleBlogpost = await Blogpost.findById(req.params._id);
    if (!singleBlogpost) {
      return res.status(404).json({
        success: false,
        message: "Blogpost not found!",
      });
    }
    singleBlogpost = await Blogpost.findByIdAndUpdate(
      req.params._id,
      req.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.status(200).json({
      success: true,
      singleBlogpost,
      message: "Blog updated successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * DELETE BLOGPOST - ADMIN

exports.deleteBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleBlogpost = await Blogpost.findById(req.params._id);
    if (!singleBlogpost) {
      return res.status(404).json({
        success: false,
        message: "Blogpost not found!",
      });
    }
    Blogpost.deleteOne({ _id: req.params._id }).then(() => {
      res.status(200).json({
        success: true,
        message: "Blogpost deleted successfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET A SINGLE BLOGPOST

exports.getSingleBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleBlogpost = await Blogpost.findById(req.params._id).populate(
      "author",
      `${"firstname"} ${"lastname"}`
    );
    if (!singleBlogpost) {
      return res.status(404).json({
        success: false,
        message: "Blogpost not found!",
      });
    }
    res.status(200).json({
      success: true,
      singleBlogpost,
      message: "Got the blogpost!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};

// * GET ALL BLOGPOSTS

function extractChars(body) {
  if (body.length <= 625) {
    return body;
  } else {
    return body.slice(0, 625) + "...";
  }
}

exports.getAllBlogposts = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allBlogposts = await Blogpost.find().populate(
      "author",
      `${"firstname"} ${"lastname"}`
    );

    allBlogposts.map(
      (blogpost, index) => (blogpost.content = extractChars(blogpost.content))
    );

    res.status(200).json({
      success: true,
      allBlogposts,
      message: "Got all blogposts!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Error ${error.message}`,
    });
  }
};
