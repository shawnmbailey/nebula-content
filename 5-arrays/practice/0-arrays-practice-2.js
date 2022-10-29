// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr[0] = numArr[0] * 10
console.log(numArr);
numArr.push(6)
console.log(numArr)


// Add an additional element to the prior array
numArr.push(6)
console.log(numArr)


// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
numArr.pop()
let removedItem = numArr
console.log(removedItem)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesnt, log false
if (numArr.includes(1)) {
    console.log(true)
} else {
 console.log(false)   
} ;




// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift()
console.log(removedFirstItem);
// Add that item back
console.log(numArr.unshift());
// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
const sortedArray = sortThis.sort()
console.log(sortedArray); 
// Now reverse the prior array
console.log(sortThis.reverse())
  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const exString = 'My favorite foods are za, pineapple, hawaiian-pizza'

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

console.log(exString.toArray)

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

exString = exString.join('-')
console.log(exString)

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const theArray = [1,2,3,4,5,7,8,9,10]
const indexOfSeven= theArray.indexOf(7)
theArray.splice(indexofSeven, 0, 6)

// Create two arrays and, using JavaScript join them together

// Create a multi-dimensional array