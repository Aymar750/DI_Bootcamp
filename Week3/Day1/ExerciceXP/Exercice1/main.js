// Retrieve the div and console.log it
let container = document.getElementById("container");
console.log(container);

// Change the name "Pete" to "Richard"
let listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].textContent === "Pete") {
    listItems[i].textContent = "Richard";
  }
}

// Change each first child li of the two ul to my name
let ulElements = document.querySelectorAll("ul > li:first-child");
for (let i = 0; i < ulElements.length; i++) {
  ulElements[i].firstChild.textContent = "YANN";
}

// Delete the <li> that contains the text node "Sarah"
for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].textContent === "Sarah") {
    listItems[i].parentNode.removeChild(listItems[i]);
  }
}

// Bonus: Add a class called student_list to both of the <ul>'s
for (let i = 0; i < ulElements.length; i++) {
  ulElements[i].classList.add("student_list");
}

// Bonus: Add the classes university and attendance to the first <ul>
ulElements[0].classList.add("university", "attendance");
