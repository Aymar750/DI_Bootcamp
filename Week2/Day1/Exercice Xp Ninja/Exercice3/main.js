/**
 *  if statement (tomorrow’s lesson)

Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”.
 */

const input = prompt('Enter a sentence containing the word "Nemo":');
const index = input.indexOf('Nemo');

if (index === -1) {
  console.log("I can't find Nemo");
} else {
  console.log(`I found Nemo at ${index}`);
}