//Functions

function greetings(){
    console.log("Hello");
}
greetings();

//Functions are made to make the code reusable

function addNumber(num1=0, num2=0, num3=0, num4=0){
    sum = num1+num2+num3+num4;
    console.log(sum);
}

addNumber(1,2);
addNumber();

//rest Operator

//If the arguments are flexible use rest operator

function addNumber1(...num){
    let sum = 0;
    for(let val of num){
        sum = sum + val;
    }
    console.log(sum);
}

addNumber1(10,20,30,10);
addNumber1();
addNumber1(2,3,1,4,5);

//Different between spread and rest operator

//rest operator catched the values and spread operaror spreads the value

//spread operator

const arr = [10,20,30,40];
const arr1 = [50,60,70];
const arr2 = [...arr,...arr1];
console.log(arr2);

//rest operator

const[f, s, ...num] = arr;
console.log(f, s, num);

//We can store the function in variable
//but we can't call the function before definition

const addNumber2 = function(num1, num2){
    console.log(num1, num2);
}

//Normal functions can be call from anywhere

//-------------------------

//Arrow Function -

const addNumber3 = (num1, num2)=>{
    console.log(num1+num2);
}

//num => num1+num2; //if single parameter no need to use ()


//IIFE

(function greeting(){
    console.log("Hello World");
})();

//Callback Functions

//When you can call function as argument in another function

function fn(callback){
    callback();
}

