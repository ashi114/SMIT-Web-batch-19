// A Smarter Way to Learn Java Script

// let myName = "My name is Arshad"
// alert(myName)

// let a = 5;
// let b = 6;

// let c = a + b
// console.log(c)

// let num1 = 4
// let num2 = 5

// console.log("4" - num2)

// myName = prompt("Please your name")

// if(myName === "Arshad"){
//     alert("Correct Answer")
// }else {
//     alert("Wrong Name")
// }

// let correctName = "Vatican"
// let userName = prompt("Please enter your city")

// if(correctName === userName){
//     alert("Name Matched")
// }

// else if(userName === "Rome"){
//     alert("Wrong but close")
// }

// else{
//     alert("Wrong answer")
// }

// let age = +prompt("Please enter your age")
// let gender = prompt("Please enter your gender")

// if(age > 18 && age <= 65 && gender=="male"){
//     alert("You can come for the try out")
// } else{
//     alert("Not eligible")
// }

// let a = 4
// let b = 5
// let c = 1
// let d = 6
// let g = 9
// let h = 8
// let e;

// if (c === d) {
//     if (a === b) {
//         e = 7
//     }
//     else if (g === h) {
//         e = 9
//     }
//     else {
//         e = 10
//     }
// } else {
//     e = 10
// }

// console.log(e)

// let cities = ["Atlanta", "Rome", "Karachi"]
// console.log(cities[2])

// let pets = []
// pets[0] = "Dog"
// pets[1] = "Cat"

// console.log(pets)
// let array1= ["arshad","ali","Muhammad"]

// for(let i = 0; i<array1.length;i++){
//     console.log(`Hello my name is ${array1[i]}`)
// }

//  using flags

// let matchFound = false

// for(let i = 0; i<cities.length;i++){
//     if(cities[i]==="Vatican"){
//         matchFound=true
//         console.log("City Found")
//     }
// }

// if(matchFound === false){
//     console.log("City is not Found")
// }

// let firstName = ["Muhammad "]
// let lastName = ["Arshad", "Ali", "Siddiqui"]

// let fullName = [];

// for (let i = 0; i < firstName.length; i++) {
//     for (let j = 0; j < lastName.length; j++) {
//         fullName.push(firstName[i] + lastName[j])
//     }

// }

// console.log(fullName)


// let cleanCities = ["lahore", "peshawar", "hyderabad"]

// let citiesTocheck = prompt("Please Enter Your City")
// citiesTocheck = citiesTocheck.toLowerCase()

// for (let i = 0; i < cleanCities.length; i++) {
//     if (citiesTocheck == cleanCities[i]) {
//         alert("Your City is the Cleanest")
//     }
//     else {
//         alert("Polluted City")
//     }
// }

// let firstCharac = citiesTocheck.slice(0,1)
// firstCharac = firstCharac.toUpperCase()
// let otherCharac = citiesTocheck.slice(1)
// otherCharac = otherCharac.toLowerCase()

// let fullName = firstCharac + otherCharac
// console.log(fullName)

// let countWords = "This is a Beautiful Day"
// let count = 0

// for (let i = 0; i < countWords.length; i++) {
//     if (countWords[i] == " "){
//         count++
//     }
// }

// console.log(count)


// let text = "even in the darkest depths of World War II"
// let firstChar = text.indexOf("World War II")
// console.log(firstChar)

// for (let i = 0; i < text.length; i++) {
//     if(i == firstChar){
//         text = text.slice(0,firstChar) + "The Second World War II" + text.slice(firstChar + 12)
//     } 
// }
// console.log(text)

// let text = "To be or not to be"
// lastChar = text.lastIndexOf("be")

// console.log(lastChar)

// newText = text.replace("World War II","The Second World War II")
// console.log(newText)

// const num = 0.548899
// let avgNum = Math.round(num)
// let avgNum1 = Math.floor(num)
// let avgNum2 = Math.ceil(num)

// console.log(avgNum,avgNum1,avgNum2)

// const random = Math.random()
// const improvedNumber = Math.floor(random * 6)
// console.log(improvedNumber)

// const ageInput = prompt("Please Enter Your Age")

// const validAge = parseInt(ageInput)

// console.log(validAge,typeof(validAge))

/// Converting to Number and Numbers to String

// const varString = "36.55555"
// const varNumber = Number(varString)

// const varStrtoNum = varNumber.toString()

// console.log(varString,varNumber,varStrtoNum,typeof(varString),typeof(varNumber),typeof(varStrtoNum))
// const totalFixed = varNumber.toFixed()
// console.log(totalFixed)

// Dates (important in JS)

// const rightNow = new Date()
// console.log(rightNow)
// console.log(rightNow)

// const nowDay = rightNow.getDay()
// console.log(nowDay)

// const nowMonth = rightNow.getMonth()
// console.log(nowMonth)

// const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const today = rightNow.getDay()

// const nameOfToday = dayNames[today]

// console.log(nameOfToday)

// const currYear = rightNow.getFullYear()
// console.log(currYear)

// const currTime = rightNow.getTime()
// console.log(currTime)

// const doomsDay = new Date("June 30, 2035")
// const doomsTime = doomsDay.getTime()
// console.log(doomsTime)

// rightNow.setMonth(12)
// console.log(rightNow)

/// Functions

// function tellTime(){
//     let newDate = new Date()
//     let newHour = newDate.getHours()
//     let newMinutes = newDate.getMinutes()

//     console.log(`Current Time is: ${newHour}:${newMinutes}`)
// }

// tellTime()

// function greetUser(greeting){
//     alert(greeting)
// }

// greetUser("Hi There")

// const almostAMil = 999999
// console.log(almostAMil)

// let orderTotal;

// function CalcTot(mercTotal) {
//     if(mercTotal>100){
//         orderTotal=mercTotal
//     }
//     else if(mercTotal<50){
//         orderTotal=mercTotal+5
//     }
//     else{
//         orderTotal = mercTotal + 5 + ((mercTotal-50)*0.03)
//     }
//     console.log(orderTotal)
// }

// CalcTot(70)

// Building a Basic Currency Converter

// function currentConverter(amount, exRate = 285) {
//     const value = +prompt("Please Enter your Amount")
//     if (isNaN(value)) {
//         alert("Please Enter Numerical Value")
//     }
//     else {
//         convertedValue = value / exRate
//     }

//     console.log(convertedValue)
// }

// currentConverter(285)

dayOfWeek = "Mon"

switch (dayOfWeek) {
    case "Sun":
        alert("Whippy");
        break
    case "Sat":
        alert("Weekend");
        break
    case "Fri":
        alert("Last Day of Work");
        break
    default:
        alert("Let's Get Out")
}