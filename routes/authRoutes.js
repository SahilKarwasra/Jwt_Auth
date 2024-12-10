const express = require("express");
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/protected", protect, (req, res) => {
  res.status(200).json({
    l̥message: "Access granted to protected route",
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Generate JWT for authenticated user
    const token = jwt.sign(
      {
        id: req.user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.json({
      message: "Login successful",
      token,
    });
  }
);

module.exports = router;
