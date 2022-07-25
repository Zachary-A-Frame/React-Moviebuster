"use strict";

/** Routes for users. */

// const jsonschema = require("jsonschema");

const express = require("express");
// const { BadRequestError } = require("../expressError");
const Movie = require("../models/movies.js");

const router = express.Router();

router.get("/", async function (req, res, next) {
    try {
        const movies = await Movie.findAll();
        return res.json({ movies });
    } catch (err) {
        return next(err);
    }
});

router.get("/:id", async function (req, res, next) {
    try {
        const movie = await Movie.get(req.params.id);
        return res.json({ movie });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
