// exercise https://www.codewars.com/kata/5914c6ee51f1d39b5600001c/train/typescript
// Boolean
export let var1Boolean: boolean = true;
// Number
export let var2Decimal: number = 13;
export let var3Hex:number = parseInt('0xf00d');
export let var4Binary:number = parseInt( '111111', 2 );
export let var5Octal:number=0o744 ; 
// String
export let var6String: string = 'Hello, world!';
// Array
export let var7Array:any[] = [1, 'test', {a: 3}, 4, 5];
export let var8NumericArray: number[] = [1, 2, 3, 4, 5];
// Tuple
export let var9Tuple: [string, number] = ['key', 12345];
// Enums
export enum Color {Red = 1, Green = 2, Blue = 4}
export let var10Enum: Color = Color.Blue;
// Any
export let var11ArrayOfAny: any[] = [1, 'test', {a: 3}, 4, 5];
// Void
export function var12VoidFunction(){};
//Null and Undefined
export let var13Null: null = null;
export let var14Undefined: undefined;
// Never
export function var15NeverFunction():never {throw new Error};
