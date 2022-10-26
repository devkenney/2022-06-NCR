 var merge = function(intervals) {
  // First, sort list items in ascending order
  
  intervals.sort((a, b) => a[0] - b[0])
  
  // make an array to store the result in, and stick the first item in it to start
  
  const result = [intervals[0]]
  
  // create a for loop to iterate over the intervals array
  
  for(let interval of intervals) {
      
      // grab the values we are going to need from that array
      
      
      let end1 = result[result.length - 1][1]
      let start2 = interval[0]
      let end2 = interval[1]
  
      // Compare the first two list items, to see if they overlap
      // to do this, we first see if the starting item of the second mini array is less than the ending item of the first array
      // if this is true, we know that they overlap!
      
      if (end1 >= start2) {
          result[result.length - 1][1] = Math.max(end1, end2)
      } else {
          result.push(interval)
      }
  }
  
  // once we know they overlap, we have to grab the first item of the first mini array, and the last item of the mini array that is greater (because the first array can technically encompass the second one => [1, 5] and [2, 4]) and set those to a new mini array in the result.
  
  // once we've done that, we move on to the next set! and repeat
  
  // at the very end, we return the result
  
  return result;
};

console.log(merge([[1,6],[2,4],[8,10],[15,18]]))