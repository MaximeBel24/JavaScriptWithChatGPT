// Exercice 1 : Variables et constantes
// Expliquez ce que renvoie chaque ligne de ce code et pourquoi :

// function testScope() {
//     var a = 5;
//     if (true) {
//       var a = 10; // Même nom de variable
//       let b = 20;
//       const c = 30;
//     }
//     console.log(a); // ?
//     console.log(b); // ?
//     console.log(c); // ?
//   }
//   testScope();

// 1. La variable a sera écrasée par la nouvelle valeur 10
// 2. La variable b ne sera pas accessible en dehors du bloc if
// 3. La variable c ne sera pas accessible en dehors du bloc if

//   Exercice 2 : Références avec const
//   Que se passe-t-il dans le code suivant ? Expliquez pourquoi.
  
//   const arr = [1, 2, 3];
//   arr.push(4); // ?
//   console.log(arr); // ?
//   arr = [5, 6, 7]; // ?

// 1. La valeur 4 sera ajoutée à la fin du tableau arr
// 2. Le tableau arr sera affiché avec les valeurs 1, 2, 3, 4
// 3. Une erreur sera retournée car on essaie de réassigner une valeur à une constante

//   Exercice 3 : Corrections
//   Corrigez ce code pour qu’il respecte les bonnes pratiques :
  
//   var total = 100;
//   if (true) {
//     var total = 200; // Cela écrase la variable globale
//   }
//   console.log(total);

// Voici ma correction :

let total = 100;
if (true) {
  total = 200;
}
console.log(total);

  

//   for (let i = 0; i < 5; i++) {
//     console.log(i); // Affiche : 0, 1, 2, 3, 4
//   }

//   console.log(i); // Que se passe-t-il ici ?

// 1. la variable aura une portée fonctionnelle elle sera donc accessible en dehors de la boucle et retournera la valeur 5 en dehors du bloc
// 2. la variable aura une portée de la boucle elle ne sera donc pas accessible en dehors de la boucle et retournera une erreur

// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1000);
//   }

  //1. Lors de l'utilisation de let, la boucle retournera les  valeurs 0, 1, 2 aprer 1 seconde d'attente a cause du setTimeout ou le 100 coresspond a 1000ms
  //2. Lors de l'utilisation de var, la boucle retournera la valeur 3 après 1 seconde d'attente qui correspond au nombre d'itération de la boucle

//   const person = { age: 30 };
//   person.age = 31;
//   console.log(person);
  
//   person = { age: 40 };
//   console.log(person);
  
// Lors du premier console.log, la valeur de la propriété age de l'objet person sera modifiée de 30 à 31
// Lors du deuxième console.log, une erreur sera retournée car on essaie de réassigner une valeur à une constante

// const numbers = [1, 2, 3];
// numbers[0] = 99;
// numbers.push(4);
// console.log(numbers);

// numbers = [5, 6, 7];
// console.log(numbers);

// Lors du premier console.log, la valeur de la première case du tableau numbers sera modifiée de 1 à 99 et un élément 4 sera ajouté à la fin du tableau
// Lors du deuxième console.log, une erreur sera retournée car on essaie de réassigner une valeur à une constante

// const person = { name: "Alice", age: 25 };
// Object.freeze(person); // Gèle l'objet : aucune modification possible

// person.age = 30; // Tentative de modification
// console.log(person);

// person.name = "Bob"; // Nouvelle tentative de modification
// console.log(person);

// Les valeurs de l'objet ne seront pas modifiées car l'objet a été gelé avec la méthode Object.freeze()

// const frozenObj = Object.freeze({ name: "Alice", details: { age: 25 } });

// frozenObj.details.age = 30; // Modification d'une propriété imbriquée
// console.log(frozenObj);

// frozenObj.details = { age: 40 }; // Tentative de réaffectation
// console.log(frozenObj);

// Lors du premier console.log, la valeur de la propriété age de l'objet imbriqué details sera modifiée de 25 à 30 car les details ne sont pas gelé et qu'ils s'agit d'un objet interne a l'objet principal
// Lors du deuxième console.log, une erreur sera retournée car on essaie de réassigner une valeur du premier objet qui est gelé

// const user = Object.freeze({ name: "Bob", hobbies: ["reading", "gaming"] });
// user.hobbies.push("cooking"); // Tentative de modification
// console.log(user);

// Lors du console.log, la valeur de la propriété hobbies de l'objet user sera modifiée en ajoutant un élément "cooking" car les tableaux sont des objets internes a l'objet principal

// const frozenData = Object.freeze({ scores: [10, 20, 30] });
// frozenData.scores[1] = 50; // Modification de l'élément à l'indice 1
// console.log(frozenData.scores);

// frozenData.scores = [40, 50, 60]; // Réassignation complète
// console.log(frozenData);

// Lors du premier console.log, la valeur de l'élément à l'indice 1 du tableau scores sera modifiée de 20 à 50 car les tableaux sont des objets internes a l'objet principal
// Lors du deuxième console.log, une erreur sera retournée car on essaie de réassigner une valeur du premier objet qui est gelé

// const pi = 3.14;
// const gravity = 9.8;

// console.log(pi);

// console.log(gravity);

// const évitera la réassignation accidentel des valeurs de pi et gravity

// const speedOfLight = 299792458; // m/s
// const planckConstant = 6.62607015e-34; // J·s

// console.log(speedOfLight);
// console.log(planckConstant);