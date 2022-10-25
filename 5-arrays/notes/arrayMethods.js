// Merging (Concatenating) Arrays The concat() method creates a new array by merging (concatenating) existing arrays:

const arr1 = [ 'red', 'blue', 'green']
const arr2 = [ 'purple', 'pink', 'orange']
const arr3 = ['yellow', 'brown', 'black']
const Colors = arr1.concat(arr2, arr3);
console.log(Colors);


// Javascript Array slice -the slice() method slices out a piece of an array into a new array.

const cars = ["BMW" , "Mercedes Benz" , "Maseratti" , "Ford" , "Chevy" ];
const Euro = cars.slice(0, 3); 
console.log(Euro);
console.log(cars)