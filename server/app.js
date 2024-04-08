const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

// * CORS

const corsOptions = {
  // origin: [
  //   "http://localhost:5173, http://localhost:3000, https://abcde-frontend.vercel.app/",
  // ],
  origin: "*",
  credentials: true,
  accessControlAllowOrigin: "*",
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS", // Only mention methods that you want to allow "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  accessControlAllowCredentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// * IMPORT ROUTES

const signUp = require("./routes/user.routes");
const createBlog = require("./routes/blogpost.routes");

// * CALL ROUTES

app.use("/api/v1", signUp);
app.use("/api/v1", createBlog);

module.exports = app;
