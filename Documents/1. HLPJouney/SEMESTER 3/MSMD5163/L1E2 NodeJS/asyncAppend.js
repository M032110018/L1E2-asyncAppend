var fs = require('fs');

console.log("Begin reading file");
fs.readFile('input.txt', function (err,data){
	if(err) return console.error(err);
	console.log(data.toString());
	console.log("End reading file\n");
});

fs.appendFile('input.txt', 'Adding new text here..', (err) => {
	if (err) throw err;
	console.log("Appending something");
	console.log("Successfully appending something\n");
});

fs.readFile('input.txt', function (err,data){
	if(err) return console.error(err);
	console.log("Begin re-reading file");
	console.log(data.toString());
	console.log("Finish re-reading file");
});