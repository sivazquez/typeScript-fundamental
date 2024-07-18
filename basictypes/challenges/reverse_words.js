"use strict";
//!Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    var revers = '';
    var arrstr = str.split(" ");
    arrstr.forEach(function (element) {
        console.log(element);
        for (var i = element.length - 1; i >= 0; i--) {
            revers += element[i];
        }
        console.log(revers);
        revers += " ";
    });
    console.log(revers);
    return revers;
}
exports.reverseWords = reverseWords;
reverseWords("The quick brown fox jumps over the lazy dog.");
//.god yzal eht revo spmuj xof nworb kciuq ehT
//ehT kciuq nworb xof spmuj revo eht yzal .god
