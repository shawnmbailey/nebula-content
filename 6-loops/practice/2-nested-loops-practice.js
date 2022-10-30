// 1.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel']
let letter = 'a'
for (let i = 0; i < names.length; i++) {
    if (names[i].includes('a')) {
        console.log(names[i])
    }
}


// 2.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized 
//      Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']

//const stringArray = ['This','is','an','array','of','strings']

//let newWords =[]

//for(let i = 0; i < stringArray.length; i++){
// const word =stringArray[i]
// let newWord = ''
//for (let index = 0; index < word.length;index++){
//if(index % 2 === 0)
//newWord +=word[index]= word[index].toUpperCase()
//else {
//newWord +=[index]
//}

//}
//newWords.push(newWord)

//}
//console.log(newWords)



// 3.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]

const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]

let sumArray = []
for( let i =0; i <arrayOfArrays.length; i++){
   let innerArray = arrayOfArrays[i]
    console.log(innerArray)
    let sum= 0
    for(let index = 0; index < arrayOfArrays.length; index++){
        let number = innerArray[index]
        console.log(number)
      
    }
}
    //}
    sumArray.push