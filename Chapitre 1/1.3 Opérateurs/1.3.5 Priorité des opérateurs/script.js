// Exercice 1 : Priorité des opérations
// Déterminez les résultats de ces expressions sans exécuter le code :

// console.log(4 + 3 * 2); // affiche 10
// console.log((4 + 3) * 2); // affiche 14
// console.log(10 / 2 ** 2); // affiche 2.5
// console.log(15 % 4 + 2 * 3); // affiche 9
// console.log(5 + 10 > 12 && 8 < 10); //affiche true (15 > 12 && 8 < 10)



// Exercice 2 : Correction d’une erreur de priorité
// Quel est le problème dans ce code ? Comment le corriger ?

let result = (10 > 5 || 8 < 3) && 2 + 2 === 4;
console.log(result); // retourne true



// Exercice 3 : Forcez l’ordre d’exécution
// Réécrivez ces expressions avec des parenthèses pour qu’elles donnent un résultat différent :

// console.log(10 + 5 * 2); // ?
// console.log(20 / 4 + 2); // ?
// console.log(8 > 5 && 3 < 2 || 4 === 4); // ?

console.log((10 + 5) * 2); 
console.log(20 / (4 + 2));
console.log(8 > 5 && (3 < 2 || 4 === 4));