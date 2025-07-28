let affichagePerso = function afficherPerso(perso) {
    for(let carac in perso) {
        console.log(carac, " : ", perso[carac]);
    }
}

module.exports = affichagePerso;