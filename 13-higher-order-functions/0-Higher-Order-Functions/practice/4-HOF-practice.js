// .forEach

// 1.   Given an array of numbers, log them to the console for each number.
const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrOfNums.forEach(
  // Two parameters: element, index
  (element, index) => {
    console.log(element)
  } // Callback function
) // Method
// 2.   Given an array of people, log a greeting to the console for each person.
const arrOfPeople = ['james', 'jim', 'jimmy', 'jimbo', 'jimothy']
arrOfPeople.forEach(
  // Callback function - Two parameters: element, index
  (element, index) => {
    console.log(`Hello, ${element}!`)
  }
)
// 3.   Given an array of mixed values, log whether the value is undefined.
const arrOfMixedValues = [1, 2, 3, undefined, 4, 5, 6, undefined, 7, 8, 9, 10]
arrOfMixedValues.forEach(
  // Callback function - Two parameters: element, index
  (element, index) => {
    if (element === undefined) {
      console.log(`The element at index ${index} is undefined.`)
    }
  }
)
// 4.   Given an array of strings, log the vowel count for each string.
const arrOfStrings = ['hello', 'world', 'this', 'is', 'a', 'test']
let vowelCount = 0
arrOfStrings.forEach(
  // Callback function - Two parameters: element, index
  (element, index) => {
    // Element is a string: 'hello'
    // Loop through each character in the string
    element.split('').forEach(
      // 'h', 'e', 'l', 'l', 'o'
      // callback function - Two parameters: element, index
      (char) => {
        // char is a string: 'h'
        // Check if the character is a vowel
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          vowelCount += 1
        }
      }
    )
  }
)
// 5.   Given an array of numbers, double them and log them to the console.
// const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrOfNums.forEach(
  // Callback function - Two parameters: element, index
  (element) => {
    console.log(element * 2)
  }
)

