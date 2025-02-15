// 📌 Exercices pratiques 🏆
// Exercice 1 : Déclaration de variables
// 1️⃣ Déclare une variable prenom avec const.
// 2️⃣ Déclare une variable ville avec let et change sa valeur.
// 3️⃣ Affiche-les dans la console avec un template literal.

const prenom = "Maxime";
let ville = "Noiseau";
ville = "Cosnac";

console.log(`👋 Bonjour, je m'appelle ${prenom} et j'habite à 📍 ${ville}.`);

// Exercice 2 : Déstructuration
// 1️⃣ Déclare un objet utilisateur = { nom: "Jean", age: 35, pays: "France" }.
// 2️⃣ Utilise la déstructuration pour récupérer les valeurs dans des variables.
// 3️⃣ Affiche-les dans la console.

utilisateur = { nom: "Jean", age: 35, pays: "France" };

let {nom, age, pays} = utilisateur;
console.log(`👤 Nom : ${nom}, 🎂 Âge : ${age} ans, 🌍 Pays : ${pays}`);


// Exercice 3 : Spread Operator
// 1️⃣ Déclare deux tableaux legumes = ["carotte", "brocoli"] et fruits = ["pomme", "banane"].
// 2️⃣ Fusionne-les en un seul tableau aliments.
// 3️⃣ Affiche le résultat.

let legumes = ["carotte", "brocoli"]
let fruits = ["pomme", "banane"]

let vegetaux = [...legumes, ...fruits];
console.log("🌱 Liste des végétaux :");
vegetaux.forEach(item => console.log(`- ${item}`));
