const div = document.getElementById('time');
let newYearTime = new Date(2026,0,1).getTime();

setInterval(()=>{
    let currentTime = Date.now();
    let timeLeft = newYearTime - currentTime;
    div.textContent = calculateTime(timeLeft);
},1000);

function calculateTime(timeLeft){
    let days = Math.floor(timeLeft/(1000*60*60*24));
    timeLeft = timeLeft%(1000*60*60*24);

    let hours = Math.floor(timeLeft/(1000*60*60));
    timeLeft = timeLeft%(1000*60*60);

    let minutes = Math.floor(timeLeft/(1000*60));
    timeLeft = timeLeft%(1000*60);

    let seconds = Math.floor(timeLeft/1000);
    
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}