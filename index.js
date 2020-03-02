require("dotenv").config();
const server = require("./API/server.js");
const port = process.env.PORT || 7000;

server.listen(port, () => console.log("\n* Server Running *\n", port));