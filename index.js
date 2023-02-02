require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const build = path.join(__dirname, "svelte/public");
app.use(express.static(build));
app.use('/feed',require('./routes/feed'));
 app.use('/report',require('./routes/report'));
server.listen(process.env.PORT, () => {
  console.log(`realnotes listening on port ${process.env.PORT}`);
});