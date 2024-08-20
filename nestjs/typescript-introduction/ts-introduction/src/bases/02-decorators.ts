class DecoratorTwo{
    constructor(){}
    speak(){
        console.log("metodo speak Decorador two")
    }
    scream(){
        console.log("metodo scream Decorador two")
    }
}

const mydecorator = () =>{
    return ( target: Function) =>{
        return DecoratorTwo;
    };
}
@mydecorator()
class DecoratorOne{
    constructor(){}
    speak(){
        console.log("metodo speak Decorador one")
    }
    scream(){
        console.log("metodo scream Decorador one")
    }
}



export const decoratorInstance = new DecoratorOne();
