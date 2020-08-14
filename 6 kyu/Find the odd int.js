{/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/}

function findOdd(arr) {
  arr = arr.sort()
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]){
      count++;
    } else {
      if (count % 2){
        count = 0;
      } else {
       return arr[i];
      }
    }
  }
  return count;
}
