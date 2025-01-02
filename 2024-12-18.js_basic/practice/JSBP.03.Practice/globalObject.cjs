const fs = require("fs");

const data = fs.readFileSync(__dirname + "/input.txt", "utf8");

console.log(data);