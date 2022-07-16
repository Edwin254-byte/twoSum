/**
 *
 * @param {Array} arr
 * @param {integer} s -the sum
 */

function twoSum(arr, s) {
  let isPresent = false;
  if (arr.length == 0) return "Passed an empty array";

  if (typeof s != "number" || typeof arr[0] != "number")
    return "The array elements and the sum should be a number!!";

  if (arr.length === 1 && arr[0] === s) {
    isPresent = true;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (typeof arr[i] != "number" || typeof arr[j] != "number")
          return "The array elements should be a number!!";
        if (i !== j && arr[i] + arr[j] === s) {
          isPresent = true;
          break;
        }
      }
    }
  }

  return isPresent;
}

function output(caseNumber) {
  console.log(`Test case ${caseNumber}: \n ${twoSum(arr, sum)}`);
}

// testing
// case 1
let arr = [9];
let sum = 9;

output(1);

// case 2
arr = [];
output(2);

// case 3
arr = [" ", 23];

output(3);
// case 4
arr = [12, 3, 24, 54, 122];
sum = "";

output(4);

// case 5
sum = 15;
output(5);
