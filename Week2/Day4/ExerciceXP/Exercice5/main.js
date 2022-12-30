function changeEnough(itemPrice, amountOfChange) {
    let totalValue = 0;
    const coinValues = [0.25, 0.1, 0.05, 0.01];
    for (let i = 0; i < amountOfChange.length; i++) {
      totalValue += coinValues[i] * amountOfChange[i];  
    }
    console.log(totalValue)
    return totalValue >= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0])); 
