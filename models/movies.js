"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

/** Related functions for users. */

class Movie {
  static async findAll() {
    const result = await db.query(
      `SELECT id,
              year,
              imdb,
              title,
              plot,
              poster,
              actual_score
           FROM movies
           ORDER BY id`,
    );

    return result.rows;
  }

  static async get(id) {
    const movieRes = await db.query(
          `SELECT id,
              year,
              imdb,
              title,
              plot,
              poster,
              actual_score
           FROM movies
           WHERE id = $1`,
        [id],
    );

    const movie = movieRes.rows[0];

    if (!movie) throw new NotFoundError(`No movie of id: ${id}`);

    return movie;
  }
}


module.exports = Movie;
