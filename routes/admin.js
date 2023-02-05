const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, '../svelte/public/admin.html'));
});
module.exports = router;