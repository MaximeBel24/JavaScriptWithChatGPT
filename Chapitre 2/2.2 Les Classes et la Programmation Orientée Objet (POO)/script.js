import { Etudiant } from "./Etudiant.js";
import { Personne } from "./Personne.js"

// Exercice 1 : Création d’une classe
// 1️⃣ Crée une classe Personne avec nom, âge et ville.
// 2️⃣ Ajoute une méthode sePresenter() qui affiche :
// "Bonjour, je m'appelle [nom], j'ai [âge] ans et j'habite à [ville]."
// 3️⃣ Instancie deux objets et affiche leurs présentations.

const maxime = new Personne("Maxime", 27, "Cosnac")
maxime.sePresenter();

// Exercice 2 : Méthodes qui modifient les propriétés
// 1️⃣ Ajoute une méthode vieillir(années) à la classe Personne.
// 2️⃣ Cette méthode doit ajouter années à l’âge de la personne.
// 3️⃣ Teste la méthode sur un objet et affiche l’âge avant et après.

console.log(`Actuellement, ${maxime.nom} à ${maxime.age} ans.`)
maxime.vieillir(10);

// Exercice 3 : Héritage
// 1️⃣ Crée une classe Etudiant qui hérite de Personne.
// 2️⃣ Ajoute une propriété "école".
// 3️⃣ Ajoute une méthode etudier() qui affiche :
// "Je suis [nom], étudiant à [école]."
// 4️⃣ Instancie un étudiant et appelle ses méthodes.

const pierre = new Etudiant("Pierre", 28, "Noiseau", "Doranco");

pierre.etudier();