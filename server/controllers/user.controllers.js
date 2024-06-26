const User = require("../models/user.model.js");

// * SIGN UP

exports.signUp = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();

    const token = await newUser.generateToken();

    return res.status(201).json({
      success: true,
      newUser,
      token,
      message: "Sign up successful!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Sign up failed. The error is ${error.message}`,
    });
  }
};

// * SIGN IN

exports.signIn = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).json({
        success: false,
        message: "Username and password fields cannot be empty",
      });
    }

    const user = await User.findOne({
      username,
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Incorrect username or password",
      });
    }

    const isSamePassword = await user.comparePassword(password);

    if (!isSamePassword) {
      return res.status(404).json({
        success: false,
        message: "Incorrect username or password",
      });
    }

    const token = await user.generateToken();
    res.status(200).json({
      success: true,
      user,
      token,
      message: "Log in successful!",
      expires: process.env.JWT_EXPIRE,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `Log in error: ${error.message}`,
    });
  }
};

// * SIGN OUT

exports.signOut = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Log out successful",
  });
};

// * MY PROFILE

exports.myProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user).populate(
      "firstname lastname username email role"
    );

    res.status(200).json({
      success: true,
      user,
      message: "User profile fetched successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: `User profile error: ${error.message}`,
    });
  }
};
