/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

https://www.codewars.com/kata/54da5a58ea159efa38000836/typescript
*/
var xs = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];
xs.reduce(function (a, b) { return a ^ b; });
console.log(xs.reduce(function (a, b) { return a ^ b; }));
/*
export const findOdd = (xs: number[]): number => {
    //get unique values numbers in array
    let unique:number[] = xs.filter((x,i,a)=>a.indexOf(x)=== i);
    let odd:number = 0;
    let oddTimesRepeted:number = xs.length+1;
    //Repetitive click to compare each element the times it is repeated and if it is repeated, know if it is odd and if it is the smallest of the repetitions, indicate it.
    unique.forEach(function(numeroBuscar){
        let vecesRepetido:number = 0;
        xs.forEach(function(buscarNum){
            if(numeroBuscar === buscarNum){
                vecesRepetido = vecesRepetido+1;
            }
        });
       
        if((vecesRepetido%2) != 0){
             // ES ODD
            if(vecesRepetido < oddTimesRepeted ){
                odd = numeroBuscar;
                oddTimesRepeted = vecesRepetido;
                vecesRepetido = 0
            }
        }
    });
    return odd;
  };
  

*/ 
