const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  if (!req.headers.authorization) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: No authentication header",
    });
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please log in first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = "";
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};

exports.isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        message: `You are not authorized to access this resource!`,
      });
    }
    next();
  };
};
