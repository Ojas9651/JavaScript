//Arrays

//In JavaScript Arrays are Objects

let marks = [1,2,3,4,5];
console.log(marks);

console.log(marks.length); // length of Array

//We can put HeteroGenous data in Array in JS

let arr = [10,"name",false];

console.log(arr);

//Arrays are Objects and Non Promitive Hence Mutable in JS

arr[0] = 20;
console.log(arr);

//arr.push() -> to push element inl ast

arr.push(20);
console.log(arr);

//arr.pop() -> delete element from last

arr.pop();
console.log(arr);

//To insert element at first place

//arr.unshift()

arr.unshift("first");
console.log(arr);

//To delete first element

//arr.shift()

arr.shift();
console.log(arr);

//It is advidsable to not use shift and unshift as it downgrades the system performance

//How to Iterate ?

//Normal for loop

let arr1 = [10,20,30,40,50];
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

//for-of loop

for(let num of arr1){
    console.log(num);
}

//When you copu a array values do not copy only refrence copied

let array = [1,2,3,4,5];
let array1 = array;
array1 = [10,20,30];
console.log(array);
console.log(array1);

const ar = [10,20];
ar[0] = 50; //can do this
//ar = [50,20]; // cannot do this
console.log(ar);

const arr2 = [10,20,30,40,50];
console.log(arr2.slice(1,4)); //slice

//splice - changes in original array

console.log(arr2.splice(2,4)); //remove these elements start from 2 

console.log(arr2); //print the remaining elements

//Goto 1st index and remove 3 elements and start adding the elements
//arr = array.splice(1,3,"Array", 20);

//---------------------------------------------

//concat

const array2 = [10,20,30,40,50];
const array3 = [60,70,"Coder", "Army"];
const array4 = array2.concat(array3);
console.log(array4);

//spread operator - Very Important

//...

const arr3 = [10,20,30,40];
const arr4 = [60,70,"Coder", "Army"];
const arr5 = [...arr3,...arr4];
console.log(arr5);

//toString() // seperate by ,

//If you want to convert an array into String

const names = ["Alice", "Bob", "Charlie"];
console.log(names.toString());

//join -

//seperate by character you enter

console.log(names.join(" "));

//indexOf - returns the first time an element occurs

console.log(names.indexOf("Bob"));

//--------------------------------------------------

//Sorting

const names1 = ["Alice","Rohit", "Mohit", "Bob", "Charlie"];
names1.sort();
console.log(names1);

//In JS arrays store the Heterogenous data that is why when you sort a number array it treats it like a string

const a = [10,9,8,5,6];
console.log(a.sort());

//to sort by numbers

a.sort((a,b)=> a-b);
console.log(a);

//arr.flat() -> to flat the 2D arrays

const array10 = [10,20,30,[40,90,11],80];
console.log(array10[3][0]);

//array10.flat(1);
console.log(array10.flat());