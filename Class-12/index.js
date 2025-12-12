//Map, Filter, Reduce, Set & Map

//for-each loop

const arr = [1,2,3,4,5];

arr.forEach((num, index, arr)=>{
    console.log(num, index, arr);
})

//--------------------------------------------

//filter

const newArr = arr.filter((num) => num > 2);
//console.log(newArr);

//Making our own filtring function

//arr.filtering only makes the changes to current array

//use following -

Array.prototype.filtering = function(compare){
    const newArr = [];
    for(let num of this){
        if(compare(num)) newArr.push(num);
    }
    return newArr;
}

const newArray = arr.filtering((num)=> num>2);
console.log(newArray);

const a = [10,20,30,40];
const ans = a.filtering((num)=> num>10);
console.log(ans);

//----------------------------------------------------

//Mapping

const array = [10,20,30,40,50];
const new_Array = array.map((num)=>num*2);
console.log(new_Array);

//Homework - Build your own map method

//Reducer

const products = [
    {name: "Laptop", price: 50000},
    {name: "smartphone", price: 20000}
]

console.log(products.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue.price;
},0)); //0 is the initial value of the accumulator

//-------------------------------------------------------------

//Data Structure: Set 
//Set only allows unique values

const ar = [10,20,30,10,20,40];
const s1 = new Set(ar);
console.log(s1);

//st.push(), st.delete()

//----------------------------------------

//Data Structure: Map
//Map store the values in ke:value pair

const m1 = new Map([
    ["john", 40],
    [40, "brock"],
    [true, "retired"],
    [[1,2,3,4,5], " "]
]);
console.log(m1);

