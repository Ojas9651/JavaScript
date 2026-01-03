//Class in JS

//Class Notes - https://www.notion.so/Lecture-21-Prototype-and-Class-in-javascript-2a73a78e0e2280f9a76ad7141e3bd3b6?source=copy_link

//Classes are the blueprint that how your object will look like or how many variable will it have or what functions , properties or methods will it have

//In below examplae there are objects in which there a profile function which is same for all the objects and we are not following the DRY principle

const obj1 = {
    name: "John",
    age:30,
    profile: function(){
        console.log("Software Developer");
    }
}

const obj2 = {
    name: "Brock",
    age:30,
    profile: function(){
        console.log("Software Developer");
    }
}

const obj3 = {
    name: "Rock",
    age:30,
    profile: function(){
        console.log("Software Developer");
    }
}

//We can write it only once and use in all objects and we can achieve by classes

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    profile(){                                  //this function will get saved in person.prototype
        console.log("Software Engineer");
    }
}

class Customer extends Person{
    constructor(name, age, account, balance){
        super(name, age);
        this.account = account;
        this.balance = balance;
    }

    printBalance(){
        return this.balance;
    }
}

const c1 = new Customer("john", 20, 12, 500);
console.log(c1);