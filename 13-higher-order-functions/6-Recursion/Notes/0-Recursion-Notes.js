// Find the factorial of 5 and 14
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 14! = 14 * 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 87178291200

function factorial(num) {
    if(num===0){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}
console.log(factorial(5))


function factorial(num) {
    if(num===0){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}
console.log(factorial(14))


// Write a function to make Bender the bending unit and Calculon the calculating unit fight each other until one of them has a durability of 0 or less. 
// The robots should throw punches that have a 50% chance of hitting the other robot.   
// If the punch hits, the other robot's durability should be reduced by the punchPower of the robot that threw the punch.
 // The function should return the name of the robot that won the fight.  
  // If both robots die at the same time, the function should return 'Both robots died'.;
  const bender = { name: 'Bender', durability: 25, punchPower: 3 };
const calculon = { name: 'Calculon', durability: 30, punchPower: 2 };
const fight = (robot1, robot2) => {
if(robot1.durabilty<= 0 && robot2.durabilty<=0) return 'Both robots dead'
if(robot1.durability<= 0) return `${robot1.name} won the fight`
if(robot2.durability<= 0) return `${robot2.name} won the fight`

}
