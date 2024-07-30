// Crear interfaces
interface Auto{
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;
};
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil2:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Payaso{
  reir?:boolean,
  comer?:boolean,
  llorar?:boolean
};

const guason:Payaso = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Payaso ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Ciduad{
  (ciudados:string[]):number
};

const ciudadGotica:Ciduad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
enum Sexo {
  "Hombre",
  "mujer"
}
enum estadoCivil{
  "Casado",
  "soltero"
}
interface Persona{
  nombre:string;
  edad:number;
  sexo:Sexo;
  estadoCivil:estadoCivil;
  imprimirBio():void
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Persona {
  constructor(
    public nombre:string,
    public edad:number,
    public sexo:Sexo,
    public estadoCivil:estadoCivil,
  ){}
  
  imprimirBio(){}
}