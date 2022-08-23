/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.
*/

// first, we need to compare the lengths of the two arrays to make sure they have the same number of values
// next, we need to square all of the values of the first array.
// after that, we make a counter object for how many values appear of each type in the first array.
// next, we do the same for the second array
// finally, we compare the two objects we made to see if they have the same number of numbers in them

function same(arr1, arr2){
  let frequency = {}
  let frequency2 = {}
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) { // loops over arr1
    arr1[i] *= arr1[i] // multiplies the currently looped over value by itself (squares it)
    if (frequency[arr1[i]]) { // if a key with the name of the currently looped over value exists
      frequency[arr1[i]]++ // add 1 to it
    } else { // else
      frequency[arr1[i]] = 1 // make a new key with the name of the currently looped over value, and set its value to 1
    }
  }

  for (let i = 0; i < arr2.length; i++) { // loops over arr1
    if (frequency2[arr2[i]]) { // if a key with the name of the currently looped over value exists
      frequency2[arr2[i]]++ // add 1 to it
    } else { // else
      frequency2[arr2[i]] = 1 // make a new key with the name of the currently looped over value, and set its value to 1
    }
  }

  // console.log(frequency);
  // console.log(frequency2);

  const frequencyKeys = Object.keys(frequency);

  for (let i = 0; i < frequencyKeys.length; i++) { // loops over just the keys of the frequency object
    if (frequency[frequencyKeys[i]] !== frequency2[frequencyKeys[i]]) { // if the value of the key that is the same in both objects is not the same
      return false // returns false
    }
  }
  return true // if all of the keys pass inspection, returns true
}

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)

console.log(same([3, 6, 6, 4, 8, 8], [9, 36, 36, 16, 64, 64]))