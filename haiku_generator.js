// function createHaiku(structure, object){
//   var arrOfWords;
//   return structure.map(function(lines){
//     return lines.map(function(syls){
//       // array of words matching syallable
//       arrOfWords = object[syls];
//       // choose random word from given syllable array
//       return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
//     }).join(' ');
//   }).join('\n');
// }

function getWords (arr, sylbcnt) {
	var num = sylbcnt;
	if (num === 0) {
		return ""
	}
	var numArr = Object.keys(arr).slice(1, num+1)
	var randomSylNum = parseInt(getRandom(numArr))
	var word = getRandom(arr[randomSylNum])
	return word+" "+getWords(arr, num-randomSylNum)
}

function getRandom (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function createHaiku(structure, object) {
	var structure = structure;
	for (i in structure){
		console.log(getWords(object, structure[i]))
	}
}
module.exports.createHaiku = createHaiku;