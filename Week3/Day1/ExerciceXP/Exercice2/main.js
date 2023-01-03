// Add a "light blue" background color and some padding to the div
document.querySelector("div").style.backgroundColor = "lightblue";
document.querySelector("div").style.padding = "20px";

// Do not display the li that contains the text node "John"
document.querySelector("li:first-child").style.display = "none";

// Add a border to the li that contains the text node "Pete"
document.querySelector("li:last-child").style.border = "1px solid black";

// Change the font size of the whole body
document.querySelector("body").style.fontSize = "20px";

// Bonus: If the background color of the div is "light blue", alert "Hello x and y" (x and y are the users in the div)
if (document.querySelector("div").style.backgroundColor === "lightblue") {
  alert("Hello " + document.querySelector("li:first-child").textContent + " and " + document.querySelector("li:last-child").textContent);
}
