const express = require("express");
const router = express.Router();

// * MIDDLEWARES IMPORT

const {
  isAuthenticated,
  isAuthorized,
} = require("../middlewares/auth.middlerwares");

// * CONTROLLERS IMPORT

const { createBlogpost } = require("../controllers/blogpost.controllers");

// * CONTROLLERS USE

router
  .route("/createblogpost")
  .post(isAuthenticated, isAuthorized("admin"), createBlogpost);

module.exports = router;
