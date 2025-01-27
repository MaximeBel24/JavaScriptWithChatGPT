// Exercice 1 : Identifier les types
// Quel sera le type de chaque variable ci-dessous ? Essayez de répondre avant d'exécuter le code :

// let x = 42; // number
// let y = "Hello"; // string
// let z = null; // "object" (bug de JS)
let w; // undefined
let uniqueID = Symbol("id"); // symbol
let bigNum = 12345678901234567890n; // bigint

// Exercice 2 : Conversion
// Que retourne ce code ?

let num = "123";
let result = Number(num) + 10;
console.log(result); // ?

//Explication: la variable num est déclarer en tant que string avec pour valeur 123
// num est ensuite convertie en number avec la fonction Number() et additionnée à 10
// le résultat final sera donc de 133
// Si la variable num n'est pas convertit en number, le résultat sera 12310

// Petite question quelle est la différence en tre Number() et parseInt() ?

// Exercice 3 : Manipulation de types complexes
// Que se passe-t-il ici ?

let user = { name: "Alice" };
user.age = 25; // ?
console.log(user);

// Explication: un objet est déclaré avec une propriété name et une valeur Alice
// une nouvelle propriété age est ajoutée à l'objet avec la valeur 25
// l'objet user sera donc affiché avec les propriétés name et age

let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits);

// Explication: un tableau est déclaré avec les valeurs apple et banana
// une nouvelle valeur cherry est ajoutée à la fin du tableau
// le tableau fruits sera donc affiché avec les valeurs apple, banana et cherry

// Pour aller plus loin :
// Que se passe-t-il ici ? 😊

let car = { brand: "Toyota", model: "Corolla" };
delete car.model; // ?
console.log(car);

// Explication: un objet est déclaré avec les propriétés brand et model
// la propriété model est supprimée de l'objet
// l'objet car sera donc affiché avec la propriété brand uniquement

let colors = ["red", "blue"];
colors[5] = "green"; // ?
console.log(colors);

// Explication: un tableau est déclaré avec les valeurs red et blue
// la valeur green est ajoutée à la case 5 du tableau
// les cases 2, 3 et 4 seront vides
// le tableau colors sera donc affiché avec les valeurs red, blue, empty = 3 et green

// Pour aller encore plus loin :
// Que se passe-t-il ici ?

let numbers = [1, 2, 3];
delete numbers[1]; // ?
console.log(numbers);
console.log(numbers.length);

// Explication: un tableau est déclaré avec les valeurs 1, 2 et 3
// la valeur à la case 1 du tableau est supprimée
// la case 1 sera vide
// le tableau numbers sera donc affiché avec les valeurs 1, empty et 3
// la longueur du tableau sera de 3

// Pour aller encore plus loin :
// Que se passe-t-il ici ? 😊

let arr = [1, 2, 3];
arr.splice(1, 0, 4); // ?
console.log(arr);
console.log(arr.length);

// Explication: un tableau est déclaré avec les valeurs 1, 2 et 3
// la valeur 4 est ajoutée à la case 1 du tableau
// le tableau arr sera donc affiché avec les valeurs 1, 4, 2 et 3
// la longueur du tableau sera de 4

// Pour aller plus loin :
// Que se passe-t-il ici ? 😊

let animals = ["cat", "dog", "rabbit"];
animals.splice(2, 1, "fox", "bear"); // ?
console.log(animals);
console.log(animals.length);

// Explication: un tableau est déclaré avec les valeurs cat, dog et rabbit
// Les valeurs fox et bear sont ajouté à la case 2 du tableau
// La valeur est donc supprimée et remplacée par les valeurs fox et bear
// le tableau animals sera donc affiché avec les valeurs cat, dog, fox et bear
// la longueur du tableau sera de 4

// Exercice bonus :
// Que se passe-t-il ici ? 😊

let drinks = ["water", "tea", "coffee"];
drinks.splice(1, 0, "juice", "soda"); // ?
console.log(drinks);
console.log(drinks.length);

// Explication: un tableau est déclaré avec les valeurs water, tea et coffee
// les valeurs juice et soda sont ajoutées à la case 1 du tableau
// Aucune valeur n'est supprimée du tableau
// le tableau drinks sera donc affiché avec les valeurs water, juice, soda, tea et coffee
// la longueur du tableau sera de 5

// Exercice 1 : Vérification des types
// Déclarez les variables suivantes :
// Une chaîne : "Hello, world!".
// Un nombre : 42.
// Un booléen : true.
// Une valeur nulle : null.
// Une valeur non définie : une variable déclarée sans valeur.
// Un symbol : un identifiant unique.
// Utilisez typeof pour afficher le type de chaque variable dans la console.

const greeting = "Hello, world!";
const number = 42;
const isTrue = true
const empty = null;
let notDefined;
const uniqueKey = Symbol("id");

console.log(typeof greeting);
console.log(typeof number);
console.log(typeof isTrue);
console.log(typeof empty);
console.log(typeof notDefined);
console.log(typeof uniqueKey);

// Exercice 2 : Conversions
// Déclarez une variable numString avec la valeur "123".
// Convertissez cette variable en un nombre et affichez-la.
// Essayez de convertir "123abc" en un nombre avec Number() et parseInt() : affichez le résultat des deux conversions.
// Convertissez le nombre 456 en une chaîne de caractères.

let numString = "123";
console.log(Number(numString));
// console.log(Number(123abc));
// console.log(parseInt(123abc));
console.log(String(456));

// Exercice 3 : Opérations avec les types
// Déclarez une variable a avec la valeur "5" (string) et une variable b avec la valeur 10 (number).
// Effectuez l'addition de a et b, et affichez le résultat. Expliquez ce qu'il se passe.
// Convertissez a en nombre, ajoutez-le à b, et affichez le nouveau résultat.



// let a = "5";
// let b = 10;
// console.log(a + b)
// Le résultat sera 510 car la variable a est une string et la variable b est un number
// Les deux variables sont concaténées
// let c = Number(a) + b;
// console.log(c);

// Pour aller plus loin : Petit exercice supplémentaire
// Que se passe-t-il ici ? 😊

// let x = "20";
// let y = "30";
// console.log(x - y); // ?
// console.log(x * y); // ?
// console.log(x / y); // ?

// Explication: les variables x et y sont des strings
// Les opérations de soustraction, multiplication et division ne sont pas possible avec des strings
// Les strings seront donc converties en number
// Le résultat de la soustraction sera -10
// Le résultat de la multiplication sera 600
// Le résultat de la division sera 0.6666666666666666

let x = "123";
let y = undefined;
let z = null;

console.log(x - y); // ?
console.log(x + z); // ?

// Explication: la variable x est une string et la variable y est undefined
// L'opération de soustraction ne peut pas être effectuée
// Le résultat sera NaN
// La variable x est une string et la variable z est null
// L'opération d'addition ne peut pas être effectuée
// Le résultat sera 123null

// Exercice 4 : Manipulation des booléens
// Déclarez les variables suivantes :
// Une chaîne vide "".
// Un nombre 0.
// Un tableau vide [].
// Une valeur null.
// Convertissez chacune de ces variables en booléen avec Boolean() et affichez les résultats.
// Expliquez pourquoi certaines variables sont évaluées à true et d'autres à false.

// let emptyString = "";
// let zero = 0
// let emptyArray = [];
// let emptyValue = null;

// console.log(Boolean(emptyString));
// console.log(Boolean(zero));
// console.log(Boolean(emptyArray));
// console.log(Boolean(emptyValue));

//Explication : emptyString zero et emptyValue retourne false car leur valeur est nulle ("" pour empty, 0 pour zero et null pour emptyValue)
// EmptyArray retourne true car, même si il est vide, le tableau est quand même initialisé

// Exercice complémentaire :
// Testez ces cas et expliquez les résultats :

// console.log(Boolean("false")); // ?
// console.log(Boolean([])); // ?
// console.log(Boolean({})); // ?
// console.log(Boolean(NaN)); // ?

// le 1er est truthy car il s'agit d'une chaine de caractères contenant la valeur false
// le 2em est truthy, c'est l'initialisation d'un tableau même si il est vide
// le 3em est truthy, c'est l'initialisation d'un objet même si il est vide
// le 4em est falsy, c'est un NaN (not a number)

// console.log(Boolean(0n)); // falsy car bigint ayant pour valeur 0
// console.log(Boolean(undefined)); // falsy car undefined
// console.log(Boolean(" ")); // truthy car string contenant un espace
// console.log(Boolean(-1)); // tuthy car number ayant pour valeur -1, les chiffres négatifs ne sont pas considérer comme étant nulle

console.log(Boolean([]) === Boolean({})); // truthy car les 2 comme des instances d'objet, y compris le tableau, et même si ils sont vide
console.log(Boolean("") === Boolean(0)); // truthy car les 2 sont des valeurs null


// Exercice 5 : Valeurs spéciales
// Déclarez une variable contenant la valeur NaN.
// Vérifiez si cette variable est un nombre valide à l’aide de isNaN().
// Testez le comportement de Infinity :
// Divisez 1 par 0.
// Affichez la valeur de -Infinity.

let notANumber = NaN;
console.log(isNaN(notANumber));
console.log( 1 / 0)
let infinite = Infinity
console.log(-infinite)