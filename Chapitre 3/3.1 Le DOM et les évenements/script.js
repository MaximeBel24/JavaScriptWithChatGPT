// 📌 Exercices pratiques 🏆
// Exercice 1 : Modifier du texte avec le DOM
// 1️⃣ Ajoute un <p id="texte">Texte original</p> dans ton HTML.
// 2️⃣ Crée un bouton <button id="changerTexte">Changer Texte</button>.
// 3️⃣ En JS, quand on clique sur le bouton, remplace Texte original par 🌟 Nouveau texte !.

document.querySelector("#changerTexte").addEventListener("click", function () {
  let texte = document.querySelector("#texte");
  texte.textContent =
    texte.textContent === "🌟 Nouveau texte !"
      ? "Texte original"
      : "🌟 Nouveau texte !";
});

// Exercice 2 : Changer la couleur au clic
// 1️⃣ Ajoute <p id="colorText">Texte coloré</p> et un bouton <button id="changeColor">Changer Couleur</button>.
// 2️⃣ En JS, au clic sur le bouton, le texte devient rouge (style.color = "red").

document.querySelector("#changeColor").addEventListener("click", function () {
  let color = document.querySelector("#colorText");
  let couleurs = ["red", "blue", "green", "purple", "orange"];
  let couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
  color.style.color = couleurAleatoire;
});

// Exercice 3 : Interagir avec l’utilisateur
// 1️⃣ Ajoute <input id="userInput" type="text"> et <p id="affichage">Tape quelque chose...</p>.
// 2️⃣ En JS, dès que l’utilisateur tape dans l’input, affiche ce qu’il écrit dans <p id="affichage">.

let userInput = document.querySelector("#userInput");

document.querySelector("#valider").addEventListener("click", function () {
    let affichage = document.querySelector("#affichage");
    affichage.textContent = userInput.value; // Met à jour le texte
    userInput.value = ""; // Efface l'input après validation
});

