//Is Palindrome?

function isPalindrome(str) {
    // First, we'll use the toLowerCase method to make the string all lowercase
    // so that we can ignore case when checking for palindromes
    str = str.toLowerCase();
  
    // Next, we'll use the replace method to remove all non-alphanumeric characters
    // from the string. This will allow us to ignore punctuation and spaces when
    // checking for palindromes.
    str = str.replace(/[^a-z0-9]/g, '');
    var reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('Madam')); // true
console.log(isPalindrome('Bob')); // true
console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Not a palindrome')); // false
  