const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let phrase = '';
for (const [key, value] of Object.entries(details)) {
    phrase += `${key} ${value} `;
}
console.log(phrase); 
  