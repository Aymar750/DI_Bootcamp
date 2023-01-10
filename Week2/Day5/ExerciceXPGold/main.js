let inputString = ""; // This stores the input entered by the user

function number(num) {
  // This function is called when a number button is clicked
  inputString += num; 
  console.log(inputString)// Append the clicked number to the input string
}

function operator(op) {
  // This function is called when an operator button is clicked
  inputString += op; // Append the clicked operator to the input string
}

function equal() {
  
  span= document.getElementById("result")
  let result = eval(inputString); 
  inputString = ""; // Clear the input string
  inputString = result; // Update the input string with the result
  span.innerHTML= inputString
}

// Bonus: Create the RESET and CLEAR buttons

function reset() {
    span= document.getElementById("result")
    inputString = ""; 
    span.innerHTML= inputString// Clear the input string
}

function clear() {
  // This function is called when the CLEAR button is clicked
    span= document.getElementById("result")
    inputString = inputString.slice(0, -1); // Remove the last character from the input string
    span.innerHTML= inputString
}
