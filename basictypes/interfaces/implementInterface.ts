import { Cliente, Address } from "./interfaces";

interface AddNumbers{
    (a: number, b: number):number;
}
const cliente:Cliente = {
    name: "Ivan",
    lastName: "Vazquez",
    Adrres: {
        street: "Fuente de titanio",
        number: 1648,
        postaCode: 45615,
    },
    getFullAdress() {
        return `${this.Adrres.street} ${this.Adrres.number} ${this.Adrres.postaCode} `
    },
};

console.log(cliente);
console.log(cliente.getFullAdress());

let addNumber:AddNumbers;

addNumber = (a:number, b:number):number =>{
    return a + b;
}