// 1.   Create an object for a celebrity and save it to a variable
//const celebrity = {
//}

// 2.   Using dot-notation add 3 key-value pairs to the celebrity
const celebrity = {
}
celebrity.age = '29'
celebrity.name = 'Keke Palmer'
celebrity.birthplace = 'Illinois'
console.log(celebrity)

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity

const celeb = {
   name: 'Keke Palmer',
   age: '29',
   birthplace: 'Illinois'
} 
celeb['HairColor']='Black'
celeb['EyeColor']= 'Brown'
celeb['height']= '5 foot 6 inches'
console.log(celeb)

// 4.   Write a function that allows us to add or update 3 properties
getNameAgeHeight = function(name ,age,height) {
    celeb.name= name
    celeb.age = age
    celeb.height= height
    
}
console.log(getNameAgeHeight('Keke Palmer' , '29' , '5 foot 6 inches'))

// 5.   Using a loop - log all the celebrities properties to the console


