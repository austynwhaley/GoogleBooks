const mongoose = require("mongoose");
const { Books } = require(".");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    title: { type: String, required: true },

    authors: [{ type: String, required: true }],

    description: String,

    image: String,
    
    link: String
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;