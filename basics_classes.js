//defining the class

module.exports =  class Person{ // declare the class as shown here so that this can be imported into another class.
age = 25

get location(){
    return "Canada"
}

// Constructor is called automatically when you create object for the class
constructor (firstName, lastName)
{
    this.firstName = firstName
    this.lastName = lastName
}

fullName()
{
    console.log(this.firstName+this.lastName)
}

}

// let person = new Person()
// let person1 = new Person("Srihari", "Nagulavaram")
// console.log(person.age)
// console.log(person.location)
// person1.fullName()
