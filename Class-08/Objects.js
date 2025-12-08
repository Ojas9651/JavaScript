//Objects

//Objects are the most important topic in JS

//items are stored in key value pair

//CRUD - Create, Read, Update and Delete

//create
let user = {
    name: "Ojas",
    age: 24,
    email: "ojas@gmail.com",
}

//read
console.log(user);

//update
user.aadhar = "123456";
console.log(user);

user.aadhar = "12345";
console.log(user);

//delete

delete user.aadhar;
console.log(user);

//Objects stores keys as String
console.log(user["name"]);

//to get all keys
console.log(Object.keys(user));

//to get all values
console.log(Object.values(user));

//to get both key and values
console.log(Object.entries(user));

//loop
for(let keys in user){
    console.log(keys, user[keys]); //user.keys -> undefined
}

//take out the values -> the bad way

//const age = user.age;

//destructuring -> the good way
const {email, age} = user;
console.log(email, age);

//Array Desctructuring
const arr = [10,20,30,40,50];
const [f,s] = arr;
console.log(f,s);

//for of loop can't be applied on objects
//use the following method

for(let val of Object.keys(user)){
    console.log(user[val]);
}

for(let [key, value] of Object.entries(user)){
    console.log(key, value);
}

//-------------------------------------------------

//we can store functions in Objects
//use this keyword
//We can create objects in objects

const obj = {
    name: "Coder Army",
    age: 20,
    print: function(){
        console.log(`Best Coders ${this.name}`);
        return 20;
    },
    address: {
        city: "Haridwar",
    }
}
console.log(obj.address.city);

//use ...spread operator to make a different copy of object
//but it will not create copy of nested object
//shallow copy
const obj1 = {...obj};
obj1.name = "Rohit Negi";
console.log(obj, obj1);

//deep copy -> It will not copy functions

// const obj2 = structuredClone(obj);
// obj2.address.city = "Lucknow";
//console.log(obj2);

//keys can be Strings or Symbol

const sym = Symbol("id");
const obj2 = {
    [sym]: "Hello",
}
console.log(obj2[sym]);

//-------------------------------------------------------

//How objects are stored in Memory ?

//Map Pointer -> object stores this address
//Property Pointer -> Store key address and value address in array
//Element Pointer -> If there is no space left a new arry defines in heap and element pointer point to new array




