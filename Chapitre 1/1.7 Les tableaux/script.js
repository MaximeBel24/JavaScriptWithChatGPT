// 📌 Exercices pratiques 🏆
// Exercice 1 : Création et affichage d’un tableau
// Crée un tableau contenant 5 animaux ("chien", "chat", "lapin", etc.).
// Affiche chaque élément avec une boucle for.

let animaux = ["🐶 Chien", "🐱 Chat", "🐰 Lapin", "🐹 Hamster", "🐔 Poulet"];

for (let animal of animaux) {
    console.log(animal);
}


// Exercice 2 : Manipulation des éléments
// Crée un tableau nombres = [10, 20, 30, 40].
// Ajoute 50 à la fin du tableau.
// Ajoute 5 au début du tableau.
// Supprime le dernier élément.
// Affiche le tableau final.

let nombres = [10, 20, 30 ,40];
console.log("📌 Tableau initial :", nombres);

nombres.push(50);
console.log("➕ Ajout de 50 à la fin :", nombres);

nombres.unshift(5);
console.log("➕ Ajout de 5 au début :", nombres);

nombres.pop();
console.log("➖ Suppression du dernier élément :", nombres);


// Exercice 3 : Trouver un élément dans un tableau
// Déclare un tableau jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"].
// Demande à l’utilisateur un jour (prompt()).
// Vérifie si ce jour est dans le tableau.
// Affiche "Jour trouvé" ou "Jour non trouvé".

let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

let jour = prompt("Saisissez un jour de la semaine").toLowerCase();

if (jours.includes(jour)) {
    console.log(`✅ ${jour.charAt(0).toUpperCase() + jour.slice(1)} est bien un jour ouvré !`);
} else {
    console.log(`❌ ${jour.charAt(0).toUpperCase() + jour.slice(1)} n'est pas un jour de semaine.`);
}
