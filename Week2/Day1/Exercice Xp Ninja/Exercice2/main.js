/**
 * Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods
 */

const input = prompt('Enter a list of numbers separated by commas:');
const numbers = input.split(',');
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i]);
}
console.log(`The sum of the numbers is: ${sum}`);