// get a reference to the button and the animate div
const button = document.querySelector('button');
const animateDiv = document.querySelector('#animate');

// set the initial position of the animate div
animateDiv.style.left = '0px';

// define a function to move the animate div to the right
function myMove() {
    // get the current position of the animate div
    let pos = 0;
    const id = setInterval(frame, 1); // move the animate div 1px to the right every 1 millisecond

    function frame() {
        if (pos >= 350) { // if the animate div reaches the right side of the container, stop the animation
        clearInterval(id);
        } else {
        pos++; // increment the position
        animateDiv.style.left = pos + 'px'; // update the position of the animate div
        }
    }
}

// add an event listener to the button to start the animation when clicked
button.addEventListener('click', myMove);
