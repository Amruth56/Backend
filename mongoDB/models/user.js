const mongoose = require("mongoose");
const Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/testapp1");


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true }
})

module.exports = mongoose.Schema('user', userSchema )