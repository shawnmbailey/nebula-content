// Map
//  Modifying the array it's called on

// forEach
//  Not modifying the array it's called on
//  Iters through the array and does something to each element\

const myArray = [1, 2, 3, 4, 5]
// Pseudo For Each - Written as For Loop
for (let i = 0; i < myArray.length; i++) {
    let element = myArray[i]
    element += 1  console.log(element)
  }
  // For Each
  myArray.forEach((element) => 
  {
    element += 1  console.log(element)
  })

