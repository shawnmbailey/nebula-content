// 1. Write a function that multiplies 3 input numbers together.
function multiply(numOne,numTwo,numThree){
return numOne*numTwo*numThree
}
console.log(multiply(5,7,13))



// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
// logs all odd numbers leading up to that number

function oddNums(numToCountTo){
for(let i=1 ; i <= numToCountTo ;  i++ ){
    if(i % 2 === 1){
        console.log(i)
    }

}
}
oddNums(500)

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
 const names = [ 'Adrian Bailey' , 'Jason Bailey' , 'Paul Bailey', 'Paula Bailey', 'Shawn Bailey']
function intials(listOfNames){
    const listOfInitials = []
    for (let i = 0 ; i < listOfNames.length ; i++){
        let name = listOfNames[i]
        let firstAndLast = name.split(' ')
        for( let index = 0 ;index < firstAndLast.length ; i++ ){
            listOfInitials.push(firstAndLast[index][0].toUpperCase())
        }
    }
    return listOfInitials
 }
console.log(intials(names))
// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
function math(){

}

// 5. Write a function which takes in two arrays and returns those arrays combined together. 
const arr1 = [ 10,9,8,7,6]
const arr2 = [5,4,3,2,1]
function combineArr(arr1,arr2){
    const arrays = arr1.concat(arr2)
    console.log(arrays)
}
