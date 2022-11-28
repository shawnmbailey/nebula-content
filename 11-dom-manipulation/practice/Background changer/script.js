let clicked = false;

let square = document.querySelector('.square')

let body = document.querySelector('body')

let input = document.querySelector('#myInput')

let inputValue = ''

let heading = document.createElement('h1')

let button = document.querySelector('#button')

document.addEventListener("click",(e) => {
    console.log(e.target)
    if(e.target === document.querySelector('.square')){
        clicked = !clicked
        console.log(`clicked: ${clicked}`)
    }
    clicked ? body.style.backgroundColor = 'black': body.style.backgroundColor = 'blue'
});


input.addEventListener('input' , (e) => {
    inputValue = (e.target.value)
    console.log(inputValue)
    heading.innerText = inputValue

})

button.addEventListener('click', (e) => {
    console.log(inputValue)
    document.querySelector('body').appendChild(heading) 
  
});

//let clicked = false;

//let square = document.querySelector('.square')

//let body = document.querySelector('body')

//let input = document.querySelector('#myInput')

//let inputValue = ''

//let heading = document.createElement('h1')

//let button = document.querySelector('#myBtn')