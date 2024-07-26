import { Cliente, Address } from "./interfaces";

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