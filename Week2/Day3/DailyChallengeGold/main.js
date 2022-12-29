// Using .toString() method
const numbersString = numbers.toString();
console.log(numbersString); // "5,0,9,1,7,4,2,6,3,8"


// Using .join() method
const numbersString1 = numbers.join(); // "5,0,9,1,7,4,2,6,3,8"

const numbersString2 = numbers.join("+"); // "5+0+9+1+7+4+2+6+3+8"
const numbersString3 = numbers.join(" "); // "5 0 9 1 7 4 2 6 3 8"
const numbersString4 = numbers.join(""); // "5091742638"

for (let i = 0; i < numbers.length; i++) { // pour chaque élément i dans le tableau 'numbers'
    for (let j = 0; j < numbers.length - i - 1; j++) { /*Cela signifie que chaque boucle du premier "for" 
parcourt un nombre de positions de moins en moins grand dans le tableau, car "i" augmente de 1 à chaque itération */
        if (numbers[j] < numbers[j + 1]) {
            /*  Si l'élément "j" est inférieur à l'élément suivant "j + 1", 
alors les deux éléments sont échangés en utilisant une variable temporaire "temp"*/
            const temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
  
  console.log(numbers); // [9,8,7,6,5,4,3,2,1,0]
  