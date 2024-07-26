"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.avgAge;
        }
        ;
        constructor(realname, name, team) {
            this.realname = realname;
            this.name = name;
            this.team = team;
        }
        getName() {
            return this.name;
        }
        ;
        getRealName() {
            return this.realname;
        }
        ;
        getTeam() {
            return this.team;
        }
    }
    Avenger.avgAge = 30;
    class Xmen extends Avenger {
        constructor(isMutand, realname, name, team) {
            super(realname, name, team);
            this.isMutand = isMutand;
        }
    }
    const antman = new Avenger('Scott Lang', 'Ant-Man', 'Capitan');
    const wolverine = new Xmen(false, "Logan", "Wolverine", "xmen");
    class Task {
        constructor(name, quality) {
            this.name = name;
            this.quality = quality;
        }
        set nameUpper(name) {
            this.name = name.toUpperCase();
        }
        set qualityRound(quality) {
            this.quality = Math.round(quality);
        }
        get nameUpper() {
            return this.name;
        }
        get qualityRound() {
            return Math.round(this.quality);
        }
    }
    class Fruta {
        constructor(name) {
            this.name = name;
        }
    }
    class Tropical extends Fruta {
        constructor(color, name) {
            super(name);
            this.color = color;
        }
    }
    const sandia = new Tropical("Rojo", "Sandia");
    console.log(sandia);
})();
