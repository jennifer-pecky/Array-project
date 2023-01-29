// TASKS/////

// first Tasks

// 1. Given an array of numbers ranging from 0 to 25 
// a. filter the even numbers
// b. filter the odd numbers

// EVEN NUMBERS

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

let evenNumber = num.filter(num => num % 2 === 0)

console.log(evenNumber);


// ODD NUMBERS

let oddNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

let oddNUmber = oddNum.filter(oddNum => oddNum % 2 !== 0)

console.log(oddNUmber);


// second tasks

// Given an array of people in a hall: [{name: "John", age: 20}, {name: "Mary", age: 15}, {name: "Bob", age: 25}, {name: "Chioma", age: "19"}, {name: "Chima", age: "18"}]

// a.find the adults (people from age 18 and above)
// b.find the first adult (the first person whose age is above 18)

// ADULTS 

let adults = [

    { name: "John", age: 20 },
    { name: "Mary", age: 15 },
    { name: "Bob", age: 25 },
    { name: "Chioma", age: "19" },
    { name: "Chima", age: "18" }
];


let people = adults.filter(adults => adults.age >= 18)
console.log(people);


// B part

let People = []
adults.forEach(adults => {
    if (adults.age == 18) {
        People.push(adults)
    }
})

console.log(People);


// Third Task


// Given an array of numbers: [1, 2, 3, 4, 5]
// a. use the map()  to create an array of the square of each number in an array
// b. join the two arrays and sort in an ascending order
// c.use the reduce()  to find the sum of all the numbers in the new array

// A part

let Num = [1, 2, 3, 4, 5]


// Map method
let arraymap = Num.map((Number) => {
    return Number * Number
})

console.log(arraymap);

// Concat method
let ascend = Num.concat(arraymap)

console.log(ascend);

// sort method
let sortedNum = ascend.sort((a, b) => a - b)

console.log(sortedNum);

// Reduce method
let Total = sortedNum.reduce((a, b) => a + b
);
console.log(Total);


