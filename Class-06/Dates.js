//Date

const now = new Date();
console.log(now); // UTC
console.log(now.toString()); //Your Location Time
console.log(now.getDay());
console.log(now.getMonth()+1);

//days: Mon-Sun(1-0)
const date = new Date(2025,11,5,10,30,20,30);
console.log(date.toString());

//now = Date.now() - gives date in milisecond

const dates = new Date(0);
console.log(dates.toString());
