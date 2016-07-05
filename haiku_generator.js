function createHaiku(structure, object){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      // array of words matching syallable
      arrOfWords = object[syls];
      // choose random word from given syllable array
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}
module.exports.createHaiku = createHaiku;