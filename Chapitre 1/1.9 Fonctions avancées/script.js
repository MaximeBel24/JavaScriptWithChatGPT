// Exercice 1 : Fonction avec paramètres et retour
// 1️⃣ Crée une fonction presentation qui prend nom, âge et ville en paramètre.
// 2️⃣ Elle doit retourner une phrase du type : "Je m'appelle Maxime, j'ai 27 ans et j'habite à Paris."
// 3️⃣ Affiche le résultat avec console.log().

const presentation = (nom = "personne", age = 0, ville = "nulle part") => `Je m'appelle ${nom}, j'ai ${age} ans et j'habite à ${ville}`;
console.log(presentation())
console.log(presentation("Maxime", 27, "Cosnac"));
console.log(presentation("Philippe", 45, "Singapour"))

// Exercice 2 : Fonction fléchée et paramètres par défaut
// 1️⃣ Crée une fonction fléchée multiplierParDeux qui prend un nombre en paramètre.
// 2️⃣ Elle doit renvoyer le double de ce nombre.
// 3️⃣ Si aucun paramètre n’est fourni, la fonction doit retourner 0.

const multiplierParDeux = (number = 0) => number * 2;

console.log(`🟢 Sans paramètre : ${multiplierParDeux()}`); // 0
console.log(`🔵 Avec 14 : ${multiplierParDeux(14)}`); // 28
console.log(`🔴 Avec 7 : ${multiplierParDeux(7)}`); // 14

// Exercice 3 : Callback et opérations dynamiques
// 1️⃣ Crée une fonction calculer qui prend deux nombres et une fonction callback.
// 2️⃣ Passe une fonction d'addition et une fonction de multiplication en callback.
// 3️⃣ Affiche le résultat pour les deux opérations.

const calculer = (number1, number2, callback) => callback(number1, number2);

const additionner = (x, y) => x + y;
const multiplier = (x, y) => x * y;
const soustraire = (x, y) => x - y;
const diviser = (x, y) => y !== 0 ? x / y : "❌ Erreur : Division par zéro interdite !";
const puissance = (x, y) => x ** y;

console.log(`➕ Addition : ${calculer(15, 10, additionner)}`);
console.log(`✖ Multiplication : ${calculer(15, 10, multiplier)}`);
console.log(`➖ Soustraction : ${calculer(15, 10, soustraire)}`);
console.log(`➗ Division : ${calculer(15, 10, diviser)}`);
console.log(`➗ Division : ${calculer(15, 0, diviser)}`);
console.log(`🔺 Puissance : ${calculer(15, 10, puissance)}`);
