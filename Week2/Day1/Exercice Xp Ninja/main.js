//Exercice 1

5 >= 1 // true
0 === 1 //false
4 <= 1 // false
1 != 1 //false
"A" > "B" //false
"B" < "C" //true
"a" > "A" // true
"b" < "A" // false
true === false //flase
true != true //false

//Exercice2

/*const input = prompt('Enter a list of numbers separated by commas:');
const numbers = input.split(',');
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i]);
}
console.log(`The sum of the numbers is: ${sum}`);*/

//Exercice3

/*const inpu = prompt('Enter a sentence containing the word "Nemo":');
const index = inpu.indexOf('Nemo');

if (index === -1) {
  console.log("I can't find Nemo");
} else {
  console.log(`I found Nemo at ${index}`);
}*/

//exercice 4

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





