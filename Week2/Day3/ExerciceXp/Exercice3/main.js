let num;

do {
  num = prompt("Please enter a number greater than or equal to 10:");

  if (typeof num === "number") {
    num = Number(num);
  }
} while (typeof num !== "number" || num < 10);

console.log(`Thank you, your number is: ${num}`);
