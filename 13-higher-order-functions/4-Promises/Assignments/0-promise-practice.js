// 1.   What is the order of output?
setTimeout(() => {
  console.log('a');
}, 1);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
console.log('f');
}, 0);

setTimeout(() => {
  console.log('g');
}, 3);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))


// order of out put is b ,e ,f ,a , d c, h i , g

// 2.   Create a promise for something you may, or may not do.

let p = new Promise((resolve, reject) => {
    let x ='clothes have been washed'
    if (x == 'clothes have been washed'){
        resolve('The clothes have been washed')
    }else{
        reject('The clothes have not been washed')
    }
})

p.then((message) =>{
    console.log('The laundry was a success' + message)
  }).catch((message) =>{
    console.log('The laundry was not a success' + message)
  })


// 3.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

let p = new Promise((resolve, reject) => {
    let a = 8 * 8
    setTimeout(() =>{
    if (a === 64) {
      resolve('The math problem has been solved')
    } else {
      reject('The math problem has not been solved')
    }
  }, 5000)
  })




// 4.   Using the prior example use .then and .catch to handle responses and rejections

p.then((message) => {console.log('This is correct')
}).catch((message) => {
  reject('This is incorrect')
})


// 5.   What does a promise resolve to?

// a promise resolve returns a promise object that is resolved with a given value 






// 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page





// 7. What is the output of the following code?
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.finally(v => {
    console.log(v)
})

// the output would be 2,4,8, undefined