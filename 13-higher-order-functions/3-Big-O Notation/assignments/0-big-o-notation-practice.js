// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}


// Big O notation of this problem is O(n) because it loops through the array regardless of the length of it .



// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}

//  Big O notation of this problem is O(n) because it loops through the array regardless of the length of it .



// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
    console.log(arr[arr.length-1]);
}



//  The big o notation is O(1) because it is looping through there is no dependence on the input size
// It will only require one execution step 



// 5..   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';

    for(let i = 0; i < str.length; i+=2){
        newStr += str[i]
    }

    return newStr;
}
 //  Big O notation of this problem is O(n) because it loops through the string regardless of the length of it .



// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num
}
//  The big o notation is O(1) because it is looping through there is no dependence on the input size
// It will only require one execution step 


// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num
    return final * 3
}
//  The big o notation is O(1) because it is looping through there is no dependence on the input size
// It will only require one execution step 



// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
    let arrReversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReversed.push(arr[i])
    }
    return arrReversed
}
//  Big O notation of this problem is O(n) because it loops through the array regardless of the length of it .


// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j
      }
    }
    return total
}
// Big O notation of this problem is O(n^2) because it loops through the array regardless of the length of it .


// 10.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);
//  The big o notation is O(1) because it is looping through there is no dependence on the input size
// It will only require one execution step 




// 11.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);
// //  The big o notation is O(1) because it is looping through there is no dependence on the input size
// It will only require one execution step 



// 12.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
}
//  Big O notation of this problem is O(log n) because we are executing the operation faster by multiplying by 2.