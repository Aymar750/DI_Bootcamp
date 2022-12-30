/*function hotelCost() {
    while (true) {
      var nights = prompt("How many nights do you want to stay in the hotel?");
      if (nights !== null && !isNaN(nights)) {
        break;
      }
    }
    return nights * 140;
}
function planeRideCost() {
    while (true) {
      var destination = prompt("Where do you want to go?");
      if (destination !== null && typeof destination === "string") {
        break;
      }
    }
    if (destination === "London") {
      return 183;
    } else if (destination === "Paris") {
      return 220;
    } else {
      return 300;
    }
  }
  
function rentalCarCost() {
    while (true) {
      var days = prompt("How many days do you want to rent the car?");
      if (days !== null && !isNaN(days)) {
        break;
      }
    }
    var cost = days * 40;
    if (days > 10) {
      cost = cost * 0.95;
    }
    return cost;
}
  
function totalVacationCost() {
    var carCost = rentalCarCost();
    var hotelCost = hotelCost();
    var planeCost = planeRideCost();
    return "The car cost: $" + carCost + ", the hotel cost: $" + hotelCost + ", the plane tickets cost: $" + planeCost + ".";
}
  
console.log(totalVacationCost());
*/

//Avec le bonus voici ce que je propose

function hotelCost(nights) {
    return nights * 140;
}
  
function planeRideCost(destination) {
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}
  
function rentalCarCost(days) {
    const cost = days * 40;
    if (days > 10) {
        return cost - (cost * 0.05);
    } else {
        return cost;
    }
}
  
function totalVacationCost() {
    let nights = parseInt(prompt("Enter the number of nights you want to stay in the hotel:"));
    while (isNaN(nights)) {
        nights = parseInt(prompt("Enter a valid number of nights:"));
    }
    const hotel = hotelCost(nights);
  
    let destination = prompt("Enter your destination:");
    while (typeof destination !== "string") {
        destination = prompt("Enter a valid destination:");
    }
    const plane = planeRideCost(destination);
  
    let days = parseInt(prompt("Enter the number of days you want to rent the car:"));
    while (isNaN(days)) {
        days = parseInt(prompt("Enter a valid number of days:"));
    }
    const car = rentalCarCost(days);
  
    return `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`;
}
  
console.log(totalVacationCost());
  