var marks = [10, 20, 30, 40, 50, 60]

console.log(marks[2])
marks[4] = 80
console.log(marks[4])
console.log(marks.length)
marks.push(65) //add the value at the end
console.log(marks)
marks.pop() //removes the last one in the array
console.log(marks)
marks.unshift(12) //adds the value at the beginning of the array
console.log(marks)

console.log(marks.indexOf(50)) // tells the position of the array

console.log(marks.includes(50)) // tells whether the value present in the array or not

//create a sub-arry from the main array - prints from 2 to 4
submarks = marks.slice(2, 5)
console.log(submarks)

//for loop for array
var sum = 0
for(let i = 0; i<marks.length; i++)
{

    sum = sum + marks[i]
    console.log(marks[i])

}
console.log(sum)

//reduce filter map - does the same job as for loop but in single line
let total = marks.reduce((sum1, mark) =>sum1+mark, 0)
console.log(total)

//get the even numbers from the array ans push it to another array
var scores = [10, 11, 12, 13, 14, 15]
var evenscores = []
for(let i = 0; i<scores.length; i++)
{
    if (scores[i]%2 == 0)
    evenscores.push(scores[i])
}
console.log(evenscores)

//instead of using the above logic, user filter method
let filterEvenScores = scores.filter(score=> score%2==0)
console.log(filterEvenScores)

//map array function - will modify each and every value in the array
//multiply every value with 3 in the given array
let mappedArray = filterEvenScores.map(score=>score*3)
console.log(mappedArray)

//sum the values in the array
let totalVal = mappedArray.reduce((sum, val)=>sum+val, 0)
console.log(totalVal)

//you can chain the above 3 functions - filter, map, reduce into one
var scores1 = [12, 13, 14, 16]
let sumValues = scores1.filter((score=>score%2==0)).map(score=>score*3).reduce((sum, val)=>sum+val, 0)
console.log(sumValues)

//Sorting an array
let fruits = ["banana", "mango", "pomogranate", "kiwi"]

console.log(fruits.sort())
console.log(fruits.reverse())

//sorting a numbers in array
var scores1 = [145, 13, 114, 16]
//console.log(scores1.sort())  //this didn't sort

//use the following method to sort the array which it is using the bubble sort. Ascending Order
console.log(scores1.sort((a, b)=> a-b))
console.log(scores1.sort((a, b)=> b-a)) // prints in descending order