interface Cliente{
    name: string,
    lastName: string,
    Adrres: Address,
    getFullAdress():string,
}
 interface Address{
    street: string,
    number: number,
    postaCode: number,
 }

 export { Cliente, Address}