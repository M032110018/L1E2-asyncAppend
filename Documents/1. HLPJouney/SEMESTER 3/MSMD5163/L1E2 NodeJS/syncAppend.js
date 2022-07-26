var fs = require('fs');
var data = fs.readFileSync("input.txt");
var appendData = fs.appendFileSync("input.txt", "Adding new text here..");

console.log("Begin reading File");
console.log(data.toString());
console.log("End reading file");

console.log("Appending something");
console.log("Successfully appending something");

console.log("Begin re-reading file");
console.log(data.toString());
console.log("Finish re-reading file");
