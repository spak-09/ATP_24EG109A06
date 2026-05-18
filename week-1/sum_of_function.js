
const findSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const numbers = [10, 20, 30, 40, 50];
const total = findSum(numbers);

console.log(`The sum of the array [${numbers}] is: ${total}`);
