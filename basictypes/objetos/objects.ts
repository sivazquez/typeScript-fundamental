(()=>{

    type Hero = {
        name:string,
        age?:number,
        powers:string[],
        getName?:()=>string
    }
    //let flash: {name:string, age?:number, powers:string[],  getName?:()=>string };
    let flash: Hero;
    flash = {
        name: "Barry Alen",
        powers: ["Super velocidad", "Viajar en el tiempo"],
        getName(){
            return this.name;
        },
    };

    console.log(flash);
    let multipleTypes: (string | number | Hero);
})()