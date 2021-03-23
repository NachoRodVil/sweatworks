const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    bib: { type: Number, default: 0 },
    gender: { type: String, required: true },
    time: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    img: String,
    id_skills: String,
});

module.exports = mongoose.model("User", UserSchema);
