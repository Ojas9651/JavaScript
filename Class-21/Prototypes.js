//Prototypes and Class in JS

const obj1 = {
    name: "John",
    age: 30,
    profile: function(){
        console.log("Software Developer");
    }
}

const obj2 = {
    account: 20,
}

console.log(obj2.name);

//If we are tru=ying access the property of Obj1 by Obj2 it says undefined

//We can make prototype and point the obj1 from obj2

obj2.__proto__ = obj1;

console.log(obj2.name);

console.log(obj1.hasOwnProperty("name"));