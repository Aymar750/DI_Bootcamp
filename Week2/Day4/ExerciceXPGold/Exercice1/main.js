//is_blank

function isBlank(str) {
    return str.trim() === "";
}
console.log(isBlank("")); // true
console.log(isBlank("  ")); // true
console.log(isBlank("Hello")); // false

//For fun  i'm using Regex
function isBlank(str) {
    return str.replace(/\s/g, "") === "";
}
console.log(isBlank("")); // true
console.log(isBlank("  ")); // true
console.log(isBlank("Hello")); // false