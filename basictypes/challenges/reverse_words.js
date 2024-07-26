"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    let revers = '';
    let arrstr = str.split(" ");
    arrstr.forEach(element => {
        for (let i = element.length - 1; i >= 0; i--) {
            revers += element[i];
        }
        revers += " ";
    });
    return revers.trim();
}
exports.reverseWords = reverseWords;
