// 📌 Exercices pratiques 🏆
// Exercice 1 : Transformation d’un tableau avec map()
// 1️⃣ Déclare un tableau nombres = [10, 20, 30, 40].
// 2️⃣ Utilise map() pour créer un nouveau tableau où chaque nombre est multiplié par 3.
// 3️⃣ Affiche le résultat.

let nombres = [10, 20, 30, 40];

let triple = nombres.map(num => num * 3);

console.log(`🎯 Tableau initial : ${nombres}`);
console.log(`🚀 Tableau après transformation : ${triple}`);


// Exercice 2 : Filtrage d’un tableau avec filter()
// 1️⃣ Déclare un tableau ages = [12, 17, 25, 30, 15].
// 2️⃣ Utilise filter() pour garder uniquement les âges ≥ 18.
// 3️⃣ Affiche le résultat.

let ages = [12, 17, 25, 30 ,15];

let majeur = ages.filter(age => age >= 18);

console.log("✅ Liste des personnes majeures :");
majeur.forEach(age => console.log(`- ${age} ans`));

// Exercice 3 : Réduction d’un tableau avec reduce()
// 1️⃣ Déclare un tableau notes = [15, 18, 10, 12, 20].
// 2️⃣ Utilise reduce() pour calculer la moyenne des notes.
// 3️⃣ Affiche le résultat.

let notes = [15, 18, 10, 12, 20, 13];

let totalNotes = notes.reduce((total, num) => total + num, 0)
let moyenne = (totalNotes / notes.length).toFixed(2);

console.log(`📊 Moyenne des notes : ${moyenne}/20`);

// Exercice 4 : Modification d’un objet
// 1️⃣ Déclare un objet produit = { nom: "Ordinateur", prix: 1000 }.
// 2️⃣ Ajoute une propriété "stock" avec la valeur 5.
// 3️⃣ Modifie le "prix" pour qu'il passe à 1200.
// 4️⃣ Supprime la propriété "stock".
// 5️⃣ Affiche l’objet final.

let produit = { nom: "Ordinateur", prix: 1000 };

console.log("📌 Produit initial :", produit);

produit.stock = 5;
console.log("➕ Ajout du stock :", produit);

produit.prix = 1200;
console.log("💰 Nouveau prix :", produit);

delete produit.stock;
console.log("🗑 Suppression du stock :", produit);


// 🔥 💡 Défi Avancé : Gestion Dynamique d'un Panier d'Achat 🛒

// 💡 Objectif :
// Créer un système de gestion de panier d’achat en utilisant les objets et les tableaux.

// 🔹 Règles :
// 1️⃣ Créer un tableau panier contenant 3 objets, chaque objet représentant un produit avec :
// nom (ex: "Ordinateur")
// prix (ex: 1200)
// quantité (ex: 2)

// 2️⃣ Créer une fonction ajouterProduit(nom, prix, quantite)
// Si le produit existe déjà, incrémente sa quantité.
// Sinon, ajoute un nouveau produit dans le tableau.

// 3️⃣ Créer une fonction supprimerProduit(nom)
// Retire complètement le produit du panier s'il existe.

// 4️⃣ Créer une fonction calculerTotal()
// Retourne le prix total du panier en multipliant prix × quantité pour chaque produit.

// 5️⃣ Afficher la liste des produits avec forEach() sous cette forme :
// 🛒 Contenu du panier :
// - 📦 Ordinateur (2) → 💰 2400€
// - 📦 Souris (1) → 💰 50€
// - 📦 Clavier (1) → 💰 80€
// 💳 Total : 2530€

let panier = [
    {nom: "Ordinateur", prix: 1200, quantite: 2 },
    {nom: "Souris", prix: 50, quantite: 1 },
    {nom: "Clavier", prix: 80, quantite: 1 }
]

function ajouterProduit(nom, prix, quantite){
    const produitPresent = panier.find((element) => element.nom == nom);
    
    if(!produitPresent){
        let nouveauProduit = {nom, prix, quantite};
        panier.push(nouveauProduit);
    } else {
        produitPresent.quantite += quantite;
    }
}

ajouterProduit("Ordinateur", 1200, 1);
ajouterProduit("Casque Audio", 150, 1);

function supprimerProduit(nom){
    const produitPresent = panier.find((element) => element.nom == nom);

    if(!produitPresent){
        console.log(`Ce produit n'existe pas.`);
    } else {
        panier = panier.filter(produit => produit.nom !== nom);
    }
}

supprimerProduit("Casque Audio");

function calculerTotal(){
    let prix = [];
    panier.forEach(produit => prix.push(produit.prix * produit.quantite));
    return prix.reduce((total, prix) => total + prix, 0);
}

console.log("🛒 Contenu du panier :");
if (panier.length === 0) {
    console.log("❌ Panier vide !");
} else {
    panier.forEach(produit =>
        console.log(`📦 ${produit.nom} (${produit.quantite}) → 💰 ${produit.prix * produit.quantite}€`)
    );
}
console.log(`💳 Total : ${calculerTotal()} €`);
