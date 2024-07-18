//!Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

export function reverseWords(str: string): string {
    let revers:string = '';
    let arrstr: string[] = str.split(" ");
    
    arrstr.forEach(element => {
        for(let i: number = element.length -1; i>=0; i--){
            revers += element[i];
        }
        revers += " ";
    });

    return revers.trim();
  }

//? 1. first create an array with the original words
//? 2. loop through each word and make it an array of characters
//? 3. reverse the array and make it a string again, so it is a word again but reversed
//? 4. join the resulting array
  
//?return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
//reverseWords("The quick brown fox jumps over the lazy dog.");
//.god yzal eht revo spmuj xof nworb kciuq ehT
//ehT kciuq nworb xof spmuj revo eht yzal .god

