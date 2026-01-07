//this call apply bind

//strict mode vs non strict mode
//we need to use strict mode at start
//global object is for Node js and window object is for windows
//Common name is : globalThis for both browser and Node JS
//this keyword : In Node JS env it will point to empty obj but in browser points to window object

var a = 10;
b = 10;

console.log(a, b); // It will print the value of a and b even when the b is not declared

function greet(name, name){
    console.log(name, name);
}

greet("John", "Doe"); // It will not give error even two sane mname variables passed

//------------------------------------

//JS ECMA 5 update gives the feature of strict

'use strict' // write this to avoid above bugs

var a = 10;
b = 20;

console.log(a, b); // It will thow error that b is not defined

function greet(name, name){
    console.log(name, name);
}

greet("John", "Doe"); // It will throw error of duplicate parameters passed

// //---------------------------------------------------

//window -  node js dont know window object it is for browser
//global - window do not know global object it is for Node JS

console.log(global);

console.log(globalThis); // it is universal for both Node JS and browser

// //--------------------------------------------

// //this keyword

console.log(this); // In Node JS env it will point to empty obj but in browser points to window object

//In below exapmple 2 objects user and user2 are using same greet funtion, we used this keword so that this will point the current object

//But we are not following the DRY pinciple as we are copying the greet function on user2 that end up taking extra space 2 time for greet function

const user = {
    name: "John",
    age: 20,
    greet: function(){
        console.log(this);
        console.log(this.name); // this == user
    }
}

user.greet();

const user2 = {
    name: "Doe",
    age: 10,
}

user2.greet = user.greet;

user2.greet();

//Use the following method to avoid re writing the function

function greet(){
    console.log(this.name);
}

const user1 = {
    name: "John",
    age: 10,
}

const user2 = {
    name: "Doe",
    age: 20,
}

greet.call(user1);
greet.call(user2);

function greet(){
    console.log(this.name);
}

function changeNameAndAge(name, age){
    this.name = name;
    this.age += age;
    console.log(this.name, " ", this.age);
}

const user1 = {
    name: "John",
    age: 10,
}

const user2 = {
    name: "Doe",
    age: 20,
}

greet.call(user1);
greet.call(user2);

//use of .call and .apply

changeNameAndAge.call(user1, "Brock", 20);
changeNameAndAge.apply(user2, ["Bhagat Singh", 10]);

//use of .bind

//it will bind the changes in changeNameAndAge but will not call

const change = changeNameAndAge.bind(user1, "Netaji Subhash Chandra", 20);

//if you want to call

change();

//-------------------------------------

//class

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// this = {}

const p1 = new Person("John", 20);
console.log(p1);

//--------------------------------------------

//Arrow Function : this doesn't exist for arrow function and it takes the this keword from lexical environment scope (it borrows from outer scope)

const greet = ()=>{
    console.log(this);
}

greet();


//In the below example the this keyword in setInterval points to its start function but not to stopwatch object

const stopwatch = {
    second: 0,
    start: function(){
        const that = this;
        setInterval(function(){
            that.second++;
            console.log(that.second);
        },1000);
    } 
}

stopwatch.start();

//We use arrow function to fix this as it borrows from the outer scope

const stopwatch = {
    second: 0,
    start: function (){
        setInterval(()=>{
            this.second++;
            console.log(this.second);
        },1000);
    } 
}

stopwatch.start();

const button = document.getElementById("first");

button.addEventListener('click', function(){
    console.log(this); // point to button
})

button.addEventListener('click', ()=>{
    console.log(this); // point to window object
})

