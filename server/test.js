const fs = require("fs");

const currentDir = fs.readFileSync(__dirname);

currentDir.forEach((file) => {
  console.log(file);
});
