//Strings

const str1 = "Ojas";
const str2 = 'Ojas';
const str3 = `Javascript`; //Modern allows you to write in multiple lines

const age = 5;
const str4 = `Spongebob age is ${age}`;

console.log(str4);

//str.length - used to find string length

//Strings are immutable you cannot change the current string

//str.toUpperCase - convert the string to uppercase
//it doesn't change the original string 

//str.toLowerCase - convert to lower case

//str.indexOf('substring') - gives the start index of substring if not present it gives -1

//str.lastIndexOf('substring')

//str.includes('substring') - true or false

//slice - str.slice(2,7) - 7 excluded

//slice(-4) - to slice 4 elements from last

//str.substring(2,5) - to find the substring

const a = "Ojas";
const b = "Maurya";
console.log(`${a} ${b}`); // string concat

//replace

console.log(a.replace("Ojas", "Spongebob")+" "+b);

//replaceAll - to replace all

//trim() - trim the extra spaces

const user = "    Ojas    "
console.log(user.trim());

//split

const name = "Ojas,Mohit,Rohit,Rohan";
console.log(name.split(","));






