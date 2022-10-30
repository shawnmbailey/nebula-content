// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
           
// //      Each loop it should log to the console 'the current index is _'

             // for ( let i = 0 ; i < 30 ; i++){
            //console.log('the current index is _' , i)
           
           // }


// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
           
            //for( let i = 1 ; i < 10 ; i += 2) {
            //   console.log(i) 
            //}

// //      Each loop it should log to the console the current index



// // 3.   Create an array with your top 5 celebrity names in it. 
 
//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , ' Damian Marley']
                //for( let i = 0 ; i < celebNames.length ; i++){
                //  console.log(celebsNames[i])
                //}

 // //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.



// 4.   Loop over your celebrity list and 

//      If a celebrity's full name has an even number of characters log it to the console

//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , ' Damian Marley']
                //for( let i = 0 ; i < celebNames.length ; i++ ){
                    //if(celebNames[i].length % 2 === 0) {
                       // console.log(celebNames[i])
                   // }
               // }

// 5.   Use the celebrity array for this question

//      Create a for loop which will iterate over each element and output a new array of only first names

//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , 'Damian Marley']
                //for (let i = 0 ; i < celebNames.length ; i++ ){
                //let celebSplit = celebNames[i].split(' ') 
                //    console.log(celebSplit[0])
                // }
                
// 6.   Use the celebrity array for this question

//      Create a for loop which will iterate over each element and output a new array of only last names

//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , 'Damian Marley']
//for ( let i = 0 ; i < celebNames.length ; i++){
//let celebSplitL = celebNames[i].split(' ')
//console.log(celebSplitL[1])
//}


// 7.   Loop over the celebrity list and then loop through each name. 


//      If a letter is a vowel, log it to the console

//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , 'Damian Marley']
 //const vowels = ['a', 'e', 'i', 'o','u'] 
 //for (let i = 0 ; i < celebNames.length ; i++ ){
    //  let currentCelebNames =celebNames[i] 
    //  let celebLetters = currentCelebNames.split('')
    //for(let c = 0 ; c < celebLetters.length ; c++){
       // if ((vowels).includes(celebLetters[c])){
       //     console.log(celebLetters[c])
       // }
       
    //}
           
    
//}



    


// // 8.   Loop over the celebrity list and then loop through each name. 

// //      If a letter is uppercase, log it to the console

//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , 'Damian Marley']
//const upperCase = ['M' , 'J' , 'T' , 'S' , 'R' , 'W' , 'F', 'M' ,'D'] 
//for (let i = 0 ; i < celebNames.length ; i++ ){
//     let currentCelebNames =celebNames[i] 
//   let celebLettersUp = currentCelebNames.split('')
//    for(let u = 0 ; u < celebLettersUp.length ; u++){
//     if ((upperCase).includes(celebLettersUp[u])){
//    console.log(celebLettersUp[u])
//    }
       
//   }
           
    
//}


// // 9.   Convert your celebrity array to all caps and no spaces:
//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , 'Damian Marley']

//let convertedCelebNames =[]


//for( let i = 0 ; i < celebNames.length ; i++){
//    let currentCelebNames = celebNames[i]
//    let currentLetters = currentCelebNames.split('')
//    let convertedCurrentName =[]
//    
//    for(let n = 0 ; n < currentLetters.length  ; n++){
//    let currentLetter = currentLetters[n]
    
//    if(currentLetter=== (' ')){
//       convertedCurrentName.push('-')
//    }
//    else{
//        convertedCurrentName.push(currentLetter.toUpperCase())
//    }
//}
// convertedCelebNames.push(convertedCurrentName.join(''))


//}
//console.log(convertedCelebNames)




// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]



// 10.  Index your array to find your favorite celebrity. 
//let celebNames = [ 'Michael Jackson' , 'Tupac Shakur' , 'Roger Waters' , 'Freddy Mercury' , 'Damian Marley']
//let favCelebName = 'Roger Waters'
//for( let c = 0 ; c < celebNames.length ; c++){
// let fav = favCelebName[c]
// if (fav === 2){
//    break;
// }
//}
//console.log(favCelebName)


//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop



//BONUS:

//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console
