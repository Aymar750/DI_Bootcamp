const root = document.getElementById('root');

let shoppingList = [];

const form = document.createElement('form');

const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('placeholder', 'Enter item');

const addItemButton = document.createElement('button');
addItemButton.innerText = 'Add Item';
addItemButton.addEventListener('click', addItem);

form.appendChild(inputField);
form.appendChild(addItemButton);

const clearAllButton = document.createElement('button');
clearAllButton.innerText = 'Clear All';
clearAllButton.addEventListener('click', clearAll);

root.appendChild(form);
root.appendChild(clearAllButton);

function addItem() {
    e.preventDefault();
    shoppingList.push(inputField.value);
    inputField.value = '';
}

function clearAll() {
shoppingList = [];
}