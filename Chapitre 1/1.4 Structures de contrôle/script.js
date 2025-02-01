// Exercice 1 : Vérification de l'âge
// Demandez à l’utilisateur d’entrer un âge.
// Affichez :
// "Vous êtes mineur" si l'âge est inférieur à 18.
// "Vous êtes jeune adulte" si l'âge est entre 18 et 25.
// "Vous êtes adulte" sinon.

// let age = parseInt(prompt("Quelle est votre âge ?"), 10);

// if (isNaN(age)) {
//     console.log("Veuillez entrer un âge valide.");
// } else if (age < 18) {
//     console.log("Vous êtes mineur");
// } else if (age <= 25) {
//     console.log("Vous êtes un jeune adulte");
// } else {
//     console.log("Vous êtes adulte");
// }

// Exercice 2 : Condition ternaire
// Déclarez une variable nombre = 10.
// Utilisez une condition ternaire pour afficher :
// "Nombre pair" si nombre est divisible par 2.
// "Nombre impair" sinon.

// let number = parseInt(prompt("Veuillez entrer un nombre"), 10);

// console.log(isNaN(number) ? "Veuillez entrer un nombre valide" : (number % 2 === 0 ? "Nombre pair" : "Nombre impair"));

// Exercice 3 : Utilisation du switch
// Déclarez une variable jour = "mardi".
// Utilisez un switch pour afficher :
// "Début de semaine" pour "lundi".
// "Milieu de semaine" pour "mardi", "mercredi", "jeudi".
// "Fin de semaine" pour "vendredi".
// "C'est le week-end !" pour "samedi" et "dimanche".

// let day = prompt("Saisissez un jour de la semaine").trim().toLowerCase();


// switch(day) {
//     case "lundi":
//         console.log("Début de la semaine");
//         break;
//     case "vendredi":
//         console.log("Fin de semaine");
//         break;
//     case "mardi":
//     case "mercredi":
//     case "jeudi":
//         console.log("Milieu de semaine");
//         break;
//     case "samedi": 
//     case "dimanche":
//         console.log("C'est le week-end ! C'est la fête mon bon ChatGPT");
//         break;
//     default:
//         console.log("Veuillez entrez un jour valide");
// }

// 🔥 Défi final : Système de notation scolaire avec switch 🔥
// 🎯 Objectif :
// Créer un programme qui prend une note sur 20 et affiche l’appréciation correspondante.

// 🔹 Règles :
// 20 ou 19 → "Excellent"`
// 18 à 16 → "Très bien"`
// 15 à 13 → "Bien"`
// 12 à 10 → "Moyen"`
// 9 à 5 → "Insuffisant"`
// 4 à 0 → "Échec"`

let note = parseInt(prompt("Veuillez entrer votre note sur 20"), 10);

if (isNaN(note) || note < 0 || note > 20) {
    console.log("❌ Veuillez entrer une note valide entre 0 et 20.");
} else {
    switch (true) {
        case (note === 20 || note === 19):
            console.log("🏆 Excellent");
            break;
        case (note >= 16 && note <= 18):
            console.log("💯 Très bien");
            break;
        case (note >= 13 && note <= 15):
            console.log("✅ Bien");
            break;
        case (note >= 10 && note <= 12):
            console.log("🟡 Moyen");
            break;
        case (note >= 5 && note <= 9):
            console.log("⚠️ Insuffisant");
            break;
        case (note >= 0 && note <= 4):
            console.log("❌ Échec");
            break;
    }
}

