//Zomato Delivery App

const orderDetails = {
    order_id: 12345,
    amount: 620,
    food: ["dal", "rice"],
    customer_name: "John",
    customer_location: "Mars",
    restraunt_location: "Moon"
}

async function placeOrder(orderDetails){
    console.log(`Your payment for Rs. ${orderDetails.amount} is in progress`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Payment is received and your Order for ${orderDetails.food} is placed`);
            resolve(orderDetails);
        },5000)
    })
}

function preparingOrder(orderDetails){
    console.log(`Your order ${orderDetails.food} is getting prepared`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Your order is prepared");
            resolve(orderDetails);
        },5000);
    })
}

function pickupOrder(orderDetails){
    console.log(`I am on the way to pick the order from ${orderDetails.restraunt_location}`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Order is picked from ${orderDetails.restraunt_location}`);
            resolve(orderDetails);
        },5000);
    })
}

function deliverOrder(orderDetails){
    console.log(`I am on the way to deliver the order to ${orderDetails.customer_location}`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Order is delivered to ${orderDetails.customer_name}`);
            resolve(orderDetails);
        },5000);
    })
}

//Callback Hell - callback ke andar callback function rakhe hue hain

// placeOrder(orderDetails, (orderDetails)=>{
//     preparingOrder(orderDetails, (orderDetail)=>{
//         pickupOrder(orderDetail, (orderDetail)=>{
//             deliverOrder(orderDetail);
//         });
//     });
// });

// placeOrder(orderDetails)
// .then((orderDetails)=>preparingOrder(orderDetails))
// .then((orderDetails)=>pickupOrder(orderDetails))
// .then((orderDetails)=>deliverOrder(orderDetails))
// .then((orderDetails)=>{
//     console.log(orderDetails);
// }).catch((err)=>{
//     console.log(err);
// })

async function orderingFood(){
    await placeOrder(orderDetails);
    await preparingOrder(orderDetails);
    await pickupOrder(orderDetails);
    await deliverOrder(orderDetails);
}

orderingFood();

//-------------------------------------------------

//To make multiple fecth calls parallel

async function userDetails(){
    const [comments, photos] = await Promise.all([fetch("user.comments"), fetch("user.photos")]);
}