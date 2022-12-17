// Create a class for theatre  
// List of shows    
// What is the soonest show? https://stackoverflow.com/questions/20079837/how-to-find-the-earliest-date-in-an-array-using-javascript
// Create a class for Show 
    // List of Cast Members [Person]  
    // Dates [Date, Date, Date] https://www.w3schools.com/js/js_dates.asp
// Create a cast for Person 
    // First Name at a minimum

    class Theatre {
        constructor(name,listofShows){
            this.name = name
            this.listofShows = listofShows
        }
       
    }

    class Show{
        constructor(name, cast, dates){
            this.name = name
            this.cast = cast
            this.dates = dates
        }
    }

    class Person{
        constructor(firstName){
            this.firstName= firstName
        }
    }