"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.var14Undefined = exports.var13Null = exports.var11ArrayOfAny = exports.var10Enum = exports.Color = exports.var9Tuple = exports.var8NumericArray = exports.var7Array = exports.var6String = exports.var5Octal = exports.var4Binary = exports.var3Hex = exports.var2Decimal = exports.var1Boolean = void 0;
exports.var12VoidFunction = var12VoidFunction;
exports.var15NeverFunction = var15NeverFunction;
// exercise https://www.codewars.com/kata/5914c6ee51f1d39b5600001c/train/typescript
// Boolean
exports.var1Boolean = true;
// Number
exports.var2Decimal = 13;
exports.var3Hex = parseInt('0xf00d');
exports.var4Binary = parseInt('111111', 2);
exports.var5Octal = 0o744;
// String
exports.var6String = 'Hello, world!';
// Array
exports.var7Array = [1, 'test', { a: 3 }, 4, 5];
exports.var8NumericArray = [1, 2, 3, 4, 5];
// Tuple
exports.var9Tuple = ['key', 12345];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (exports.Color = Color = {}));
exports.var10Enum = Color.Blue;
// Any
exports.var11ArrayOfAny = [1, 'test', { a: 3 }, 4, 5];
// Void
function var12VoidFunction() { }
;
//Null and Undefined
exports.var13Null = null;
// Never
function var15NeverFunction() { throw new Error; }
;
