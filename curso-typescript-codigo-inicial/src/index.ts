import { generericfunction, genericfunctionArrow} from "./generics/generics."

console.log(genericfunctionArrow(3.1416).toFixed(2) );
console.log(generericfunction(3.1416).toFixed(2) );
console.log(generericfunction("ivan").toUpperCase() );
console.log(genericfunctionArrow(new Date()).getDay());
