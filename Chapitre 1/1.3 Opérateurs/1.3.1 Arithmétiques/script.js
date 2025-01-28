// Exercice 1 : Calculs simples
// Déclarez deux variables x et y avec les valeurs suivantes :
// x = 20
// y = 4
// Affichez la somme, la soustraction, la multiplication et la division de x et y.
// Affichez le résultat de x % y.
// Augmentez la valeur de x de 1 avec l'opérateur ++ et affichez la nouvelle valeur.

let x = 20;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

console.log(x % y);

x++;
console.log(x)


// Exercice 2 : Exponentiation
// Déclarez une variable base avec la valeur 3 et une variable exponent avec la valeur 4.
// Calculez la puissance de base élevée à exponent (utilisez **).
// Affichez le résultat.

let value = 3;
let exponent = 4;
console.log(value ** exponent);

// Exercice 3 : Modulo avancé
// Vérifiez si un nombre donné est pair ou impair :
// Déclarez une variable number avec la valeur 15.
// Utilisez le modulo (%) pour vérifier si le nombre est divisible par 2 (un nombre est pair si number % 2 === 0).
// Affichez "Pair" ou "Impair" selon le cas.

let numbers = [10, 15, 22, 33, 40];

function oddOrEven(num) {
    console.log(num % 2 === 0 ? "Pair" : "Impair");
}

numbers.forEach(num => oddOrEven(num));


// Exercice : Trouver le plus grand nombre parmi trois
// Énoncé :
// Déclarez trois variables a, b, et c avec des valeurs de votre choix.
// Écrivez une fonction findMax qui prend trois nombres en paramètres et retourne le plus grand d'entre eux.
// Appelez cette fonction avec vos trois variables et affichez le résultat dans la console.

let a = 10;
let b = 25;
let c = 15;

console.log("Le plus grand nomber est : " + Math.max(a, b, c));

function findMax(x, y, z) {
    let max = x; // Supposons que x est le plus grand
    if (y > max) max = y; // Compare y
    if (z > max) max = z; // Compare z
    return max;
}

console.log("Le plus grand nombre est : " + findMax(a, b, c));