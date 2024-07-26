"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const myFunction = () => {
        let variableLocal = "Variable local";
        console.log(variableLocal);
    };
    myFunction();
    const avengers = {
        ironman: "Robert",
        nick: "Samuel",
        vision: "Paul"
    };
    const printAvengers = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log("IRONMAN:", ironman);
        console.log("AVENGERS REST:", resto);
    };
    printAvengers(avengers);
    const arrayAvngers = ["Ironman", "Nick", "Vision"];
    const [, nick,] = arrayAvngers;
    console.log({ nick });
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const cap = {
        name: "Capitan America",
        weapon: "Escudo"
    };
    const arrayHeroes = [ironman, thor, cap];
    for (const avenger of arrayAvngers) {
        console.log("for of");
        console.log({ avenger });
    }
})();
