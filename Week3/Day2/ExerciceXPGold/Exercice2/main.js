document.querySelector('input[type="button"]').addEventListener('click', removecolor);

function removecolor() {
   
    const color = document.querySelector('#colorSelect').value;
    const options = document.querySelectorAll('#colorSelect option');

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === color) {
            options[i].remove();
        }
    }
}
