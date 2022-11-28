let button = document.querySelector('#submit')
let amount = 0

button.addEventListener('click', e=>{
    e.preventDefault()
    let text = document.querySelector('#txt')
    let form = document.querySelector('#form')
    let todoInfo = document.createElement('div')
    amount++
    // broken needs refactor
    // todoInfo.innerHTML = `<p>${text.value}</p>
    // <button onClick=${deleteFunction(amount)} class="delete">Delete task</button>`
    
    todoInfo.innerHTML = `<p>${text.value}</p>
    <button onClick="deleteFunction(${amount})" class="delete">Delete task</button>`
    todoInfo.id = `todo_${amount}`
    let tasks = document.querySelector('#tasks')
    
    console.log(amount)
    tasks.appendChild(todoInfo)
    form.reset()
})

function deleteFunction(e){
    let todo = document.querySelector(`#todo_${e}`)
    todo.remove()
}