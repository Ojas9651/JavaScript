const body = document.querySelector('body');


body.addEventListener('click', (e)=>{

     const circleElement = document.createElement('div');

     circleElement.classList.add('circle');

     const colors = ['aqua', 'red', 'green', 'orange', 'pink'];
     circleElement.style.backgroundColor = colors[Math.floor(Math.random()*5)];

     circleElement.style.top = `${e.clientY-25}px`;
     circleElement.style.left = `${e.clientX-25}px`;

     body.append(circleElement);

     setTimeout(()=>{
        circleElement.remove();
     },5000);
})