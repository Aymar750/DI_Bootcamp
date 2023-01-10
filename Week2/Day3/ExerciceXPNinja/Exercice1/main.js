//Checking The BMI

// Define the Person object with fullName, mass, height, and a method to calculate BMI
function Person(fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.calculateBMI = function() {
      return this.mass / (this.height * this.height);
    }
}
  
// Create the two Person objects
  const person1 = new Person('Yann', 55, 1.7);
  const person2 = new Person('Jane Doe', 70, 1.8);
  
// Define a function to compare the BMIs of two people
function compareBMIs(person1, person2) {
    const bmi1 = person1.calculateBMI();
    const bmi2 = person2.calculateBMI();
  
    if (bmi1 > bmi2) {
      console.log(`${person1.fullName} has a higher BMI.`);
    } else if (bmi2 > bmi1) {
      console.log(`${person2.fullName} has a higher BMI.`);
    } else {
      console.log(`${person1.fullName} and ${person2.fullName} have the same BMI.`);
    }
}
  
// Compare the BMIs of the two people
compareBMIs(person1, person2);
  