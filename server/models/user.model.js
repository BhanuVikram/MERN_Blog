const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  username: {
    type: String,
    maxlength: [30, "Username cannot exceed thirty characters"],
    required: [true, "Please enter valid username"],
    unique: [true, "Username already exists. Please choose another one."],
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email address"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    minlength: [8, "Password cannot be shorter than eight characters"],
    required: [true, "Please enter valid password"],
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

userSchema.methods.verifyToken = async function (token) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded) {
    return decoded;
  } else {
    return false;
  }
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
