// //Random number

// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

const randomNumber = Math.floor(Math.random() * 100) + 1;
for (let i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
}
  