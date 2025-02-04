// Exercices pratiques 🏆
// Exercice 1 : Compteur avec while
// Déclarez une variable compteur = 1.
// Affichez "Tour numéro X" tant que compteur ≤ 5 en utilisant while.

let compteur = 1;

while(compteur <= 5){
    console.log(`Tour numéro ${compteur}`);
    compteur++;
}


// Exercice 2 : Demande de saisie avec do...while
// Demandez à l’utilisateur de saisir un nombre entre 1 et 10 avec prompt().
// Répétez la demande tant que la saisie n’est pas valide (hors intervalle ou NaN).

// let nombre;

// do {
//     nombre = prompt("Veuillez entrer un nombre entre 1 et 10");
// } while (isNaN(nombre) || nombre < 1 || nombre > 10);

// console.log("Résultat final : " + nombre);


// Exercice 3 : Boucle for avec tableau
// Déclarez un tableau contenant 5 couleurs ("rouge", "bleu", "vert", etc.).
// Utilisez une boucle for pour afficher chaque couleur.

let colors = ["🔴 rouge", "🔵 bleu", "🟢 vert", "🟡 jaune", "🟣 violet"];

for (let color of colors) {
    console.log(color);
}


// Exercice 4 : Parcours d’un objet avec for...in
// Créez un objet voiture avec les propriétés suivantes :
// marque : "Toyota"
// modele : "Corolla"
// année : 2022
// Affichez chaque clé et sa valeur avec for...in.

let voiture = {
    marque : "Toyota",
    modele : "Corolla",
    annee : 2022
};

for (let cle in voiture) {
    console.log(`🚘 ${cle.toUpperCase()} ➝ ${voiture[cle]}`);
}


// 🔥 Défi final : Gestion d'une flotte de voitures avec for...in et for...of 🔥
// 🎯 Objectif :
// Tu vas manipuler un tableau d'objets représentant une flotte de voitures et afficher leurs informations en utilisant for...of et for...in combinés.

// 🔹 Règles :
// Crée un tableau flotteVoitures contenant 3 objets, chaque objet représentant une voiture avec :
// marque (ex: "Toyota")
// modele (ex: "Corolla")
// année (ex: 2022)
// kilometrage (ex: 50000)
// Parcours ce tableau avec for...of pour accéder à chaque voiture.
// À l’intérieur, utilise for...in pour afficher chaque propriété de la voiture.
// Ajoute une condition :
// Si le kilométrage est supérieur à 100000, affiche "⚠️ Cette voiture a beaucoup roulé !".
// Sinon, affiche "✅ Cette voiture est en bon état.".

let flottesVoitures = [
    {
        marque : "Toyota",
        modele : "Corolla",
        annee : 2022,
        kilometrage : 50000
    },
    {
        marque : "BMW",
        modele : "XS",
        annee : 2018,
        kilometrage : 120000
    },
    {
        marque : "Renault",
        modele : "Clio",
        annee : 2020,
        kilometrage : 80000
    }
]

for (const element of flottesVoitures) {

    for (property in element) {
        console.log(`🚘 ${property.toUpperCase()} ➝ ${element[property]}`);        
        
    }
    console.log(
        element.kilometrage > 100000
            ? "   ⚠️ Cette voiture a beaucoup roulé !"
            : "   ✅ Cette voiture est en bon état."
    );
}