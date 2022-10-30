// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'



// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'




//for loop
//let inPut = ['a','b','c', 100,'e'] 
//for(i= 0 ; i < inPut.length ; i++){
    //if(typeof inPut[i] == 'number'){
    //console.log(inPut[i])
    //console.log(`at index ${i} there is the number ${inPut[i]}`)
    //}
   
//}



// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console

let newArray = []
let input = [ 'a','b', 'c' ,100 , 'e']
for( let i = 0; i < input.length; i++){
    if(i==='number'){
    continue
    }
    console.log(newArray)
}
newArray.push(input[i])