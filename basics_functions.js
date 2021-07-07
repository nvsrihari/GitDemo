 
 //importing the other class into this class using require keyword - just type the class name and hit tab
 const Person = require('./basics_classes')

 //traditional function
function add(a,b){
    return a + b
}
let sum = add(2,3)
console.log(sum)

//anonymous functions without function name
let sumNos = function(a,b)
{
    return a+b
}
console.log(sumNos(2,4))

//anonymous functions without function name + fat-pipe shorthand operator(=>)
let sumNumbers = (c,d)=>c+d
sumNumbers(5,4)
console.log('sumNumbers')

let person = new Person("Ramesh", "Sannidhi")
person.fullName()

