function printDecorator(constructor: Function){
    console.log(constructor);
}

const printToconsole = ( print: boolean = false): Function =>{
    if( print ){
        return printDecorator;
    }else{
        return () =>{};
    }
}

const blockPrototypeExtensible = function( constructor: Function ){
    Object.seal( constructor );
    Object.seal( constructor.prototype );
};
//? Method decorator
function CheckValidPokemonID() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originaMethod = descriptor.value;
        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ){
                console.error( "El Id del pokemon debe de estar entre 1 y 800");
            }else{
                return originaMethod(id);
            }
        }        
    } 
};
//? Decoretor of properties
function readonly( isWritable: boolean = true):Function {
    return function (target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this,'getter');
                return "https://pokeapi.co";
            },
            set( this, val ){
                console.log(this, val );
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: false,
                    enumerable: false
                });
            }
        }
        return descriptor;
    };
};
//? Decoretor of Class
//@printDecorator
//? factory decorator
//@printToconsole(false)
//@blockPrototypeExtensible



export class Pokemon{
    @readonly(false)
    public api:string = "https://aaa";
    
    constructor(
        public name:string
    ){}

    //? Method decorator 
    // @CheckValidPokemonID()
    savePokemonToDB( id: number ){
        console.log(`save pokemon en DB ${id}` );
    }
}   