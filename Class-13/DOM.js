//Document Object Model

//In JS we can manipulate the objects, arrays etc

//How to manipulate the elements of HTML ?
//Answer - All the tags are converted into objects

//Browser automatically converts the HTML content to the object and then we manipulate the object

const temp = window.document.getElementById("id");
temp.textContent="Hello Coder Army";

//window - it is the global object that is created by the browser and attch it with your js file

//console.log is not the part of the core JS, it the part of the window object

//we do need to write window. as it browser automatically append it 

//window.document - it contains whole HTML file in object form

//documtnt -> HTML -> head and body

//Why dom is needed ?
//JS can manipulate the objects but the HTML filr is not object so we convert it in to object

//Difference bewtween innerHTML, innerText and textContent

//innerHTML - shows all data of the selected Tag
//innerText - shows the datat that will display on browser
//textContent - shows all the text of the selected tag but ignore the tag inside the selected tag

document.getElementByTagName("li");
document.getElementsByClassName("class_name");
document.querySelector("#id");
document.querySelectorAll(".class_name");

//convert list to array

//const arr = [...list];