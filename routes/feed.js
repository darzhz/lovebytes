const express = require("express");
const router = express.Router();
const path = require("path");
const database = require("../model/db");
router.get("/", async (req, res, next) => {
    let db = database.initDb();
    //let result = await db.find({}, function (err, docs) {res.send(docs)});
    let result = await db.find({}).sort({ time: -1 }).exec(function (err, docs) {res.send(docs)});
});
module.exports = router;