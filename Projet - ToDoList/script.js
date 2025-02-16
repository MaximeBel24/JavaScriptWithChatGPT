// 🔥 💀💀💀 DÉFI ULTIME DU DOM 💀💀💀 🚀

// 🎯 Objectif : Créer une mini application de liste de tâches interactive (To-Do List) en JavaScript !

// 🔹 Règles du défi
// 1️⃣ Ajoute un <input> et un <button> pour permettre à l'utilisateur d'ajouter une tâche.
// 2️⃣ Lorsqu'il clique sur "Ajouter", la tâche apparaît dans une liste <ul>.
// 3️⃣ Chaque tâche a un bouton "❌ Supprimer" pour la retirer de la liste.
// 4️⃣ (Bonus 🔥) Ajouter un effet de ligne barrée quand on clique sur une tâche pour la marquer comme faite.
// 5️⃣ (Bonus 💀) Stocker les tâches dans localStorage pour les conserver même après rechargement de la page.
// 🔹 Indices pour réussir
// 📌 Ajouter une tâche dynamiquement dans une <ul>

// let ul = document.querySelector("#listeTaches");
// let li = document.createElement("li"); // Crée un nouvel élément <li>
// li.textContent = "Nouvelle tâche";
// ul.appendChild(li); // Ajoute la tâche à la liste

let todoAdd = document.querySelector("#todoAdd");
let todoList = document.querySelector("#todoList");
let tasks = JSON.parse(localStorage.getItem("taches")) || [];

// 🔹 Fonction pour ajouter une tâche au DOM et attacher les événements
function ajouterTache(taskText) {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = `Tâche : <span>${taskText}</span> <button class="validateTodo">✅</button><button class="deleteTodo">❌</button>`;
    todoList.append(todoItem);
    
    // 🔹 Ajouter les écouteurs d'événements
    ajouterListeners(todoItem, taskText);
}

// 🔹 Fonction pour attacher les événements aux boutons
function ajouterListeners(todoItem, taskText) {
    let deleteTodo = todoItem.querySelector(".deleteTodo");
    let validateTodo = todoItem.querySelector(".validateTodo");

    // Supprimer la tâche
    deleteTodo.addEventListener("click", function () {
        todoItem.remove();
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem("taches", JSON.stringify(tasks));
        console.log(`Tâche supprimée : ${taskText}`);
    });

    // Marquer comme terminée
    validateTodo.addEventListener("click", function () {
        todoItem.classList.toggle("completed");
    });
}

// 🔹 Charger les tâches sauvegardées au démarrage
tasks.forEach(task => ajouterTache(task));

// 🔹 Ajouter une nouvelle tâche
todoAdd.addEventListener("click", function () {
    let todoInput = document.querySelector("#todoInput");
    let taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("🚨 Impossible d'ajouter une tâche vide !");
        return;
    }

    ajouterTache(taskText);
    tasks.push(taskText);
    localStorage.setItem("taches", JSON.stringify(tasks));
    todoInput.value = "";
});




