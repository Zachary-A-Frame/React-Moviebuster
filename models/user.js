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

class User {
    static async findAll() {
        const result = await db.query(
            `SELECT *
           FROM users
           ORDER BY score`,
        );

        return result.rows;
    }

    static async get(username) {
        const userRes = await db.query(
            `SELECT username,
                email,
                score
           FROM users
           WHERE username = $1`,
            [username],
        );

        const user = userRes.rows[0];

        if (!user) throw new NotFoundError(`No user of username: ${username}`);

        return user;
    }

    static async register(
        { username, password, email, score }) {
        const duplicateCheck = await db.query(
            `SELECT username
           FROM users
           WHERE username = $1`,
            [username],
        );

        if (duplicateCheck.rows[0]) {
            throw new BadRequestError(`Duplicate username: ${username}`);
        }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        const result = await db.query(
            `INSERT INTO users
           (username,
            password,
            email,
            score)
           VALUES ($1, $2, $3, $4)
           RETURNING username, email, score`,
            [
                username,
                hashedPassword,
                email,
                score
            ],
        );

        const user = result.rows[0];

        return user;
    }

    static async authenticate(username, password) {
        // try to find the user first
        const result = await db.query(
            `SELECT username,
                  password,
                  email,
                  score
           FROM users
           WHERE username = $1`,
            [username],
        );

        const user = result.rows[0];

        if (user) {
            // compare hashed password to a new hash from password
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
                delete user.password;
                return user;
            }
        }

        throw new UnauthorizedError("Invalid username/password");
    }

    static async update(username) {
        console.log(username)
        if (username) {
            const user = await db.query(`UPDATE users
            SET score = score + 10
            WHERE username = $1
            RETURNING username, score`, [username])
            return user
        } else {
            console.log("ERR")
        }
    }

    // {
    //     // Ensure user exists
    //     const result = await db.query(
    //         `SELECT username,
    //             score
    //        FROM users
    //        WHERE username = $1`,
    //         [username],
    //     );

    //     let user = result.rows[0];

    //     if (user) {
    //         const updateUser =
    //         `UPDATE users
    //         SET score = score + 10
    //         WHERE username = $1
    //         RETURNING username,
    //         score`
    //         await db.query(updateUser, [username])
    //     }
    //     if (!user) throw new NotFoundError(`No user: ${username}`);

    //     return user;
    // }

}


module.exports = User;
