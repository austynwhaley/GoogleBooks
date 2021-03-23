const db = require("../models");
const axios = require("axios");

module.exports = {

    searchApi: (req, res) => {

        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))

    },

    findAll: (req, res) => {
        db.Books
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Books
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    save: (req, res) => {
        db.Books
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: (req, res) => {
        db.Books
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        db.Books
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

};

