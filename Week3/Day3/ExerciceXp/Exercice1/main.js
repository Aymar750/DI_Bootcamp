// setTimeout function to call a function after 2 seconds
setTimeout(function() {
    // alert "Hello World"
    alert("Hello World");
}, 2000);
  
// // setTimeout function to call a function after 2 seconds
setTimeout(function() {
// get the container element
    var container = document.getElementById("container");
    // create a new paragraph element
    var p = document.createElement("p");
    // add the text "Hello World" to the paragraph element
    p.textContent = "Hello World";
    // append the paragraph element to the container element
    container.appendChild(p);
}, 2000);
  
  // setInterval function to call a function every 2 seconds
var interval = setInterval(function() {
    // get the container element
    var container = document.getElementById("container");
    // create a new paragraph element
    var p = document.createElement("p");
    // add the text "Hello World" to the paragraph element
    p.textContent = "Hello World";
    // append the paragraph element to the container element
    container.appendChild(p);
    
    // get the number of paragraphs inside the container element
    var numParagraphs = container.getElementsByTagName("p").length;
    // if there are 5 or more paragraphs inside the container element, clear the interval
    if (numParagraphs >= 5) {
        clearInterval(interval);
    }
}, 2000);
  
  // get the clear button element
var clearButton = document.getElementById("clear");
  // add a click event listener to the clear button
    clearButton.addEventListener("click", function() {
    // clear the interval when the button is clicked
    clearInterval(interval);
});
  