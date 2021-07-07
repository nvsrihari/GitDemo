//defining the class

const Person = require("./basics_classes")

class Pet extends Person{ // declare the class as shown here so that this can be imported into another class.
age = 2

//takes the precenden
get location(){
    return "Blue Cross"
}

// Constructor is called automatically when you create object for the class
constructor (firstName, lastName)
{
    //call the Parent class constructor
    super(firstName, lastName)
    
}

}

 let pet1 = new Pet ("Tomy", "Jimmy")
 pet1.fullName()
 console.log(pet1.location) //if you have a property in the same class then prints from here otherwise, picks from Parent class.
