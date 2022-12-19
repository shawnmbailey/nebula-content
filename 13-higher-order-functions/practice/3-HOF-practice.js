// Loop through these numbers and add 1 each one
// const nums = [1, 2, 3, 4, 5]
// console.log
//     nums.map(num => {
//  return num += 1  })

// create a variable that you will use to store the new array
// reassign the variable to the result of calling .map() on the array
const nums = [1, 2, 3, 4, 5]
let newArr = []
function multiply(){
    for(let i=0; i < nums.length;i++){
        newArr.push(nums[i]*5)
    }
    return newArr
}
console.log(multiply());
// .map()
// 1.   Using .map() create a new array that doubles all the numbers in a given array
const arr = [2,4,6,8]
console.log(
    arr.map(arr =>{
        return arr*2
    }
))
function double(arr){
    let newArray= []
    for (let i = 0; i < arr.length; i++){
      newArray.push(arr[i]*2)
    }
    return newArray
  }

// 2.   Using .map() create a new array that halves all numbers in a given array
const arr2 = [5,10,15,20]
console.log(
    arr2.map(arr2 =>{
        return arr2/2
    }
))

function halves(arr2){
    let newArray2= []
    for (let i = 0; i < arr2.length; i++){
      newArray2.push(arr2[i]/2)
    }
    return newArray2
  }
// 3.   Using .map() create a new array that finds the power of all the numbers in a given array
const arr3 = [3,6,9,12]
console.log(
    arr3.map(arr3 =>{
        return arr3**2
    }
))
function power(arr3){
    let newArray3= []
    for (let i = 0; i < arr3.length; i++){
      newArray3.push(arr3[i]**2)
    }
  }

// 4.   Using .map() create a new array of all capital strings from an array of lower case strings
// Create a variable that you will use to store the new array
const names = [ 'john', 'jason','paul']
console.log(
    names.map(name =>{
        return name.toUpperCase()
    }
    )
)

// Assign the variable to the result of calling .map() on the array

    // Example input: ['pamela', 'michael', 'angela']

// .map will capitalize each string

// Example Input: 'pamela' // One String

// For each character in a single string (Hint .split('') .join(''))

// Split the string into an array of characters

// .map() over the array of characters

//   Capitalize each letter in the array of characters

// 5.   Using .map() create a new array of greeting sentences from an array of given people
// Create a variable that you will use to store the new array

// Assign the variable to the result of calling .map() on the array

// .map will create a greeting for each person

// name => `Hello ${name}`

// Log that

//      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']

