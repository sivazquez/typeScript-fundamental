"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.var15NeverFunction = exports.var14Undefined = exports.var13Null = exports.var12VoidFunction = exports.var11ArrayOfAny = exports.var10Enum = exports.Color = exports.var9Tuple = exports.var8NumericArray = exports.var7Array = exports.var6String = exports.var5Octal = exports.var4Binary = exports.var3Hex = exports.var2Decimal = exports.var1Boolean = void 0;
exports.var1Boolean = true;
exports.var2Decimal = 13;
exports.var3Hex = parseInt('0xf00d');
exports.var4Binary = parseInt('111111', 2);
exports.var5Octal = 0o744;
exports.var6String = 'Hello, world!';
exports.var7Array = [1, 'test', { a: 3 }, 4, 5];
exports.var8NumericArray = [1, 2, 3, 4, 5];
exports.var9Tuple = ['key', 12345];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (exports.Color = Color = {}));
exports.var10Enum = Color.Blue;
exports.var11ArrayOfAny = [1, 'test', { a: 3 }, 4, 5];
function var12VoidFunction() { }
exports.var12VoidFunction = var12VoidFunction;
;
exports.var13Null = null;
function var15NeverFunction() { throw new Error; }
exports.var15NeverFunction = var15NeverFunction;
;
