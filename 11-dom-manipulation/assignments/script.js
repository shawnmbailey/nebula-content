// Grab the elements and log them to the console
const p = document.querySelector('p');
console.log(p);
const h1 = document.querySelectorAll('h1');
console.log(h1);
const span = document.querySelector('span');
console.log(span);


// Q1:  Attach this document to the index.html


// Q2:  Grab the second element that has the text Hello
const hello2 = document.querySelector('#first')

// Q3:  Grab the text in the h1 that says 'Good Afternoon'
const textSelect = document.querySelectorAll('h1')[2];
console.log(textSelect);
console.log(textSelect.textContent);

// Q4:  Grab the h1 with the text that says "Catch me if you can"
const catchMe = document.querySelector('.catch-me');
console.log(catchMe);

// Q5:  Grab the span element and change the text to "Got ya"
document.querySelector('span');
span.innerText = 'got ya';