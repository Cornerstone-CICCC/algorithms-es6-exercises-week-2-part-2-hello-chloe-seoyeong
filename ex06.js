// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const ramdomNumbers = [ 6, -1, 30, 3, 5, -45, 33];
const positiveNumbers = [1, 2, 3, 4, 5, 6];

// const checkPositive = ramdomNumbers.every((num) => {
//   return num > 0;
// })

const checkPositive = function (arr) {
  return arr.every((num) => num > 0);
}
console.log(checkPositive(ramdomNumbers));
console.log(checkPositive(positiveNumbers));