import { Personne } from "./Personne.js";

export class Etudiant extends Personne{
    constructor(nom, age, ville, ecole){
        super(nom, age, ville);
        this.ecole = ecole;
    }

    etudier(){
        console.log(`Je suis ${this.nom}, étudiant à ${this.ecole}`);
    }
}