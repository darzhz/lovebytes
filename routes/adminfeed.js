const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const path = require("path");
const database = require("../model/db");
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get("/", async (req, res, next) => {
    let db = database.initDb();
    console.log("admin logged in")
    let result = await db.find({}).sort({ time: -1 }).exec(function (err, docs) {res.send(docs)});
});
router.post("/",jsonParser,async (req, res, next) => {
    console.log('Got body:',req.body.id);
    res.send({ status: 'SUCCESS' });
});
module.exports = router;