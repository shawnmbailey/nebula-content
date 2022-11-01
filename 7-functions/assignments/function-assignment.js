// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str) {
    let newString = ("");
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(solution('world'));
console.log(solution ('word'))

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr (n, s) {
    let repeated = ''
    for ( let i =0 ; i<n ; i++){
      repeated += s
    }
    return repeated ;
  }

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
    findSmallestInt = args => Math.min(...args)
      
  }

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
function arrayPlusArray(arr1,arr2){
    return arr1.concat(arr2).reduce((a, b) => a + b);
   }
   console.log(arrayPlusArray( [1,2,3] , [4,5,6]));


// https://www.codewars.com/kata/544675c6f971f7399a000e79
const stringToNumber = function(str){
    return Number(str)
 }
 console.log(stringToNumber('555'))