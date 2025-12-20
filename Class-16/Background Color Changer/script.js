const buttons = document.getElementById("buttons");
const body = document.querySelector('body');

buttons.addEventListener('click', (e)=>{
    body.style.backgroundColor = e.srcElement.id;
});