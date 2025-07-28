let prompt = require('prompt-sync')();
const { Select } = require('enquirer');
let fs = require("fs");

function choose(arr) {
    let prompt = new Select({
        message: 'Quel personnage souhaitez-vous supprimer ?',
        choices: []
    });

    for (let perso of arr) {
        prompt.choices.push({message: perso.nom, name: arr.indexOf(perso)+1});
    }

    return prompt.run()
}

let supPerso = async function(arr) {
    let choix = await choose(arr);
    console.log(arr[choix-1].nom, " a bien été supprimé.");
    arr.splice(choix - 1, 1);
    fs.writeFileSync("./mes_persos", JSON.stringify(arr), "utf-8");
}

module.exports = supPerso;