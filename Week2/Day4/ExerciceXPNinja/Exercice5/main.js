function getUniqueElements(arr) {
    let uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueElements.indexOf(arr[i]) === -1) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}
const array = [1,2,3,3,3,3,4,5];
console.log(getUniqueElements(array));
  