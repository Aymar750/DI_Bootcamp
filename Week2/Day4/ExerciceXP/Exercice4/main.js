const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana", "orange", "apple"];

/*function myBill() {
    let totalPrice = 0;

    for (const item of shoppingList) {
        //checker les items dans le stock
        if (item in stock) {
        // trouver leur prix s'ils sont dedans
        const price = prices[item];
            //Bon simplement additionne pour oim
        totalPrice += price;
        }
    }
    return totalPrice;
}

console.log(myBill());*/

//Avec le bonus
function myBill() {
    let totalPrice = 0;
    for (const item of shoppingList) {
      if (item in stock) {
       
        const price = prices[item];
        stock[item]--;
        totalPrice += price;
      }
    }
    return totalPrice;
}
console.log(myBill());
