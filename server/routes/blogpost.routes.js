const express = require("express");
const router = express.Router();

// * MIDDLEWARES IMPORT

const {
  isAuthenticated,
  isAuthorized,
} = require("../middlewares/auth.middlerwares");

// * CONTROLLERS IMPORT

const {
  createBlogpost,
  getAllBlogposts,
  deleteBlogpost,
  updateBlogpost,
} = require("../controllers/blogpost.controllers");

// * CONTROLLERS USE

router
  .route("/createblogpost")
  .post(isAuthenticated, isAuthorized("admin"), createBlogpost);

router.route("/getallblogposts").get(getAllBlogposts);

router
  .route("/deleteblogpost/:_id")
  .delete(isAuthenticated, isAuthorized("admin"), deleteBlogpost);

router
  .route("/updateblogpost/:_id")
  .put(isAuthenticated, isAuthorized("admin"), updateBlogpost);

module.exports = router;
