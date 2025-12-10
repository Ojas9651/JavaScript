//Hoisting

//Most Importatnt topic for Interviews

//Code Run -- > Execution Context

//jabbhi hum code ko run krenge sabse pehle uska execution context create hoga aur execution context 2 phases me run hoga

//1. Memory Allocation
//2. Execution Phase

var a = 10;
var b = 20;

function addNumber(num1, num2){
    var sum = num1+num2;
    return sum;
}

var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);
console.log(sumResult1,sumResult2);

/* Global Execution Context
    Memory                          Execution

    a = undefined
    b = undefined
    addNumber = {fn code}
    sumResult1 = undefined    
    sumResult2 = undefined
*/

/* Global Execution Context
    Memory                          Execution

    a = 10
    b = 20
    addNumber = {fn code}
    sumResult1 = firse execution context create hoga    
    sumResult2 = undefined
*/

//function ke code ko run krne ke liye firse execution context create hoga

/*
    Memory                          Execution

    num1 = undefined
    num2 = undefined
    sum = undefined

*/

//Execution phase

/*
    Memory                          Execution

    num1 = 10
    num2 = 20
    sum = 30
    
*/

/* Global Execution Context
    Memory                          Execution

    a = 10
    b = 20
    addNumber = {fn code}
    sumResult1 = 30    
    sumResult2 = firse execution context create hoga
*/

/*
    Memory                          Execution

    num1 = undefined
    num2 = undefined
    sum = undefined

*/

//Execution phase

    /*
        Memory                          Execution

        num1 = 4
        num2 = 5
        sum = 9
        
    */

/*  Global Execution Context
    Memory                          Execution

    a = 10
    b = 20
    addNumber = {fn code}
    sumResult1 = 30    
    sumResult2 = 9
*/

//Memory allocate kaha ho ri hai ?

//Stack me Execution Context create hota hai

//if variables are let or const

//Memory Allocation

// a = <uninitialized> (Temporal Dead Zone)

