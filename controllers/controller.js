const db = require("../models");
const axios = require("axios");

module.exports = {

    searchApi: (req, res) => {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers")
        .then((response) => res.json(response.data))
        .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res) {
      db.googleBooks
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.googleBooks
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      db.googleBooks
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.googleBooks
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };