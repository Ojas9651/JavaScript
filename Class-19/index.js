//Promises in JS

//Promise is a object with 3 states - Pending , Fulfilled, rejected

//Fulfilled - if server respon then the request is fulfilled

//Rejected - if we fail to connect to server then rejected

//Whenever server will respond the request will fulfilled expect of the following cases - if Internet is down, Server Down or DNS down , then the request is rejected

//Promise be only get read when it is fulfilled or rejected

// const users = fetch("https://api.github.com/users");
// console.log(users);
// const ans = users.then((res)=>{
//     return res.json(); // this is also a async task
// });

// const getUsers = ans.then((res)=>{
//     console.log(res);
// })

//above code gives us the pending promise as fetch is async call

//use .then 
//.json() is also a sync call

//----------------------------------------------

//Promise Chaining -

// fetch("https://api.github.com/users").then((res)=>{
//     return res.json();
// }).then((res)=>{
//     console.log(res);
// });

//-----------------------------------------------

//json - Javascript Object Notation

//Json is a universal format that any language can understand.

//Json was introduced and different servers may use different languages like Java, Python etc, if we send them data in JS object then they will not be able to understand

//In JSON , is not allowed in last 
//Underfined not allowed
//functions not allowed

//Json is a complete string format


const jsObject = {
    name: "John",
    age: 20,
}

//comvert to json

const jsonFormat = JSON.stringify(jsObject);
console.log(jsonFormat);

//undefined will get ignored and comma in end will give error

const json = `{
    "name": "John",
    "age": 30
}`;

const jsObj = JSON.parse(json);
console.log(jsObj);

// json - {"name":"John","age":20}
// js object - { name: 'John', age: 30 }

//---------------------------------------------

//Error Catch and throw new error

// fetch("https://api.github.com/uers").then((res)=>{
//     if(!res.ok) throw new Error("Data not present in server");
//     return res.json();
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//--------------------------------------------

//How to create Promise

const p1 = new Promise((resolve, reject)=>{
    resolve("Promise Resolved");
}).then((res)=>{
    console.log(res);
})

const p2 = new Promise((resolve, reject)=>{
    reject("Promise Rejected");
});

p2.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


