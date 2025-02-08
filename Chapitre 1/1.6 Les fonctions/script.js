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

// let duree = parseInt(prompt("Combien de secondes doit durer le compte à rebours ?"));

// if(isNaN(duree) || duree <= 0){
//     console.log("❌ Veuillez entrer un nombre valide !");
// } else {
//     console.log(`⏳ Temps restant : ${duree} secondes`);

//     let countdown = setInterval(() => {

//         console.log(`⏳ Temps restant : ${--duree} secondes`);

//         if(duree === 0) {
//             clearInterval(countdown);
//             console.log("🚀 Compte à rebours terminé !");
//         }
//     }, 1000);

//     document.addEventListener("keydown", function(event) {
//         if (event.key === "s") {
//             console.log("🛑 Compte à rebours arrêté par l'utilisateur !");
//             clearInterval(countdown);
//         }
//     });
// }


// 🔥 DÉFI INSANE : Minuteur interactif avec PAUSE, REPRISE et STOP en temps réel 🔥
// 🎯 Objectif :
// Tu vas coder un minuteur avancé qui démarre, peut être mis en pause, repris, et arrêté à tout moment avec les touches du clavier p (pause), r (reprise), et s (stop).
// 💡 L'affichage doit s'adapter dynamiquement selon l'action de l'utilisateur !

// 🔹 Fonctionnalités à implémenter :
// ✅ Démarrage automatique après que l'utilisateur ait saisi la durée.
// ✅ Affichage du temps restant à chaque seconde.
// ✅ Mettre en pause avec la touche p (le temps ne diminue plus).
// ✅ Reprendre avec la touche r (le temps recommence à descendre).
// ✅ Arrêter complètement avec la touche s (le minuteur s'arrête définitivement).
// ✅ Empêcher les saisies invalides (NaN, nombres négatifs, etc.).

let duration = parseInt(prompt("Quelle durée souhaitez-vous pour votre minuteur ?"));

if (isNaN(duration) || duration <= 0) {
    console.log("❌ Veuillez entrer un nombre valide et supérieur à zéro");
} else {
    let timer;
    let enPause = false;
    let initialDuration = duration;
    let statut = "⏳ Minuteur en cours...";

    console.log(`⏳ Minuteur démarré pour ${duration} secondes.`);
    console.log("Tapez 'p' pour mettre en pause.");
    console.log("Tapez 'r' pour reprendre.");
    console.log("Tapez 's' pour arrêter complètement.");
    console.log("Tapez 'z' pour remettre à zéro.");
    console.log(`📢 Statut : ${statut}`);

    function startTimer() {
        timer = setInterval(() => {
            if (!enPause) {
                console.log(`⏳ Temps restant : ${--duration} secondes`);
                if (duration === 0) {
                    clearInterval(timer);
                    statut = "🚀 Fin du minuteur !";
                    console.log(`📢 Statut : ${statut}`);
                }
            }
        }, 1000);
    }

    startTimer();

    document.addEventListener("keydown", function(event) {
        if (event.key === "s") {
            console.log("🛑 Minuteur arrêté !");
            clearInterval(timer);
            duration = 0;
            statut = "🛑 Arrêté.";
            console.log(`📢 Statut : ${statut}`);
        }
        if (event.key === "z") {
            clearInterval(timer);
            duration = initialDuration;
            console.log("🔄 Minuteur remis à zéro.");
            statut = "🔄 Remis à zéro et redémarré.";
            console.log(`📢 Statut : ${statut}`);
            startTimer();
        }
        if (event.key === "p" && !enPause) {
            enPause = true;
            console.log("⏸ Minuteur en pause. Tapez 'r' pour reprendre.");
            statut = "⏸ En pause.";
            console.log(`📢 Statut : ${statut}`);
        }
        if (event.key === "r" && enPause) {
            enPause = false;
            console.log("▶ Minuteur repris.");
            statut = "▶ En cours...";
            console.log(`📢 Statut : ${statut}`);
        }
    });
}
