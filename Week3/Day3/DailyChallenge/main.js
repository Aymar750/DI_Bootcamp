 const input = document.getElementById('letter-input');
input.addEventListener('input', (event) => {
    input.value = input.value.replace(/[^a-zA-Z]/gi, '');
});

