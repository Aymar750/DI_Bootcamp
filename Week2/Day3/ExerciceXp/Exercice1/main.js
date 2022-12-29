const people = ["Greg", "Mary", "Devon", "James"];
//1
const index = people.indexOf("Greg");
people.splice(index, 1);

//2
const position = people.indexOf("James");
people[position] = "Jason";

//3
people.push("Yann");

//4
const place = people.indexOf("Mary");
console.log(place);

//5
const newPeople = people.slice(1, people.length - 1);

//6 The code will return -1 because "Foo" is not found in the array.
const foo = people.indexOf("Foo");
console.log(foo);

//7
const last = people[people.length - 1];

//Part 2

//1
for (const person of people) {
    console.log(person);
}

//2
let i = 0;
while (i < people.length) {
  console.log(people[i]);
  if (people[i] === "Jason") {
    break;
  }
  i++;
}
/*OU ENCORE 

for (const person of people) {
  console.log(person);
  if (person === "Jason") {
    break;
  }
}
 */
  
  