//random super hero name

let superheroes = require("superheroes");

let mySuperHeroName = superheroes.random();

console.log(mySuperHeroName);

//random super villain name

let supervillains = require("supervillains");

let mySuperVillainName = supervillains.random();

console.log(mySuperVillainName);


import { Naruto } from "anime-info";

const naruto = new Naruto();

async function searchCharacter ( ) {
    const itachi = await naruto.getCharacter("Itachi_Uchiha");
    console.log(itachi);
}
searchCharacter();
