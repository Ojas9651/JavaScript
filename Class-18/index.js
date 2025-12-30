//Zomato Delivery App

const orderDetails = {
    order_id: 12345,
    amount: 620,
    food: ["dal", "rice"],
    customer_name: "John",
    customer_location: "Mars",
    restraunt_location: "Moon"
}

function placeOrder(orderDetails, callback){
    console.log(`Your payment for Rs. ${orderDetails.amount} is in progress`);
    setTimeout(()=>{
        console.log(`Payment is received and your Order for ${orderDetails.food} is placed`)
        callback(orderDetails);
    },5000) 
}

function preparingOrder(orderDetails, callback){
    console.log(`Your order ${orderDetails.food} is getting prepared`);
    setTimeout(()=>{
        console.log("Your order is prepared");
        callback(orderDetails);
    },5000);
}

function pickupOrder(orderDetails, callback){
    console.log(`I am on the way to pick the order from ${orderDetails.restraunt_location}`);
    setTimeout(()=>{
        console.log(`Order is picked from ${orderDetails.restraunt_location}`);
        callback(orderDetails);
    },5000);
}

function deliverOrder(orderDetail){
    console.log(`I am on the way to deliver the order to ${orderDetail.customer_location}`);
    setTimeout(()=>{
        console.log(`Order is delivered to ${orderDetail.customer_name}`);
    },5000);
}

//Callback Hell - callback ke andar callback function rakhe hue hain

placeOrder(orderDetails, (orderDetails)=>{
    preparingOrder(orderDetails, (orderDetail)=>{
        pickupOrder(orderDetail, (orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});
