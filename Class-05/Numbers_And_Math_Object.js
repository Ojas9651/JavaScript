//Numbers

//Primitive Data - Comparison by value
//Non Primitive - Comparison by refrence

let a = 10;
let b = 345.6821;

//toFixed - retured the value as String

//to get the folat number to a fixed decimal place use toFixed

console.log(typeof b, typeof b.toFixed(3), b.toFixed(3));

//toPrecision - given the precise value from starting

console.log(b.toPrecision(4));

//toString - change the number to String

console.log(typeof b.toString());

//We can create a number by one more way
//Creates number as Object
//We do not use this method to create a number

let num = new Number(0);
console.log(num);
console.log(typeof num);

let num2 = 0;
console.log(Boolean(num), Boolean(num2));

//by new keyword the Number was created as object so Boolean doesn't check it value 0 or 1 but it checks whether the stack has the objects refrence in heap.

//--------------------------------------------------

//Math Object

console.log(Math.abs(-4));
console.log(Math.PI.toFixed(3));
console.log(Math.LN10);

//Math.random() - generates the value between 1 and 0 where 0 is included but 1 is not included

console.log(Math.floor(Math.random()*10));

num = Math.floor(Math.random()*6)+1;
console.log(num);

//15-25

num = Math.floor(Math.random()*11)+15;
console.log(num);

//4 digit OTP generator

console.log(Math.floor(Math.random()*(9999-1000+1))+1000);

//Random number generator takes device time as seed and manipulates the data and return the random number

