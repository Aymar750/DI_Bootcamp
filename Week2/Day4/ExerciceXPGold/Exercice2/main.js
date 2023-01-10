//Abbrev_name

function abbrevName(name) {
    // Split the name into an array of words
    const words = name.split(' ');
    
    // Get the first and last initials
    const firstInitial = words[0];
    const lastInitial = words[words.length - 1][0];
    
    // Return the abbreviated name
    return `${firstInitial} ${lastInitial}.`;
}
  

console.log(abbrevName("Yao Yann"));//-> Yao Y. 
  