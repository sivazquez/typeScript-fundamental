/*import { generericfunction, genericfunctionArrow} from "./generics/generics."
import {getPokemon} from "./generics/get-pokemon";
import {Pokemon} from "./interfaces"

console.log("POKEMON-GET");
getPokemon(3)
    .then( pokemon => console.log({pokemon}))
    .catch( error => console.error(error))
    .finally(()=> console.log("finalizado"));
/*console.log(genericfunctionArrow(3.1416).toFixed(2) );
console.log(generericfunction(3.1416).toFixed(2) );
console.log(generericfunction("ivan").toUpperCase() );
console.log(genericfunctionArrow(new Date()).getDay());*/
//? decoradores
import { Pokemon } from "./decoradores";

(Pokemon.prototype as any).newkey = 'Otrakey';

const charmander = new Pokemon("Charmander");

console.log(charmander);

charmander.savePokemonToDB(100);
