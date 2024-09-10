// There are three types of conditions in JavaScript
// 1. if statement
// 2. if-else statement
// 3. if-else-if statement
// 4. switch statement


console.log("")
// if statement
let age_1 = 18
if (age_1 >= 18) {
    console.log("You can vote")
} if (age_1 === 18) {
    console.log("You are 18 so you also can vote")
} if (age_1 < 18) {
    console.log("You can't vote")
}

console.log("---------------------------")

// if-else-if statement
let age_2 = 18
if (age_2 >= 18) {
    console.log("You can vote")
} else if (age_2 === 18) {
    console.log("You are 18 so you also can vote")
} else {
    console.log("You can't vote")
}