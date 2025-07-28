"use strict"
const { Select } = require('enquirer');
let fs = require("fs");
let creationPerso = require('./creation_perso');
let afficherPersos = require('./affichage_persos');
let afficherPerso = require('./affichage_perso');
let supPerso = require('./sup_perso');

let quit = false;

let persoArray = fs.readFileSync("./mes_persos") ? JSON.parse(fs.readFileSync("./mes_persos")) : [];

function choose() {
    let prompt = new Select({
        message: 'Que voulez-vous faire ?',
        choices: [
            {message: 'Créer un personnage', name: 1},
            {message: 'Sélectionner un personnage', name: 2},
            {message: 'Supprimer un personnage', name: 3},
            {message: 'Voir tous vos personnages', name: 4},
            {message: "Quitter l'application", name: 5}
        ]
    });

    return prompt.run()
}

async function chooseAction() {
    while (quit === false) {
        let choix = await choose();
            
        if (choix === 1) {
            creationPerso(persoArray);
            console.log("__________ \n Nouveau personnage créé : ")
            afficherPerso(persoArray[persoArray.length - 1]);
        } else if (choix === 3) {
            supPerso(persoArray);
        } else if (choix === 4) {
            afficherPersos(persoArray);
        } else if (choix === 5) quit = !quit;
    }
}

chooseAction();