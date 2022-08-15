let colors = ['yellow', 'green', 'blue', 'purple']

const getMultipleLengths = (words) => {
  let lengths = []
  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length)
  }
  return lengths;
}

console.log(getMultipleLengths(colors))

const getLongestWord = (words) => {
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(getLongestWord(colors))