//const exampleString = 'Hello World'
//console.log(exampleString[6]);
//          indicies    0           1           2
//          let/const/var arrayName = [ element,element]
//const exampleArray =[ 'item 1' , 'item 2' , 'item3']
//console.log(exampleArray[1]);



//const exampleMixedArray = ['item 1' , 42 , { key:
//'value'}, null,'re' ,'ds']




// Variable - Favorite Movie 
// console.log(favoriteMovies)
//const movie1 ='Scarface'
//const favoriteMovies2 = [ movie1 , 'Shottas' , ' John Wick']
//console.log(favoriteMovies2[0])

//const favoriteMovies = [ 'Scarface' , 'Shottas' , ' John Wick']
//console.log(favoriteMovies[0]);

//console.log(favoriteMovies.at(0));

//console.log(favoriteMovies.length);

//console.log(exampleArray[exampleArray.length - 1]);


// ### Time To Practice! (5 minutes)


  const rugRats = ["Tommy", "Chuckie", "Phil and Lil", "Angelica", "Susie", "Kimi", "Dil", "Spike"];
//`console.log()` the last element.
console.log(rugRats[rugRats.length - 1]);
//`console.log()` the 4th element.
console.log(rugRats[3]);
//`console.log()` the 1st element.
console.log(rugRats[0]);
//`console.log()` `"Kimi"`.
console.log(rugRats[5]);

//const exampleArray = [ 'item 1' , 'item 2' , 'item3' , 'item 4', 'item 5']
// exampleArray(exampleArray .length - 2)
// console.log(exampleArray);
//const myLuckyNumbers = [5, 3, 2, 11, 29];

//myLuckyNumbers [myLuckyNumbers.length - 1] = 
//myLuckyNumbers[myLuckyNumbers.length - 1] / 3
//console.log(myLuckyNumbers)

//myLuckyNumbers[1] = myLuckyNumbers [1] * 3
//console.log(myLuckyNumbers)

// An Array is an objext
// isArray() // Built-in Javascript Array Method
console.log(
    Array.isArray([]) 
    )
console.log (
    Array.isArray({}) 
    )

//indexOf()


//const exampleString = 'b3gon36'
//console.log(
//exampleString.indexOf('3') // First occurence of the string 3 
//);
//const firstOccurOf3 = exampleString[1]
//console.log(firstOccurOf3)

//const firstOccurof3 =exampleString[exampleString. indexOf('3')]
//console.log(firstOccurOf3)


//let exampleArray = [] // pushes element in
//exampleArray.push[' Shawn','Michael', 'Bailey']

//const name1 = [' Shawn','Michael', 'Bailey' ]
// ' Shawn' , ' Michael , 'Bailey'
//const name2 = [ 'Chris' , 'Tommy', 'Jason' ]

// ... Spread Operator (ES6)
//const name1 = [' Shawn','Michael', 'Bailey' ]
//const name2 = [ 'Chris' , 'Tommy', 'Jason' ]

//const newArray = [...name1, ...name2]
//console.log(newArray)
//const newArray = ['Shawn' , 'Michael' , 'Bailey']
//newArray.push('Jason' , 'Anthony' , 'Bailey')
//console.log(newArray)



//Multi-Dimentional Arrays

// Indincies           0        1           2
// indincies                  0 1 2
const multiArray = [[1,2,3], [4,5,6], ["7","8","9"]]; // 5
console.log(multiArray[1])
console.log(multiArray[1][1])