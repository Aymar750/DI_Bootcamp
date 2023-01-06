const grid = document.getElementById('grid');
const colors = document.querySelectorAll('.color');

// create the grid of blank squares
for (let i = 0; i < 1512; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}

// add event listeners to the color buttons
colors.forEach(color => {
    color.addEventListener('click', () => {
        currentColor = color.style.backgroundColor;
    });
});

let isDrawing = false;
let currentColor = '';

// add event listeners to the squares
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = currentColor;
    });
    square.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    square.addEventListener('mouseover', () => {
        if (isDrawing) {
        square.style.backgroundColor = currentColor;
        }
    });
});
