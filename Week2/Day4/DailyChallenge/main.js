function printWordsInFrame() {
  
  const words = prompt("Enter words:").split(',');
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  const frameWidth = longestWord.length + 4;

  console.log("*".repeat(frameWidth));

  for (const word of words) {
    console.log(`* ${word.toUpperCase()}${" ".repeat(frameWidth - word.length - 2)}*`);
  }

  console.log("*".repeat(frameWidth));
}
printWordsInFrame()




