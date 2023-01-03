// Choose a word for the player to guess
const word = "javascript";

// Set the number of chances the player has to guess the word
let guessesLeft = 10;

// Create an array to store the letters the player has guessed
let guessedLetters = [];

// Create a flag to track whether the game is over
let gameOver = false;

// Define a function to display the word with correctly guessed letters
function displayWord() {
  let display = "";
  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word[i])) {
      display += word[i];
    } else {
      display += "_";
    }
  }
  console.log(display);
}

// Define a function to handle the player's guess
function guessLetter(letter) {
  // Add the letter to the array of guessed letters
  guessedLetters.push(letter);

  // Check if the letter is in the word
  if (word.includes(letter)) {
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
    guessesLeft--;
  }

  // Check if the player has run out of guesses or if they have guessed all the letters in the word
  if (guessesLeft === 0 || !word.includes("_")) {
    gameOver = true;
  }
}

// Run the game loop as long as the game is not over
while (!gameOver) {
  console.log(`You have ${guessesLeft} guesses left.`);
  displayWord();
  let letter = prompt("Guess a letter:");
  guessLetter(letter);
}

// Display a message to the player indicating whether they won or lost
if (guessesLeft === 0) {
  console.log("You lost! The word was: " + word);
} else {
  console.log("You won! The word was: " + word);
}
