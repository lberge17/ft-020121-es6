// Destructuring

// with arrays
const students = ["Elias", "Matthew", "Abner", "Zack"]
// const elias = students[0]
// const matthew = students[1]
// const zack = student[3]
const [elias, matthew,,zack] = students

// with objects
const laura = {
    name: "Laura",
    job: "cohort lead",
    field: "web dev"
}
// order does NOT matter, variable needs to match key
const {field, name, job} = laura

// WHY????
function teacherHTML(person){
    return `<div>
        <p>Name: ${person.name}</p>
        <p>Job: ${person.job}</p>
        <p>Field: ${person.field}</p>
    </div>`
}
teacherHTML(laura)
function teacherHTMLES6({name, job, field}){
    return `<div>
        <p>Name: ${name}</p>
        <p>Job: ${job}</p>
        <p>Field: ${field}</p>
    </div>`
}
teacherHTMLES6(laura)

// Key/value object

const dogName = "Jitta"
const dogBreed = "mutant chihuahua"
const dogAge = 3

const jitta = {
    dogName, 
    dogBreed, 
    dogAge
}

// fetch("url", {
//     method: "POST",
//     headers: {
//         Accept: "application/json"
//         // 
//     },
//     body: JSON.stringify({
//         dogName, 
//         dogBreed, 
//         dogAge
//     })
// })

// Spread Operators (immutability)
// making a copy of an object (or array)
const eri = {...laura, name: "Eri", coolness: 11}
const copyOfLaura = {...laura}

let numbers = [1,2,3,4,5]
let newNumbers = [...numbers]
newNumbers.push(6)

// Arrow Functions
function normalFunction(){console.log("a")}

const arrowFunction = () => {
    console.log("I'm a normal function")
    // will return undefined if no explicit return
    return "Need the explicit return here"
}
const singleLine = () => "Implicit return"
const singleObjReturn = () => ({name: "ryan"})

// in arrow functions, `this` is defined when the function is defined

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age

        // this.mightBeMe = this.mightBeMe.bind(this)
    } // very similar to initialize

    bark(){
        console.log("bark")
    }

    mightBeMe(){
        console.log(this)
    }

    alwaysMe = () => {
        console.log(this)
    }
}
const j = new Dog("jitta", "chihuahua")

const btn = document.getElementById("click")
// btn.addEventListener("click", j.mightBeMe)
// btn.addEventListener("click", j.mightBeMe.bind(j))
btn.addEventListener("click", j.alwaysMe)
