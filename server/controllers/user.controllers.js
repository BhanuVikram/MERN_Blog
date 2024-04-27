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
    console.log("token:", token);
    return res.status(201).json({
      success: true,
      newUser,
      token,
      message: "Sign up successful!!!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: `Sign up failed. The error is ${err.message}`,
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
    console.log("isSamePassword:", isSamePassword);
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
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: `Log in error: ${err.message}`,
    });
  }
};

// * MY PROFILE

exports.myProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user).populate(
      "firstname lastname username email role"
    );
    console.log(`My Profile: ${user}`);
    res.status(200).json({
      success: true,
      user,
      message: "User profile fetched successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succes: false,
      message: `User profile error: ${err.message}`,
    });
  }
};
