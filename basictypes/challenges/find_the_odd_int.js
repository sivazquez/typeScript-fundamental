"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
const findOdd = (xs) => {
    let unique = xs.filter((x, i, a) => a.indexOf(x) === i);
    let odd = 0;
    let oddTimesRepeted = xs.length + 1;
    unique.forEach(function (numeroBuscar) {
        let vecesRepetido = 0;
        xs.forEach(function (buscarNum) {
            if (numeroBuscar === buscarNum) {
                vecesRepetido = vecesRepetido + 1;
            }
        });
        if ((vecesRepetido % 2) != 0) {
            if (vecesRepetido < oddTimesRepeted) {
                odd = numeroBuscar;
                oddTimesRepeted = vecesRepetido;
                vecesRepetido = 0;
            }
        }
    });
    return odd;
};
exports.findOdd = findOdd;
