//**Conditionals, Loops and Operators**

//for notes - https://www.notion.so/Lecture-04-27b3a78e0e228099a515cf3dd04dd9ac

//Arithmatic Operator 

console.log(2+2); // 4
console.log(5-3); // 2
console.log(2*2); // 4
console.log(2/1); // 2
console.log(2%10); // 2
console.log(5**3); // a^b // 125

//Assignment Operator - "="

let x = 20;
let y = 10;

x = x+y;

console.log(x); //30

//Comparison Operator - >, <, >=, <=, ==, ===

//Returns true or false

let a = "10";
let b = Number(a);
console.log(b); //10

//When we compare number to string string converted to number

console.log(a == b); //true

//Sctrict Check also checks the type

console.log(a === b); //false

//NaN - Not a Number 

a = "121ac";
b = Number(a);
console.log(b); // NaN 

//Number to String

a = 10;
b = String(a);
console.log(b); // 10
console.log(typeof b); // string

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN

//ECMA script set the rules for the conversion

//Computer Science Challenge

a = 0.1;
b = 0.2;
let c = a+b;

console.log(c == 0.3); // false
console.log(c); // 0.3000000000000004

//Try to solve the above problem

//Rules -

//1: null is loosley equal to undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

//2: >, <, >=, <= (null --> number, undefined --> NaN)

//these are converted to number then compared

console.log(null >= 0); // true

console.log("Rohit" > "Mohit");

//compares ascci value of every character

//a - z : 97 - 122
//A - Z : 65 - 90

//NaN != NaN

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

//Loops -


//for 

for(let i=0; i<10; i++){
    console.log(i);
}

//while

i=0;
while(i < 5){
    console.log(i);
    i++;
}

//do-while

i=0;
do{
    console.log(i);
    i++;
}while(i<5);

//if-else Statement

let age = 18;

if(age >= 18){
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible")
}

//Logical Operator

//&& - if both conditions are true

    console.log(true && true);
    console.log(true && false);

a = "";
b = "Rohit";
console.log(a&&b);

//for && if first value is true it directly return second value

//for && if first value is false then it returns the first value it self

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

// || - if any condition is true

    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || false); // false
    console.log(false || true); // true

// != 

//Bitwise AND - &
//Bitwiese  OR - |
