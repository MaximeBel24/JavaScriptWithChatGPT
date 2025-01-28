// Exercice 1 : Comparaisons simples
// Déclarez deux variables x = 10 et y = "10".
// Testez les résultats des expressions suivantes et expliquez-les :
// x == y
// x === y
// x != y
// x !== y

// let x = 10;
// let y = "10";

// console.log(x == y); //égalité: retourne true car les valeurs sont les mêmes
// console.log(x === y); //égalité stricte: retourne false car les types sont différents
// console.log(x != y); //inégalité: retourne false car les valeurs sont les mêmes
// console.log(x !== y); //inégalité stricte: retourne true car types différents



// Exercice 2 : Comparaison de chaînes
// Déclarez deux chaînes : str1 = "cat" et str2 = "dog".
// Comparez-les avec >, <, === et !==, et affichez les résultats dans la console.

// const str1 = "dog";
// const str2 = "cat";

// console.log(str1.charCodeAt());
// console.log(str2.charCodeAt());

// console.log(str1 > str2);//supérieur à: "d" a un code Unicode supérieur à "c", donc "dog" > "cat" est true
// console.log(str1 < str2);//inférieur à : "c" a un code Unicode inférieur à "d", donc "cat" < "dog" est false
// console.log(str1 === str2);//égalité stricte: retourne false car même type mais pas mêmes valeurs
// console.log(str1 !== str2);//inégalité stricte: retourne true car les valeurs sont différentes


// Exercice 3 : Comparaison spéciale
// Déclarez une variable value = null.
// Comparez value avec undefined à l'aide de == et ===.
// Essayez également value > 0, value >= 0 et value <= 0. Expliquez pourquoi les résultats peuvent sembler surprenants.

let value = null;

console.log(value == undefined);// true : même valeur (nulle)
console.log(value === undefined);// false : types différents 

// En JavaScript, lorsqu'un opérateur de comparaison est utilisé (>, >=, <=), null est converti en un nombre avant la comparaison :
// null est converti en 0.

console.log(value > 0);// false: value n'est pas strictement supérieur à 0
console.log(value >= 0);// true: value est égale à zéro (valeur nulle)
console.log(value <= 0);// true: value est égale à zéro (valeur nulle)

