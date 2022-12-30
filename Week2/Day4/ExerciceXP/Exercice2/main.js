function calculateTip() {
    let facture = prompt("Entrez le montant de la facture");
    /*Comme l'exercice propose les prix en dollars je vais declarer ma variable facture 
comme des nombres decimaux car il peut y avoir des centimes  (je pense)
    */
    facture = parseFloat(facture);  
    
    let tip;
    if (facture < 50) {
      tip = facture * 0.2;  
    } else if (facture >= 50 && facture <= 200) {
      tip = facture * 0.15; 
    } else {
      tip = facture * 0.1;  
    }

    let finalfacture = facture + tip;
    
    console.log(`The tip is $${tip.toFixed(2)}. The final bill is $${finalfacture.toFixed(2)}.`);
    //j'ai utilisé to.fixed(2) pour n'avoir que deux chiffres après la virgule s'il y en a 
  }
  
  calculateTip();
  