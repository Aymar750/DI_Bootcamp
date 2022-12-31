// Prompt the user for a number to start counting down bottles
let numBottles = prompt("Enter a number to start counting down bottles:");

// Initialize a counter variable to keep track of the number of bottles
let counter = numBottles;

// Loop through the number of bottles and console.log the lyrics of the song
while (counter > 0) {
  console.log(counter + " bottles of beer on the wall");
  console.log(counter + " bottles of beer");
  console.log("Take " + (numBottles - counter + 1) + " down, pass " + (numBottles - counter + 1 > 1 ? "them" : "it") + " around");
  console.log((counter - 1) + " bottles of beer on the wall");
  console.log(""); // Add an empty line for readability
  counter--;
}

// Print the final line of the song
console.log("No more bottles of beer on the wall");
