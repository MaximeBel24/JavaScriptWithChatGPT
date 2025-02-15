export class Personne {
    constructor(nom, age, ville) {
        this.nom = nom;
        this.age = age;
        this.ville = ville;
    }

    sePresenter() {
        console.log(`Bonjour je m'appelle ${this.nom}, j'ai ${this.age} ans et j'habite à ${this.ville}`);
    }

    vieillir(annees) {
        this.age += annees;
        console.log(`${this.nom} a vieilli de ${annees} ans et a maintenant ${this.age} ans.`);
    }
    
}
