// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const randomNumbers = [5, 7, 10, 82, 100, 42, 3004];

const greaterTen = randomNumbers.find((num) => num > 10);

console.log(greaterTen);