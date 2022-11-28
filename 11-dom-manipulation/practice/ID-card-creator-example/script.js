/*The goal is to have someone to fill in their 'ID card info'

- [X] Create a folder with an index.html, styles.css & script.js 
- [X] Hook up the files together - how do we test they are working? 
- [X] A user must be able to input their Name, id number, address & a fun fact about themselves   
- [X] Create a form with the appropriate inputs    
- [X] Create a button that will submit the form      
- Note: Use e.preventDefault() to prevent the page from refreshing 
- [X] After clicking an update button their id card will update    
-  X] Style a div to look like an ID card - curved corners, an image (start with a  placeholder image)
    */

let name = document.querySelector('#name')

let button = document.querySelector('button')

button.addEventListener('click', e=>{
    let nameInfo = document.createElement('div')
    nameInfo.innerText = `${name.value}`

    let info = document.querySelector('.info')
    
    info.appendChild(nameInfo)
})

let idNumber = document.querySelector('#id')
let idInfo = document.createElement('div')

button.addEventListener('click', e=>{
    idInfo.innerText = `${id.value}`

    let info = document.querySelector('.info')
    
    info.appendChild(idInfo)
})

let address = document.querySelector('#address')
let addressInfo = document.createElement('div')

button.addEventListener('click', e=>{
    addressInfo.innerText = `${address.value}`

    let info = document.querySelector('.info')
    
    info.appendChild(addressInfo)
})

let fact = document.querySelector('#fact')
let factInfo = document.createElement('div')

button.addEventListener('click', e=>{
    factInfo.innerText = `${fact.value}`

    let info = document.querySelector('.info')
    
    info.appendChild(factInfo)
})




