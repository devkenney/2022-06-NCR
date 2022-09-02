// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// use a frequencyCounter no nested loops

function maxChar(str) {
  let frequency = {};
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1
    }
  }

  console.log(frequency);

  let frequencyKeys = Object.keys(frequency); // creates a new array with all of the keys from the frequency object.

  let maxNumChars = null // creates a variable to store the character with the largest number of uses

  for (let i = 0; i < frequencyKeys.length; i++) { // loops over the frequencyKeys array
    if (maxNumChars === null) { // the first time, it will set the variable to whatever key is first (to set a baseline)
      maxNumChars = frequencyKeys[i];
    } else if (frequency[frequencyKeys[i]] > frequency[maxNumChars]) { // else if the number of characters of the character that is being looped over is greater than the one stored in the variable
      maxNumChars = frequencyKeys[i] // sets the variable equal to that character
    }
  }

  return maxNumChars;
}

console.log(maxChar("abcccccccd")) // === "c"
console.log(maxChar("apple 1231111")) // === "1
console.log(maxChar("aabbcc"))