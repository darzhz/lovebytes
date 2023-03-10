const express = require("express");
const bodyParser =  require("body-parser");
const router = express.Router();
const path = require("path");
const database = require("../model/db");
router.use(bodyParser.json());
router.post("/", async (req, res) => {
  let data = await req.body;
  // let message =`bug report from ${data.name}@${data.id} that ${data.desc}`;
  // console.log(message);
  let isoString = new Date(Date.now()).toISOString();
  let db = database.initDb();
  db.insert({
    name:data.name,
    id:data.id,
    approved:false,
    time: new Date(isoString),
    confession:data.desc
  });
  res.end();
});
module.exports = router;