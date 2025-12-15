// console.log("Hello Coders!");

//Creating an Element

const newElement = document.createElement("h1");
newElement.textContent = "Best Coder!";
newElement.id = "id_name";

//-----------------------------

//selecting element
const getEl = document.getElementById("first");

//-------------------------------

//put the elment after and before selected element
getEl.after(newElement);
getEl.before(newElement);

//-------------------------------

//to give a class to created element
newElement.className = "class_name";

//-------------------------------

//to apply css
newElement.style.backgroundColor = "pink";
newElement.style.color = "black";

//-------------------------------

//to get any attribute
// console.log(newElement.getAttribute("id"));

//-------------------------------

//to append or prepend a li element in a ul list
const fruits = document.getElementById("fruits");
const li = document.createElement("li");
li.textContent = "Apple";

fruits.append(li);
//use fruits.prepend(li); to add element to top

//-----------------------------------

//Use of Fragments

//console.log(fruits);
const arr = ["milk", "tofu", "halwa", "samosa"];

const foods = document.createElement("ul");
foods.id = "foods";
fruits.after(foods);
// console.log(foods);

const selFruits = document.getElementById("foods");

//this is not the most element way because every time you add a list item the UI gets reloaded and it unnecessiarily loads the UI
//so we use fragments to do this

for(let food of arr){
    const ls = document.createElement("li");
    ls.textContent = food;
    selFruits.append(ls);
}

const fragment = document.createDocumentFragment();

for(let food of arr){
    const ls = document.createElement("li");
    ls.textContent = food;
    fragment.append(ls);
}

//using the arrays
const newArr = [];
for(let food of arr){
    const ls = document.createElement("li");
    ls.textContent = food;
    newArr.push(ls);
}

console.log(newArr);
selFruits.append(fragment);

selFruits.append(...newArr);

//--------------------------------------------------

//to delete a element

const sel = document.getElementById("first");
sel.remove();

//---------------------------------------------------

