 const car1 = {
// Key: Value OR Property: Value  make: 'Honda',
          model: 'Accord',
          year: 2020,
          color: 'red',
          start() { console.log('Vroom!') },
          briefDescription() { 
            console.log(this.color) 
          }
        }
        // function CarGenerator(make, model, year, color) {
        // return {
        //     make,
        //     model,
        //     year,
        //     color
        //   }
        // }

          class Car {
          constructor(color, make, model, productionYear, productionMonth) {
            this.color = color    
            this.make = make   
            this.model = model   
            this.productionYear = productionYear    
            this.productionMonth = productionMonth  
        }

          start () { console.log('Vroom!') }
          paint(newColor) {
            this.color = newColor   
             console.log(`The car is now ${this.color}`)
          }
        }
        const car2 = new Car('blue', 'Lamborghini', 'Pananerjam', 2020, 'June')
        
        
        // class className {
        //   constructor() {}
        //   method1() {}
        //   method2() {}
        //   method3() {}
        // }


            console.log(car2)
            car2.paint('red')
            // function carDescriber(car) {
            //   console.log(`This car is a ${car.year} ${car.make} ${car.model}`)
            // }
            // carDescriber(car1)
            // car1.briefDescription()

            // Log out all of the keys in the car object
            // console.log(Object.keys(car1) // [ 'make', 'model', 'year', 'color', 'start' ] 
            // )

            // console.log(typeof car1.start) // function
            // CRUD  

            // Create  
            // car1.miles = 1000  
            // Read  
            // console.log(car1.mil0es) // 1000  
            // Update  // car1.miles = 2000  
            // console.log(car1) 
             // Delete  
             // delete car1.miles  
             // console.log(car1)