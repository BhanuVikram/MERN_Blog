const express = require("express");
const router = express.Router();

// * MIDDLEWARES IMPORT

const {
  isAuthenticated,
  isAuthorized,
} = require("../middlewares/auth.middlerwares");

// * CONTROLLERS IMPORT

const { createBlog } = require("../controllers/blog.controllers");

// * CONTROLLERS USE

router
  .route("/createblog")
  .post(isAuthenticated, isAuthorized("admin"), createBlog);

module.exports = router;
