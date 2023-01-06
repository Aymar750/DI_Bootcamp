function playTheGame() {
  // Ask the user if they want to play the game
  if (!confirm("Would you like to play the game?")) {
    alert("No problem, Goodbye");
    return;
  }

  // Ask the user to enter a number between 0 and 10
  let userNumber = prompt("Enter a number between 0 and 10");

  // Check if the user entered a valid number
  if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
    alert("Sorry, that is not a valid number. Goodbye.");
    return;
  }

  // Generate a random number for the computer
  let computerNumber = Math.round(Math.random() * 10);
  for (let i = 1; i < 3; i++) {
    // Check if the user's number is the same as the computer's
    if (userNumber == computerNumber) {
      alert("WINNER");
      return;
    }
    // Ask the user for another number
    else if (userNumber > computerNumber) {
      userNumber = prompt("Your number is bigger than the computer's, guess again");
    }
    else if (userNumber < computerNumber) {
      userNumber = prompt("Your number is smaller than the computer's, guess again");
    }

    // Check if the user entered a valid number
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      alert("Sorry, that is not a valid number. Goodbye.");
      return;
    }
  }

  //compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
  for (let i = 1; i < 3; i++) {
    // Check if the user's number is the same as the computer's
    if (userNumber == computerNumber) {
      alert("WINNER");
      return;
    }
    // Ask the user for another number
    else if (userNumber > computerNumber) {
      userNumber = prompt("Your number is bigger than the computer's, guess again");
    }
    else if (userNumber < computerNumber) {
      userNumber = prompt("Your number is smaller than the computer's, guess again");
    }

    // Check if the user entered a valid number
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      alert("Sorry, that is not a valid number. Goodbye.");
      return;
    }
  }

  alert("Out of chances");
}
