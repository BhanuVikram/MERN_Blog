const express = require("express");

// * CONTROLLERS IMPORT

const { signUp, signIn } = require("../controllers/user.controllers.js");

const router = express.Router();

// * CONTROLLERS USE

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

module.exports = router;
