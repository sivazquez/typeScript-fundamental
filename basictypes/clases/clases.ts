(()=>{
    class Avenger{
        //! Propiedades tradicional
        //private realName:string;
        //public name:string;
        //public team?:string;
        static avgAge:number = 30;
        static getAvgAge(){
            return this.avgAge;
        };
        //!constructor tradicional
        /*constructor(realname:string, name:string, team?:string){
            this.realName = realname;
            this.name = name;
            this.team = team;
        }*/
       //! Constructor rapido
       constructor(
        private realname:string, 
        public name:string,
        public team?:string
       ){}

       public getName(){
            return this.name;
       };
       private getRealName(){
            return this.realname;
       };

       protected getTeam(){
        return this.team;
       }
    }

    class Xmen extends Avenger {
        constructor(
            public isMutand: boolean,
            realname:string,
            name:string,
            team:string
        ){
            super(realname, name, team);
        }
    }
    const antman  = new Avenger('Scott Lang', 'Ant-Man','Capitan');
    //console.log({antman});
    //console.log(Avenger.avgAge);
    //console.log(Avenger.getAvgAge());
    //console.log(antman.getName());
    const wolverine = new Xmen(false,"Logan", "Wolverine","xmen");

    //console.log({wolverine});
    //console.log(wolverine.getName());

    class Task{
        

        constructor(
            private name: string,
            private quality: number
        ){}
        set nameUpper( name: string ){
             this.name = name.toUpperCase();
        }
        set qualityRound( quality: number){
            this.quality = Math.round(quality);
        }

        get nameUpper():string{
            return this.name;
        }

        get qualityRound():number{
            return Math.round(this.quality);
        }
    }

    //const task = new Task("Valor incial",122.9);
    //task.nameUpper = "Crear nuevo Boton";
    //console.log(task.nameUpper);
    //console.log(task.qualityRound);
    abstract class Fruta{
        constructor(
            public name: string
        ){}
    }

    class Tropical extends Fruta{
        constructor(
            public color: string,
            name: string
        ){
            super(name);
        }
    }

    const sandia = new Tropical("Rojo","Sandia");
    console.log(sandia);
})();