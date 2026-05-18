
const marks = [10, 20, 30, 40, 5];

// Using the spread operator to pass array elements as arguments to Math.min
const smallest = Math.min(...marks);

console.log(`The smallest number in the array [${marks}] is: ${smallest}`);
