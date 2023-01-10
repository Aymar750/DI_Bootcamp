/**
 * Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


1. Console.log the sum of all the numbers in the age array.
2. Console.log the highest age in the array.
 */
let age = [20,5,12,43,98,55];
// 1. Console.log the sum of all the numbers in the age array.
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log(sum);

// 2. Console.log the highest age in the array.
let highestAge = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > highestAge) {
    highestAge = age[i];
  }
}
console.log(highestAge);
