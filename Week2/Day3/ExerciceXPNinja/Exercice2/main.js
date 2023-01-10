//Grade Average
const gradesList = [100,100,58,98]
function calculateAvg(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    let avg = sum / gradesList.length;
    return avg;
}
  
function findResult(avg) {
    if (avg >= 65) {
      console.log("You passed!");
    } else {
      console.log("You failed and must repeat the course.");
    }
}
  
function findAvg(gradesList) {
    let avg = calculateAvg(gradesList);
    console.log(avg);
    findResult(avg);
}
  
findAvg(gradesList)