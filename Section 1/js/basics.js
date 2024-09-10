console.log ("Hello from my side");
console.log ("Hello from my side");
console.log ("Hello from my side");

// Types of variables
// 1. var
// 2. let
// 3. cosnt-

var a = 10
console. log(a)

let b = 20
console. log(b)

const c = 30
console. log(c)

// using let we can change the value of  variable 
b = 40
console.log(b)
// Using const we can't change the value of varibale
// C= 50
// console.log(c)

var x = 30
//Redeclaration is passible in var
var x =40

//Reassignment is possibe in var

x=50
console.log(x)
let y= 30
//Redeclaration in not possible in let
// let y= 40
// Reassing is possible in let
y= 50

console .log(y)
// redecclaration and reassignment is not possible in const

console.log ("-----------------")
//Local scope
let num = 10
console .log(num)

if( true) {
    let num = 20
    console.log(num)
}

console.log(num)
 console.log("-----------------------")
 // Global scope 
 var num1=10
 console.log(num1)

 if (true) {
    var num1=20
    console.log(num1)
 }
 console.log(num1)




