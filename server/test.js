const fs = require("fs");

const currentDir = fs
  .readdirSync(__dirname + "/controllers")
  .filter((file) => file.endsWith(".js"));

console.log(currentDir);
