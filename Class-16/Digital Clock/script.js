setInterval(()=>{
    const div = document.getElementById("time");
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
},1000);