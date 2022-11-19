// Select for all the elements with the class of "box"

const holdBoxes = document.querySelectorAll('.box')

// Add a border to all box divs

document.querySelectorAll('.box') [0].style.border = " thick solid #0000FF";
' thick solid #0000FF'
document.querySelectorAll('.box') [1].style.border = " thick solid #0000FF";
' thick solid #0000FF'
document.querySelectorAll('.box') [3].style.border = " thick solid #0000FF";
' thick solid #0000FF'
document.querySelectorAll('.box') [2].style.border = " thick solid #0000FF";
' thick solid #0000FF'

// Add a child element (h1) to each box div labeling it with the box number

document.createElement('h1');
const heading1 = document.createElement('h1');
heading1.innerText = '1';
document.querySelectorAll('.box') [0] .appendChild (heading1)

document.createElement('h1');
const heading2 = document.createElement('h1');
heading2.innerText = '2';
document.querySelectorAll('.box') [1] .appendChild (heading2)

document.createElement('h1');
const heading3 = document.createElement('h1');
heading3.innerText = '3';
document.querySelectorAll('.box') [2] .appendChild (heading3)

document.createElement('h1');
const heading4 = document.createElement('h1');
heading4.innerText = '4';
document.querySelectorAll('.box') [3] .appendChild (heading4)