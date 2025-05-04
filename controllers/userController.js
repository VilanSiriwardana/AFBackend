const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Register User
exports.registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const user = new User({ username, email, password, role });
    await user.save();

    const accessToken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      message: "User registered successfully",
      accessToken,
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    const accessToken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      accessToken,
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
