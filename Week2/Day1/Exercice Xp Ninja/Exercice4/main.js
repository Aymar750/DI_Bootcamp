/**
 * Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

If the number given is less than 2 : return “boom”
If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
If the number given is evenly divisible by 2, add a exclamation mark to the end.
If the number given is evenly divisible by 5, return the string in ALL CAPS.
If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
 */

let num = prompt("Please enter a number:");
const result = "boom"
if (num < 2) {
  console.log("boom");
} else if (num % 2 === 0 && num % 5 === 0) {
  console.log("BOOM!".toUpperCase());
} else if (num % 2 === 0) {
  console.log("boom!".toLowerCase());
} else if (num % 5 === 0) {
  console.log("BOOM");
} else if(num > 2){
  console.log("B" + "o".repeat(num) + "m");
}
