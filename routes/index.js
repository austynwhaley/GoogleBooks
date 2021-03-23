const express = require('express');
const router = express.Router();

const controller = require("../controllers/book");

router.route("/books")
    .get(controller.findAll)
    .post(controller.save)

router.route("/books/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove)

module.exports = router;