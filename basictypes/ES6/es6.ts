(()=>{
    //! let - const:
    const myFunction = ():void =>{
        let variableLocal:string = "Variable local";
        console.log(variableLocal);
    };
    myFunction();
    
    //! Destructuración:
    type Avengers = {
        ironman: string,
        nick: string,
        vision: string
    };

    const avengers: Avengers = {
        ironman: "Robert",
        nick: "Samuel",
        vision: "Paul"
    };

    const printAvengers = ({ironman,...resto}: Avengers):void =>{
        console.log("IRONMAN:", ironman);
        console.log("AVENGERS REST:", resto);
    };
    printAvengers(avengers);

    //! Destructuración de array

    const arrayAvngers:string[] = ["Ironman","Nick","Vision"];
    const [,nick,] = arrayAvngers;
    console.log({nick});

    //! for of
    type Superhero = {
        name: string,
        weapon: string
    };
    const ironman:Superhero = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const thor:Superhero = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const cap:Superhero = {
        name: "Capitan America",
        weapon: "Escudo"
    };

    const arrayHeroes:Superhero[] =[ironman, thor, cap]; 

    for(const avenger of arrayAvngers ){
        console.log("for of");
        console.log({avenger});
    }
})();