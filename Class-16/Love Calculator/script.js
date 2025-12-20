const form = document.getElementById("parent");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const boy = document.getElementById("Boy");
    const girl = document.getElementById("Girl");
    const h2 = document.querySelector("h2");
    h2.textContent = `${((boy.value.length+girl.value.length)^3)%101*10} %`
})