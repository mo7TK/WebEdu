const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register new user
 * @access  Public
 */
router.post("/register", async (req, res) => {
  try {
    const { prenom, nom, dateNaissance, universite, specialite, niveau, email, password } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "❌ Email already registered" });

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create user
    const newUser = new User({
      prenom,
      nom,
      dateNaissance,
      universite,
      specialite,
      niveau,
      email,
      password: hashedPassword, // save hashed password
      points: 50, // default points
      role: "user"
    });

    await newUser.save();

    res.status(201).json({ msg: "✅ User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "❌ Server error" });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user & return token
 * @access  Public
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "❌ Invalid email or password" });

    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "❌ Invalid email or password" });

    // 3. Create JWT
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.json({
      token,
      user: {
        id: user._id,
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
        role: user.role,
        points: user.points
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "❌ Server error" });
  }
});

module.exports = router;
