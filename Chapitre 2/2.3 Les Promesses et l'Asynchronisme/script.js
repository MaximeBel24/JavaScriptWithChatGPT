// 📌 Exercices pratiques 🏆
// Exercice 1 : Création d’une Promesse
// 1️⃣ Crée une Promise qui attend 3 secondes puis se résout avec "✅ Données reçues après 3s"
// 2️⃣ Affiche le résultat avec .then() et .catch()

// const myFirstPromise = new Promise((resolve, reject) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) {
//       resolve("✅ Données reçues après 3s.");
//     } else {
//       reject("Données non reçues après 3s.");
//     }
//   }, 3000);
// });

// console.log("⏳ En attente des données...");

// myFirstPromise
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Exercice 2 : async et await
// 1️⃣ Convertis ton exercice 1 pour utiliser async et await au lieu de .then() et .catch()

// async function myFirstPromiseAsync() {
//   try {
//     let resultat = await myFirstPromise;
//     console.log(resultat);
//   } catch (error) {
//     console.log(error);
//   }
// }

// myFirstPromiseAsync();

// Exercice 3 : Requête API avec fetch()
// 1️⃣ Utilise fetch() pour récupérer des posts depuis "https://jsonplaceholder.typicode.com/posts"
// 2️⃣ Convertis la réponse en JSON
// 3️⃣ Affiche uniquement les 5 premiers posts

// async function recupererPosts() {
//   try {
//     console.log("⏳ Récupération des posts...");
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let posts = await response.json();
//     let premiersPosts = posts.slice(0, 5);

//     console.log("✅ Voici les 5 premiers posts :");
//     premiersPosts.forEach((post) => {
//       console.log(`📝 Post #${post.id} : ${post.title}`);
//     });
//   } catch (error) {
//     console.log("❌ Erreur de récupération :", error);
//   }
// }

// recupererPosts();

// 🔥 💡 Défi Ultime : Gestion Dynamique de Données avec fetch() et async/await 📡

// 🎯 Objectif : Créer une mini application qui récupère et affiche des utilisateurs aléatoires depuis une API !

// 🔹 Règles :
// 1️⃣ Utilise fetch() pour récupérer un utilisateur aléatoire depuis :
// 📡 API : https://randomuser.me/api/

// 2️⃣ Transforme la réponse en JSON et affiche les informations suivantes :

// Nom complet (ex: "John Doe")
// Âge
// Pays
// Email
// Photo de profil

// 3️⃣ Ajoute un bouton Nouvel Utilisateur qui permet de charger un nouvel utilisateur aléatoire.

// 4️⃣ (Bonus 🔥) Ajoute un loader "Chargement..." pendant la récupération des données.

async function recupererUtilisateur() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    let utilisateur = data.results[0];

    let nom = `${utilisateur.name.first} ${utilisateur.name.last}`;
    let age = utilisateur.dob.age;
    let pays = utilisateur.location.country;
    let photo = utilisateur.picture.large;

    // Modifier le contenu HTML avec les données récupérées
    document.querySelector("#nom").innerText = `👤 Nom : ${nom}`;
    document.querySelector("#age").innerText = `🎂 Âge : ${age} ans`;
    document.querySelector("#pays").innerText = `🌍 Pays : ${pays}`;
    document.querySelector("#photo").src = photo;
  } catch (error) {
    console.log("❌ Erreur :", error);
  }
}

recupererUtilisateur();

document.querySelector("#refresh").addEventListener("click", function () {
  console.log("🔄 Chargement d'un nouvel utilisateur...");
  recupererUtilisateur(); // Appelle la fonction pour récupérer un autre utilisateur
});
