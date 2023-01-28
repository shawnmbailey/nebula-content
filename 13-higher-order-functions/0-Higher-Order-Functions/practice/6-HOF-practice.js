// .reduce()
// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const nums = [1,2,3,4,5]
let output = nums.reduce(
    // Callback Function - accumulator, currentValue  (accumulator, currentValue) => {
      // accumulator = 0    // currentValue = 1    // SIDE EFFECT -> DOES NOT WORK accumulator = accumulator + currentValue    return accumulator + currentValue  }, 0  )
    console.log(output)
    // 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together  // const nums = [1,2,3,4,5] // 120let output2 = nums.reduce(
    (accumulator, current) => {
      return accumulator * current  }
  )
  console.log(output2)
  // 3.   Write a HOF to reduce all numbers in an array to the largest number const nums1 = [2,8,12,98,167,3]
  // Hold the highest number in the accumulator// Compare the current value to the accumulator// If the current value is greater than the accumulator, replace the accumulator with the current valueconst output3 = nums1.reduce(
    // callback function - accumulator, currentValue  (accumulator, currentValue) => {
      // accumulator = 0    // currentValue = 2    return (accumulator < currentValue) ? accumulator : currentValue  }, 0)
  console.log(output3)
  // 4.   Write a HOF to find the oldest person in a groupconst partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]
  // let Accumulator = {}// Iterate through the people array// Compare the current person's person.age to the accumulator's accumulator.age// If the current person's age is greater than the accumulator's age, replace the accumulator with the current person objectlet oldestPerson = partyPeople.reduce(
    // callback function - accumulator, currentValue  (accumulator, currentValue) => {
      // accumulator = {name: 'John', age: 25}    // currentValue = {name: 'Jordan', age: 18}}    // Compare the current person's person.age to the accumulator's accumulator.age    return (currentValue.age > accumulator.age) ? currentValue : accumulator  }, {age: 0}
  )
  console.log(oldestPerson)