// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16

const addition = (num1,num2) => num1 + num2
const subtraction = (num1,num2) => num1-num2

 const calculate = (num1,num2,callback) => {
    return callback(num1,num2)
}
 console.log(calculate( 2,4,addition));
 console.log(calculate( 2,4,subtraction));

// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14

const multiply = (num1,num2,num3) => num1*num2*num3
const divide = (num1,num2,num3) => num1/num2/num3

const calculateAll = (num1,num2,num3,callback) => {
    return callback(num1,num2,num3)
}
console.log(calculateAll( 3,5,7,multiply));
console.log(calculateAll( 12,4,2,divide));

// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]