for (let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}

for (let i = 1; i <= 6; i++) {
    let ligne = "";
    for (let j = 1; j <= i; j++) {
        ligne += "*";
    }
    console.log(ligne);
}
  
  