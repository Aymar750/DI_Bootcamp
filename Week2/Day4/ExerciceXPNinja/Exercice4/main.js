//Biggest Number
function biggestNumberInArray(arrayNumber) {
    let max = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        if (typeof arrayNumber[i] === 'number' && arrayNumber[i] > max) {
            max = arrayNumber[i];
        }
    }
    return max;
}
const array = ['a', 3, 10, 2];
console.log(biggestNumberInArray(array)); // should print 10

  