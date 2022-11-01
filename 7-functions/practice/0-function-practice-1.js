// 1. Write a function that takes in 1 number and returns that number + 1

function addOne(number){
return number + 1
}
console.log(addOne(10))

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function greet( name ){
    return " Good night " +  name +  '.'
}
console.log(greet("John"))
// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
 
let arr = [1 , 2 , 3 , 0 , 4 , 5]
let test = [1 ,2 ,3 , 4]

function hasZero(arrInput){
    if(arrInput.includes(0)){
    return 'This array has the number zero in it'
    }
}
console.log(hasZero(arr))
console.log(hasZero(test))


// 4. Write a function that console logs 'hello world' 10 times to the console. 
const str = "Hello World"
function greet(){
    for( let i = 0; i <= 9; i++ ){
        console.log(str)
    }
}
console.log(greet)

// 5. Write the prior function utilizing a 'fat arrow' function
const add = () => 2 + 2;

console.log(add())