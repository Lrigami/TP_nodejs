"use strict"
let prompt = require('prompt-sync')();
let fs = require("fs");

let personnage = {}

let creationPerso = function(array) {
    // nom, classe, arme, endurance, force, agilité, intelligence
    personnage.nom = prompt("Choisissez votre nom.");
    personnage.classe = prompt("Choisissez votre classe.");
    personnage.arme = prompt("Choisissez votre arme.");
    personnage.endurance = Number(prompt("Entrez votre endurance."));
    personnage.agilite = Number(prompt("Entrez votre agilité."));
    personnage.intelligence = Number(prompt("Entrez votre intelligence."));

    array.push(personnage);
    fs.writeFileSync("mes_persos", JSON.stringify(array), "UTF-8");
}

module.exports = creationPerso;