//SwapCase

let input = prompt('Enter a string:');

function swapCase(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        if (c === c.toUpperCase()) {
            result += c.toLowerCase();
        } else {
            result += c.toUpperCase();
        }
    }
    return result;
}
console.log(swapCase(input));
  