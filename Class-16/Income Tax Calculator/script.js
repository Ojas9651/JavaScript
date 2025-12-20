const income = document.querySelector("form");
income.addEventListener('submit', (e)=>{
    e.preventDefault();
    const income = e.target.income.value;
    const tax = calculateTax(income);
    document.querySelector('h2').textContent = `Tax: ${tax} Rs`;
})

function calculateTax(income){
    if(income <= 1200000){
        return 0;
    }
    else if(income > 1200000 && income <= 1600000){
        income = income - 1200000;
        return (income*15)/100;
    }else if(income > 1600000 && income <=2000000){
        income = income - 1200000;
        return (income*20)/100;
    }
    else if(income > 2000000 && income <=2400000){
        income = income - 1200000;
        return (income*25)/100;
    }else{
        income = income - 1200000;
        return (income*30)/100;
    }
}