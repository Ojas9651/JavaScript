//Scope and Closure and Higher Order Function

//Scope

//1.  global --> all
//2. functional --> function
//3. block level scope --> if else

//global variables
let a = 10;
const b = 20;
console.log(a,b);

function greet(){
    const c = 30; // functional scope
    console.log(c);
}

if(true){
    var d = 40;
    console.log(d);
}

console.log(d); // var doesnt repect scopes

//----------------------------
let global = 30;
function globall(){
    let global = 40;
    console.log(global);
}

globall();
//-----------------------------

//Closure - A function that remembers the outer scope variables even after the outer function is executed

function createCounter(){

    let count = 0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}

const counter = createCounter();
console.log(counter());

/*
        stack               heap

    |               |       
    | count=0       |      | fnCode:Create Counter        
    | increment     |      | fnCode:increment                   
    | ------------- |      | count=0                 
    | createCounter |
    | counter       |

*/

//When the createCounter fn is returning and it sees that the increment function is using the variable count that is global for increment it sends the count variable in the heap

//Closure function are used so that developer can avoid mistakes by making the variable private

//Banking Application

function createBankAccount(){
    let balance = 0;
    const user = {
        getBalance: function(){
            return balance;
        },
        deposit: function(amount){
            if(typeof amount === "number" && amount > 0){
                balance += amount;
            }
            return balance;
        },
        withdraw: function(amount){
            if(amount > 0 && amount <= balance){
                balance -= amount;
            }else{
                console.log("Invalid Option");
            }
            return balance;
        } 
    }
    return user;
}

const customer = createBankAccount();
console.log(customer.deposit(500));
console.log(customer.getBalance());
console.log(customer.withdraw(300));
console.log(customer.getBalance());

//------------------------------------------------------

//Higher Order Function

//1. The function we are passing as argument in another function is higher order function

//2. Function that we are returning from any other function is also higher order function.





