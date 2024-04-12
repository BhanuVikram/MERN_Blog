const Blogpost = require("../models/blogpost.model");

// * CREATE NEW BLOGPOST - ADMIN

function splitParagraphs(inputString) {
  const paragraphs = inputString.split(/\n/);
  return paragraphs.filter((str) => str.trim() !== "");
}

exports.createBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    const newBlogpost = new Blogpost({
      title: req.body.title,
      content: splitParagraphs(req.body.content),
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

exports.updateBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleBlogpost = await Blogpost.findById(req.params._id);
    if (!singleBlogpost) {
      return res.send("Blogpost not found!");
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
      message: "Blog updated successfully!!!",
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: `Error ${err.message}`,
    });
  }
};

// * DELETE BLOGPOST - ADMIN

exports.deleteBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleBlogpost = await Blogpost.findById(req.params._id);
    if (!singleBlogpost) {
      return res.send("Blogpost not found!");
    }
    Blogpost.deleteOne({ _id: req.params._id }).then(() => {
      res.json("Blogpost deleted successfully!");
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: `Error ${err.message}`,
    });
  }
};

// * GET A SINGLE BLOGPOST

exports.getSingleBlogpost = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleBlogpost = await Blogpost.findById(req.params._id);
    if (!singleBlogpost) {
      return res.send("Blogpost not found!");
    }
    res.status(200).json({
      success: true,
      singleBlogpost,
      message: "Got the blogpost!",
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: `Error ${err.message}`,
    });
  }
};

// * GET ALL BLOGPOSTS

function splitParagraphs(inputString) {
  const paragraphs = inputString.split(/\n/);
  let paragraphsArray = paragraphs.filter((str) => str.trim() !== "");
  return paragraphsArray.slice(0, 2);
}

exports.getAllBlogposts = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allBlogposts = await Blogpost.find().populate("author", "username");

    allBlogposts.map(
      (blogpost, index) => (blogpost.content = blogpost.content.splice(0, 1))
    );
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
