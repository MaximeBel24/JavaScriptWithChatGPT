let quoteList = [
    "La seule façon d’échouer est d’arrêter d’essayer.",
    "Ne regarde pas l’horloge, fais comme elle, avance.",
    "Le succès, c'est tomber sept fois, se relever huit.",
    "Un voyage de mille lieues commence toujours par un premier pas.",
    "La persévérance est la clé de la réussite.",
    "La vérité et la justice sont souveraines, car elles seules assurent la grandeur des nations.",
    "Plus l'obscurité est profonde, plus la lumière brille !",
    "La plus triste des choses, c'est quand la personne qui t'a donné les meilleurs souvenirs devient elle-même un souvenir.",
    "L'échec n'est qu'une opportunité pour recommencer plus intelligemment.",
    "Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles.",
    "N’attends pas d’avoir tout pour profiter de la vie, tu as déjà la vie pour en profiter.",
    "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles.",
    "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.",
    "Agis comme s’il était impossible d’échouer.",
    "La motivation nous fait démarrer, mais c’est l’habitude qui nous fait continuer.",
    "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    "Les grandes choses ne se produisent jamais dans les zones de confort.",
    "Si vous voulez vivre une vie heureuse, attachez-la à un but, non pas à des personnes ou des choses.",
    "Le plus grand risque est de ne prendre aucun risque.",
    "Ne rêve pas ta vie, vis tes rêves.",
    "Il faut apprendre à danser sous la pluie plutôt que d’attendre que l’orage passe.",
    "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.",
    "Les seules limites à notre épanouissement de demain sont nos doutes d’aujourd’hui.",
    "Les gagnants trouvent des moyens, les perdants des excuses.",
    "La meilleure manière de prédire l’avenir est de le créer.",
    "La vraie richesse, c'est d'avoir des rêves que l'argent ne peut pas acheter.",
    "Le courage n’est pas l’absence de peur, mais la capacité de la vaincre.",
    "Le pessimiste voit la difficulté dans chaque opportunité, l’optimiste voit l’opportunité dans chaque difficulté.",
    "Rien n’est impossible, seules les limites de nos esprits définissent certaines choses comme inconcevables.",
    "Soyez vous-même, les autres sont déjà pris.",
    "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.",
    "La discipline est le pont entre les objectifs et l’accomplissement.",
    "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu’un d’autre.",
    "Faites de votre vie un rêve, et d’un rêve, une réalité.",
    "Rien de grand ne s’est accompli sans passion.",
    "Chaque jour est une seconde chance.",
    "Le bonheur, c’est lorsque vos actes sont en accord avec vos paroles.",
    "Seuls ceux qui prennent le risque d’échouer spectaculairement réussiront brillamment.",
    "On ne devient pas champion sans effort.",
    "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes.",
    "L’important n’est pas ce que l’on regarde, mais ce que l’on voit.",
    "Rêve grand, commence petit, mais agis maintenant.",
    "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.",
    "L'imagination est plus importante que le savoir.",
    "Soyez le changement que vous voulez voir dans le monde.",
    "Le seul endroit où le succès précède le travail, c’est dans le dictionnaire.",
    "Rien n’est trop difficile pour celui qui persévère.",
    "Le secret du changement, c’est de concentrer toute votre énergie non pas à lutter contre le passé, mais à construire l’avenir.",
  ];
  

let generateQuote = document.querySelector("#generateQuote");
let saveQuote = document.querySelector("#saveQuote");
let saveQuoteList = document.querySelector("#saveQuoteList");
let deleteAllQuotes = document.querySelector("#deleteAllQuotes");
let text = document.querySelector("#textQuote");
let quotes = JSON.parse(localStorage.getItem("citations")) || [];

function addQuoteToList(textQuote) {
  quoteItem = document.createElement("li");
  quoteItem.innerHTML = `${textQuote} <button class="deleteQuote">❌</button>`;
  console.log(quoteItem);
  saveQuoteList.append(quoteItem);
  addListeners(quoteItem, textQuote);
  textQuote = "";
}

function addListeners(quoteItem, textQuote) {
  let deleteQuote = quoteItem.querySelector(".deleteQuote");
  deleteQuote.addEventListener("click", function () {
    quoteItem.remove();
    quotes = quotes.filter((q) => q !== textQuote);
    localStorage.setItem("citations", JSON.stringify(quotes));
    console.log(`Citations supprimée : ${textQuote}`);
  });
}

function deleteAll() {
  quotes.splice(0, quotes.length);
  localStorage.setItem("citations", JSON.stringify(quotes));
  window.location.reload();
}

quotes.forEach((quote) => addQuoteToList(quote));

generateQuote.addEventListener("click", function () {
    let randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    text.textContent = randomQuote;
    text.style.opacity = "1";
});


saveQuote.addEventListener("click", function () {
  let textQuote = text.textContent;
  if (textQuote === "") {
    alert("🚨 Il n'y a pas de citation");
    return;
  }
  if (!quotes.includes(textQuote)) {
    addQuoteToList(textQuote);
    quotes.push(textQuote);
    localStorage.setItem("citations", JSON.stringify(quotes));
  } else {
    alert("🚨 Cette citation est déjà enregistrée !");
  }

  text.textContent = "";
  text.style.opacity = "0";

});

deleteAllQuotes.addEventListener("click", function () {
  deleteAll();
});
