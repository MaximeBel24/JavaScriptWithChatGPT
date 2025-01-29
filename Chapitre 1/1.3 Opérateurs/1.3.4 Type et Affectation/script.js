// Exercice 1 : Détection des types
// Déclarez les variables suivantes :
// a = 42 (number)
// b = "42" (string)
// c = null
// d = undefined
// e = [] (tableau vide)
// Utilisez typeof pour afficher le type de chaque variable dans la console.

let a = 42 
let b = "42"
let c = null
let d = undefined
let e = []

console.log(typeof a);//number
console.log(typeof b);//string
console.log(typeof c);//bug: object
console.log(typeof d);//undefined
console.log(typeof e);//object


// Exercice 2 : Manipulation avec instanceof
// Créez un tableau fruits avec les valeurs ["apple", "banana"].
// Vérifiez si fruits est une instance de Array et affichez le résultat.

let fruits = ["apple", "banana"];

console.log(fruits instanceof Array);

// retourne true : fruits est bien une instance de tableau

// Exercice 3 : Opérateurs d'affectation
// Déclarez une variable x = 10.
// Appliquez successivement les opérateurs +=, -=, *=, /=, %= avec les valeurs de votre choix.
// Affichez les résultats après chaque opération.

let x = 10;
let y = 5;

console.log(x += y);// 10 + 5 = 15
console.log(x -= y);// 15 - 5 = 10
console.log(x *= y);// 10 * 5 = 50
console.log(x /= y);// 50 / 5 = 10
console.log(x %= y);// 10 % 5 = 0


// Déclarez une variable score avec une valeur initiale de 50.
// Appliquez les opérations suivantes en utilisant les opérateurs d'affectation :
// Ajoutez 20 à score.
// Diminuez score de 10.
// Multipliez score par 2.
// Divisez score par 5.
// Appliquez un exponentiation de score au carré.
// Effectuez un modulo avec 3.
// Affichez la valeur de score après chaque opération.

let score = 50;
console.log("Score initial : " + score);
console.log("Après addition : " + (score += 20));
console.log("Après soustraction : " + (score -= 10));
console.log("Après multiplication : " + (score *= 2));
console.log("Après division : " + (score /= 5));
console.log("Après exponentitation : " + (score **= 2));
console.log("Après modulo : " + (score %= 3));
