let afficherUnPerso = require('./affichage_perso');

let affichagePersos = function afficherPerso(arr) {
    for(let perso of arr) {
        console.log("Personnage n°", arr.indexOf(perso)+1);
        afficherUnPerso(perso);
        console.log("___________");
    }
}

module.exports = affichagePersos;