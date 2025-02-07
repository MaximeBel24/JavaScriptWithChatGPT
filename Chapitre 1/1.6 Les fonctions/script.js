// 📌 Exercices pratiques :
// Exercice 1 : Fonction de bienvenue
// Crée une fonction bienvenueUtilisateur qui prend un prénom en paramètre et affiche "Bienvenue, [prénom] !".

// function bienvenueUtilisateur(prenom = "Visiteur") {
//     console.log(`Bienvenue, ${prenom}!`)
// }

// bienvenueUtilisateur("Maxime");

// Exercice 2 : Fonction avec retour de valeur
// Crée une fonction carre qui prend un nombre en paramètre et retourne son carré.
// Affiche le résultat dans la console.

// function carre(number = 0){
//     return number ** 2;
// }

// console.log(carre(2));
// console.log(carre(4));
// console.log(carre(8));

// Exercice 3 : Fonction fléchée
// Écris une fonction fléchée soustraction qui prend deux nombres et retourne leur différence.
// Teste-la avec quelques valeurs.

// const soustraire = (a = 0, b = 0) => {
//     if (isNaN(a) || isNaN(b)) {
//         return "❌ Veuillez entrer des nombres valides.";
//     }
//     return a - b;
// };

// console.log(soustraire(15, 8));
// console.log(soustraire());
// console.log(soustraire("abc", 12));

// Exercice 4 : Callback et fonction anonyme
// Utilise setTimeout() pour afficher "Message affiché après 3 secondes".
// Utilise une fonction anonyme dans setTimeout().

// setTimeout(function(){
//     console.log("Message affiché après 3 secondes")
// }, 3000)

// 🔥 Défi Final : Minuteur interactif avec setInterval() et clearInterval() 🔥
// 🎯 Objectif :
// Tu vas coder un minuteur interactif qui démarre automatiquement et qui s’arrête quand il atteint 10 secondes.

// 🔹 Règles :
// Créer une fonction startMinuteur() qui :

// Affiche "⏳ Minuteur démarré..." dès le lancement.
// Affiche "⏳ Temps écoulé : X secondes" toutes les secondes.
// S’arrête automatiquement après 10 secondes en affichant "🚀 Minuteur terminé !".
// Utiliser setInterval() pour incrémenter le temps.

// Utiliser clearInterval() pour arrêter le minuteur après 10 secondes.


// let secondes = 0;
// console.log("⏳ Minuteur démarré...");
// console.log(`⏳ Temps écoulé : ${secondes} secondes`);
// let interval = setInterval(() => {
//     console.log(`⏳ Temps écoulé : ${++secondes} secondes`);
//     if (secondes === 10) {
//         clearInterval(interval);
//         console.log("🚀 Minuteur terminé !");
//     }
// }, 1000);


// 🔥 Défi Ultime : Minuteur avec Contrôle Dynamique et Arrêt Manuel 🔥
// 🎯 Objectif :
// Tu vas créer un minuteur avancé qui :

// Demande une durée en secondes à l'utilisateur.
// Démarre le compte à rebours et affiche le temps restant chaque seconde.
// Permet d'arrêter le minuteur manuellement avec une commande (stop).
// Affiche un message final lorsque le temps est écoulé.
// 🔹 Règles :
// L'utilisateur entre une durée via prompt().
// Un compte à rebours démarre et affiche "⏳ Temps restant : X secondes".
// À chaque seconde, le nombre diminue (X → X-1).
// L'utilisateur peut manuellement arrêter le minuteur en entrant "stop".
// Si le minuteur atteint 0, il affiche "🚀 Minuteur terminé !".
// Empêcher les saisies invalides (NaN, nombres négatifs, etc.).

let duree = parseInt(prompt("Combien de secondes doit durer le compte à rebours ?"));

if(isNaN(duree) || duree <= 0){
    console.log("❌ Veuillez entrer un nombre valide !");
} else {
    console.log(`⏳ Temps restant : ${duree} secondes`);

    let countdown = setInterval(() => {

        console.log(`⏳ Temps restant : ${--duree} secondes`);

        if(duree === 0) {
            clearInterval(countdown);
            console.log("🚀 Compte à rebours terminé !");
        }
    }, 1000);

    document.addEventListener("keydown", function(event) {
        if (event.key === "s") {
            console.log("🛑 Compte à rebours arrêté par l'utilisateur !");
            clearInterval(countdown);
        }
    });
}


