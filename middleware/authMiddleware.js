const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware to protect routes
exports.protect = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({
      error: "No token, authorization denied",
    });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({
      error: "Invalid token",
    });
  }
};
