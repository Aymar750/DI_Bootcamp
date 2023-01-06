function playTheGame() {
    // Ask the user if they want to play the game
    let wantToPlay = confirm("Do you want to play the game?");
  
    if (!wantToPlay) {
      // If the user doesn't want to play, display a message and exit the function
      alert("No problem, Goodbye");
      return;
    }
  
    // Ask the user to enter a number between 0 and 10
    let userNumber = prompt("Enter a number between 0 and 10:");
  
    // Check the validity of the user's number
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      // If the user didn't enter a valid number, display a message and exit the function
      alert("Sorry, it's not a good number. Goodbye");
      return;
    }
  
    // Generate a random number between 0 and 10
    let computerNumber = Math.round(Math.random() * 10);
  
    // Compare the numbers and keep asking the user for a new number until they guess the computer's number or run out of chances
    let chances = 2;
    while (chances > 0) {
     /* if (userNumber == computerNumber) {
        // If the user guessed the computer's number, display a message and exit the function
        alert("WINNER");
        return;
      } else if (userNumber > computerNumber) {
        // If the user's number is bigger than the computer's, ask the user for a new number
        userNumber = prompt("Your number is bigger than the computer's. Guess again:");
      } else {
        // If the user's number is smaller than the computer's, ask the user for a new number
        userNumber = prompt("Your number is smaller than the computer's. Guess again:");
      }*/
      //compareNumbers(userNumber, computerNumber);
  
      // Decrement the chances counter
      chances--;
    }
  
    // If the user ran out of chances, display a message and exit the function
    alert("Out of chances");
}
  
function compareNumbers(userNumber, computerNumber) {
    // Compare the user's number to the computer's number
    if (userNumber == computerNumber) {
      // If the numbers are equal, display a message and exit the function
      alert("WINNER");
    } else if (userNumber > computerNumber) {
      // If the user's number is bigger than the computer's, display a message
      userNumber = prompt("Your number is bigger than the computer's. Guess again:");
    } else {
      // If the user's number is smaller than the computer's, display a message
      userNumber = prompt("Your number is smaller than the computer's. Guess again:");
    }
}
  