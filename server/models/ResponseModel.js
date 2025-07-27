const mongoose = require("mongoose");

const PHQ9ResponseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true }, // Use ISO date string (e.g., "2025-01-13")
  responses: { type: [Number], required: true }, // Array of 9 responses (0–3)
  score: { type: Number, required: true },
  severity: { type: String, required: true },
});

module.exports = mongoose.model("PHQ9Response", PHQ9ResponseSchema);
