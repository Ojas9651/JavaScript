//Events in JS

//Anything we do on screen with mouse or keyboard is called an event

//We need to listen to ebents to manipulate

// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Best Coder!";
// }

// const element = document.getElementById("first");
// element.onclick = function(){
//     element.textContent = "Best Coders";
// }

//above method overrides if another onlick event function is defined

//Best Method

// element.addEventListener('click', ()=>{
//     element.textContent = "Best Coder Army";
// })

// element.addEventListener('click', ()=>{
//     element.style.backgroundColor = "brown";
// })

/*
    parent
            children

    const parent = document.getElementById("parent");
    for(let child of parent.children){
        child.addeventListener('click', ()=>{
            child.textContent = "";    
        })
    }

*/

//Bubbling

//Capture Phase -> target phase -> bubbling phase
//3rd agrument is denotes capture phase will be on or off
//if true , it runs the event listener while traversing 
//if false it runs the event listener while bubbling phase

//when an enevtnlistener is clicked it passes an event object in the callback function

//to stop bunnling - e.stopPropogation()

//which element is clicked - e.target

//we can to changes in any element by event listener of the parent - e.target.textContent = "";

const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click', (e)=>{
    console.log("grandparent is clicked");
},false)

const parent = document.getElementById("parent");
parent.addEventListener('click', (e)=>{
    console.log("parent is clicked");
},true)

const child = document.getElementById("child");
child.addEventListener('click', (e)=>{
    console.log("child is clicked");
},false)

//To remove the event listener

function handleClick(e){
    e.target.textContent = "Coder Army";
    grandparent.removeEventListener('click', handleClick);
}

grandparent.addEventListener('click', handleClick);
