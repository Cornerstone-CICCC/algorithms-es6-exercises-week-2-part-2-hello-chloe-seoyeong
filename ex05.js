// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const randomNumbers = [1, 63, 7, 33, 66, 185, 3];

const checkEven = randomNumbers.some((num) => {
  return num%2 === 0;
})

console.log(checkEven);