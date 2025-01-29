// Exercice 1 : Évaluations logiques simples
// Testez les résultats des expressions suivantes :
// true && false
// true || false
// !true && false
// !false || true

// console.log(true && false);// retourne false : une des conditions est fausse (false)
// console.log(true || false);// retourne true : une des conditions est vrai (true)
// console.log(!true && false);// retourne false: aucune des conditions de sont vrai
// console.log(!false || true);// retourne true : une des conditions est vrai (true)


// Exercice 2 : Utilisation dans des conditions
// Déclarez une variable temperature avec la valeur 25.
// Écrivez un programme qui affiche :
// "Température normale" si la température est entre 18 et 30 degrés.
// "Température anormale" sinon.

// Utilisation d’un opérateur ternaire condition ? valeur_si_true : valeur_si_false

// function temperature(temp){
//     let status = (temp >= 18 && temp <= 30) ? "normale" : "anormale";
//     console.log(`Température ${status} : ${temp}°`);
// }

// temperature(25);
// temperature(4);
// temperature(36);
// temperature(18);
// temperature(30);

// Exercice 3 : Évaluation paresseuse
// Déclarez une fonction test() qui affiche "Test évalué" dans la console.
// Testez les résultats des expressions suivantes :
// false && test()
// true || test()
// true && test()

function test() {
    console.log("Test évalué");
}

console.log(false && test());// retourne false : une des conditions est fausse (false), la fonction ne s'affiche pas car la 1ere condition est false, la 2em condition n'est pas évaluée
console.log(true || test());// retourne true : une des conditions est vrai (true), la fonction ne s'affiche pas car la 1ere condition est true, la 2em condition n'est pas évaluée
console.log(true && test());// la première condition est true, javascript évalue donc la 2em condition et affiche le message de la fonction

// Dernier exercice sur les opérateurs logiques :
// Énoncé : Évaluer l'accès à une ressource
// Vous allez créer une fonction canAccessResource qui détermine si un utilisateur peut accéder à une ressource en fonction de deux paramètres :

// isAdmin : Un booléen qui indique si l'utilisateur est administrateur.
// isLoggedIn : Un booléen qui indique si l'utilisateur est connecté.
// Règles :
// Si l'utilisateur est administrateur (isAdmin === true), il peut accéder à la ressource, qu'il soit connecté ou non.
// Si l'utilisateur n'est pas administrateur, il ne peut accéder à la ressource que s'il est connecté (isLoggedIn === true).

function canAccessResource(isAdmin, isLoggedIn) {
    if (isAdmin || isLoggedIn) {
        return "Accès autorisé à la ressource.";
    } else {
        return "Accès refusé : vous devez être connecté ou administrateur.";
    }
}

console.log(canAccessResource(true, false));  // Accès autorisé à la ressource.
console.log(canAccessResource(false, true));  // Accès autorisé à la ressource.
console.log(canAccessResource(false, false)); // Accès refusé : vous devez être connecté ou administrateur.
console.log(canAccessResource(true, true)); 

// Exercice Bonus : Vérification d'identification
// 🎯 Objectif :
// Créez une fonction canEnterBuilding qui détermine si une personne peut entrer dans un bâtiment en fonction de plusieurs conditions :
// 🔹 Règles d’accès :
// Si la personne est employée (isEmployee === true), elle peut entrer sans restriction.
// Si la personne n’est pas employée, elle peut entrer seulement si elle a un badge (hasBadge === true).
// Si la personne n’est ni employée ni en possession d’un badge, l’accès est refusé.

function canEnterBuilding(isEmployee, hasBadge) {
    if(isEmployee || hasBadge){
        if(!isEmployee){
            return "Visiteur avec badge : Accès autorisé."
        }
        return "Employé : Accès autorisé."
    } else {
        return "Accès refusé : Vous devez être employé ou avoir un badge."
    }
}

console.log(canEnterBuilding(true, false));  // "Employé : Accès autorisé."
console.log(canEnterBuilding(false, true));  // "Visiteur avec badge : Accès autorisé."
console.log(canEnterBuilding(false, false)); // "Accès refusé : Vous devez être employé ou avoir un badge."
console.log(canEnterBuilding(true, true));   // "Employé : Accès autorisé."