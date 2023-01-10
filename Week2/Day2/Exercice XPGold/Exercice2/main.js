/**
 * Ask the user for their grade.

If the grade is bigger than 90, console.log “A”

If the grade is between 80 and 90 (included), console.log “B”
If the grade is between 70(included) and 80 (included), console.log “C”
If the grade is lower than 70, console.log “D”
 */
const grade = Number( prompt("Please enter your grade:"));

if (grade > 90) {
  console.log("A");
} else if (grade >= 80 && grade <= 90) {
  console.log("B");
} else if (grade >= 70 && grade < 80) {
  console.log("C");
} else {
  console.log("D");
}
