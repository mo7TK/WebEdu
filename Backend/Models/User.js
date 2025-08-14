const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    prenom: {
      type: String,
      required: true,

    },
    nom: {
      type: String,
      required: true,
    },
    dateNaissance: {
      type: Date,
      required: true,
    },
      universite: { 
    type: String, 
    required: true, 
    
  },
    specialite: { 
    type: String, 
    required: true,  
  },
    niveau: { 
    type: String, 
    required: true 
  },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // basic security
    },
    points: {
      type: Number,
      default: 50, // every new account starts with 50 points
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user", 
    },
  },
  { timestamps: true }
); // timestamps = createdAt, updatedAt

module.exports = mongoose.model("User", userSchema);
