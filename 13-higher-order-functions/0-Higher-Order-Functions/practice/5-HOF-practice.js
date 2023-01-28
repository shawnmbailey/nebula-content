// .filter()
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1.   Write a function to filter an array for all the numbers greater than 5
nums.filter(
  // Callback Function - Two parameters: element, index
  (num) => {
    // Return true if the number is greater than 5
    // Return false if the number is less than or equal to 5
    return num > 5
  }
)
// 2.   Write a function to filter an array for all the even numbers
// const nums = [1,2,3,4,5,6,7,8,9,10]
nums.filter(
  // Callback Function - Two parameters: element, index
  (num) => {
    // Return true if the number is even
    // Return false if the number is odd
    return num % 2 === 0
  }
)
// 3.   Write a function to filter an array for all the non number items
const mixedArray = [1, 'hello', 2, 'world', 3, 'this', 4, 'is', 5, 'a', 6, 'test']
// Hello World this is a test
const nonNumber = mixedArray.filter(
  // callback function - Two parameters: element, index
  (element) => {
    // Return true if the element is not a number
    // Return false if the element is a number
    // Current Value: 1
    // element = 1 // typeof element = 'number'
    // Current Value: 'hello'
    // element = 'hello' // typeof element = 'string'
    if (typeof element !== 'number') {
      return true
    }
    return false
  }
)
console.log(nonNumber)
// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]
const ofAge = partyPeople.filter(
  // callback function - Two parameters: element, index
  (person) => {
    // return true if the person is over the age of 21
    // return false if the person is under the age of 21
    if (person.age >= 21) {
      return true
    }
    return false
  }
)
console.log(ofAge)
// 5.   Write a function to filter out all letters from a string
//      Hint: filter doesn't work on strings..
let sortaString = 'hel4lo w32orl1d t14his 5i3s2 a1 te23st' // Hello World this is a test
sortaString = sortaString.split('')
const hiddenMessage = sortaString.filter(
  // callback function - Two parameters: element, index
  (char) => {
    // return true if it's a letter
    // return false if it's a number
    if (parseInt(char) || char === '0') {
      return false
    }
    return true
  }
).join('')
console.log(hiddenMessage)