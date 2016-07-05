var fs = require("fs");
var haiku = require('./haiku_generator');
var cmudictFile = readCmudictFile('./cmudict.txt');
var wordObj = formatData(cmudictFile);
var createHaiku = haiku.createHaiku;

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}
function formatData(data){
	var words = {};
	var lines = data.toString().split("\n"),
		lineSplit
	lines.forEach(function(line){
		lineSplit = line.split("  ");
		if(lineSplit[1]){
			var word = lineSplit[0];
			var syllableCount = (lineSplit[1].match(/\d/g) || []).length;
			if(!words[syllableCount]) {
				words[syllableCount] = [];
			}
			words[syllableCount].push(word);
		}
	});
	return words;
}

createHaiku([5,7,5], wordObj);