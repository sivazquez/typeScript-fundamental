"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSquare(n) {
    const c = Math.round(Math.sqrt(n));
    return c * c === n;
}
exports.default = isSquare;
