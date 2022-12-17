/* 
Write a class that creates animals
The animals should make a noise
The class should log what the animal eats
The class should log where the animal lives
Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/



class Animal {
    constructor(name,eats,lives, noise){
       this.name = name;
       this.eats = eats;
       this.lives = lives;
       this.noise = noise;
    }

    describe() {
return `This is a ${this.name} , they eat ${this.eats} , they live in ${this.lives} and go ${this.noise}.`;
    }
    
}

let Lion = new Animal('Lion','Antelope', 'Grasslands', 'RAWR!')
let Tiger = new Animal('Tiger','Elephant Calves', 'Savannas','RAWR!')
let Kangaroo = new Animal('Kangaroo','Grass', 'Open Plains', 'GRUNT!')

 console.log(Lion.describe());

/* 
Write a class that creates shoes
The shoe should have a size, color, type, and age. 
Initialize 3 shoes with your class & log a sentence to the console: ex:
`My flipflops are yellow, size 9, and 6 years old.` 
*/

class Shoe {
    constructor(size,color,type,age){
        this.size = size;
        this.color= color;
        this.age = age;
        this.type= type;
    }
    info(){
    return ` My ${this.type} are ${this.color}, size ${this.size}, and are ${this.age} years old.`;
    }
}
let Shoe1 = new Shoe ('10' , 'yellow and black' , 'Jordans' , '1')
let Shoe2 = new Shoe ('10' , 'black,red,and green' ,  'Gucci Slides' ,'1')
let Shoe3 = new Shoe ('10' , 'wheat' , 'Timberlands' , '3')

console.log(Shoe2.info());

/* 
Given the following class that can create shapes, write an extension which will calculate the Surface Area and Volume of a given shape. 
Note, one class extension will likely not be able to handle all shapes, you'll have to extend shape for each unique shape
Log to the console a sentence about your shape:
`Given a cylinder of 2 height and 2 width. It will have a volume of 6.28 and a surface area of 18.84.` 
*/

class Shape{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    getHeight(){
        return this.height
    }
    getWidth(){
        return this.width
    }
}
class Rectangle extends Shape{
    constructor(height,width){
        super(height,width)
    }
    getArea(){
    return this.height*this.width;
    }
    getInfo(){
        return `Given a Rectangle with a height of ${this.height} and a width of ${this.width} the area would be ${this.getArea()} .`
    }
}
class Circle extends Shape{
    constructor(height,width,radius){
    super(height,width)
    this.radius = radius;
    }
    getArea(){
    return((3.14*this.radius)**2);
    }

}
class Triangle extends Shape{
    constructor(height,width){
    super(height,width)
    }
    getArea(){
    return (0.5*this.height*this.width)
    }
   
}
class Trapezoid extends Shape{
    constructor(height,base1,base2){
    super(height)
    this.base1 = base1
    this.base2 = base2
    }
    getArea(){
        return(( this.base1 + this.base2 / 2)*this.height)
    }
}

let rectangle = new Rectangle (5,5)

console.log(rectangle.getInfo());

// Extend 4 classes off of shapes
// Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))
// Have methods to find the areas of the differnt shapes
