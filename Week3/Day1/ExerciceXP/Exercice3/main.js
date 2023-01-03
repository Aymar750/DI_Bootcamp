// get the navBar element
const navBar = document.getElementById('navBar');

// and change the value of the id attribute to socialNetworkNavigation
navBar.setAttribute('id', 'socialNetworkNavigation');

// create a new list item
const logoutListItem = document.createElement('li');

// create a new text node with "Logout" as its specified text
const logoutText = document.createTextNode('Logout');

// append the text node to the newly created list item
logoutListItem.appendChild(logoutText);

// get the unordered list element
const unorderedList = navBar.querySelector('ul');

// append the updated list item to the unordered list
unorderedList.appendChild(logoutListItem);

// get the first and last list items
const firstListItem = unorderedList.firstElementChild;
const lastListItem = unorderedList.lastElementChild;

// display the text of each link
console.log(firstListItem.textContent);
console.log(lastListItem.textContent); 
