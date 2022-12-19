// .Map Practice 

// When you answer these questions I want to see your thought process in pseudo-code/comments.



const message = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'] 

// 1. Using the .map method and the provided array of strings (above), create a new array that containing only the first letter of each string.

// declare variable for new array to be created 
// create function to get firt letter of each string in original array
// console log new array 

const firstLetter = message.map(word => word.charAt(0));
console.log(firstLetter)

// 2. Using the .map method and the provided array of strings (above), create a new array containing only words that are longer than 6 characters.

// Declare a variable for new array
// create function to only get words out of original array that are longer than 6 characters in length
// return new array 
    let sixOrMore = message.map(word=>{
        if(word.length>6){
            return word
        }
    })
    console.log(sixOrMore.join(''))






// 3. Using the .map method and the provided array of strings (above), create a new array containing 3 strings. 
// - The quote
// - The year (2015)
// - The source (Chris Pine - Learn JavaScript)

// declare variable for new arrays 
// extract the information to provide in the new arrays 
// console log the new arrays

