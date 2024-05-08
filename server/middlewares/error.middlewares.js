const ErrorHandler = require("../utils/errorHandler");

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error";

  // * cast error
  // * Wrong mongodb id error
  if (error.name === "CaseError") {
    const message = `Resource not found. Invalid : ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  // * Mongoose Dublicate key error
  if (error.code === 11000) {
    const message = `Dublicate ${Object.keys(error.keyValue)} Entered`;
    error = new ErrorHandler(message, 400);
  }

  // * Wrong JWT token error
  if (error.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, try again`;
    error = new ErrorHandler(message, 400);
  }

  // * JWT Expire error
  if (error.name === "TokenExpiredError") {
    const message = `Json Web Token is expired, try again`;
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    // * error : error.stack
    // * for exact error (detailed one)
  });
};
