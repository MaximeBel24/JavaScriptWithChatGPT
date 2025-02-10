// Exercices pratiques 🏆
// Exercice 1 : Création et affichage d’un objet
// Crée un objet personne avec les propriétés nom, âge et ville.
// Affiche ces valeurs dans la console.

let personne = {
    nom: "Maxime",
    age: 27,
    ville: "Cosnac"
}

console.log(`👤 Nom : ${personne.nom}`);
console.log(`🎂 Âge : ${personne.age} ans`);
console.log(`📍 Ville : ${personne.ville}`);


// Exercice 2 : Manipulation d’un objet
// Ajoute une nouvelle propriété "profession".
// Modifie l’âge de la personne.
// Supprime la propriété "ville".
// Affiche l’objet final.

personne.profession = "Développeur Web";
personne.age = 28;
delete personne.ville;

console.log("📌 Informations mises à jour :");
console.log(`👤 Nom : ${personne.nom}`);
console.log(`🎂 Âge : ${personne.age} ans`);
console.log(`💼 Profession : ${personne.profession}`);


// Exercice 3 : Vérification et parcours
// Vérifie si "nom" est bien une propriété de l’objet.
// Parcours l’objet et affiche chaque clé et valeur.

console.log(`🔍 "nom" est-il une propriété ? ${"nom" in personne}`);
console.log(`✅ Vérification avec hasOwnProperty : ${personne.hasOwnProperty("nom")}`);

console.log("📌 Clés de l'objet :", Object.keys(personne));
console.log("📌 Valeurs de l'objet :", Object.values(personne));

console.log("🔎 Parcours de l'objet :");
for (let cle in personne) {
    console.log(`➡ ${cle} : ${personne[cle]}`);
}

// 🔥 Défi Avancé : Gestion d'une Liste de Contacts 📞

// 💡 Objectif :
// Créer un système de gestion de contacts en utilisant les objets et les tableaux.
// Chaque contact doit contenir nom, téléphone et email.

// 🔹 Règles :
// 1️⃣ Créer un tableau contacts contenant 3 contacts sous forme d’objets.
// 2️⃣ Ajouter un nouveau contact en utilisant .push().
// 3️⃣ Modifier l’email d’un contact spécifique.
// 4️⃣ Supprimer un contact en fonction de son nom.
// 5️⃣ Afficher tous les contacts avec for...of en format propre.

let contacts = [
    {
        nom: "👤 Jérémy",
        telephone: "📱 06-32-93-62-94",
        email: "✉ jerememail@gmail.com"
    },
    {
        nom: "👤 Alex",
        telephone: "📱 06-32-94-62-94",
        email: "✉ alex@yahoo.com"
    },
    {
        nom: "👤 Dorian",
        telephone: "📱 06-96-93-62-94",
        email: "✉ dodolasaumure@gmail.com"
    }
]

contacts.push({
    nom: "👤 Alexis",
    telephone: "📱 06-41-93-24-94",
    email: "✉ alexemail@gmail.com"
})

contacts[1].email = "alexHourdot@yahoo.com"

let nomASupprimer = "Dorian";

let index = contacts.findIndex(contact => contact.nom.includes(nomASupprimer));

if (index !== -1) {
    contacts.splice(index, 1);
    console.log(`✅ Contact "${nomASupprimer}" supprimé !`);
} else {
    console.log(`❌ Contact "${nomASupprimer}" non trouvé.`);
}

console.log("📞 Liste des contacts mise à jour :");
for (let contact of contacts) {
    console.log(`👤 Nom : ${contact.nom} | ${contact.telephone} | ✉ ${contact.email}`);
}
