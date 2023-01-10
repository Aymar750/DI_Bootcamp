//Capitalized Letters

function capitalize(str) {
    var result = ['', '']; // Create an empty array with two elements
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) { // Check if the index is even
            result[0] += str[i].toUpperCase(); // Add the character to the first element of the array
        } else {
            result[1] += str[i].toUpperCase(); // Add the character to the second element of the array
        }
        }
    return result;
}
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

