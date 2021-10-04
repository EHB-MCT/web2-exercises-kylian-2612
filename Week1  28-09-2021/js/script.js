"Use strict";

let dishes = [];
dishes.push({
    id: '1',
    name: 'Burger and french fries',
    price: 18
});

dishes.push({
    id: '2',
    name: 'Pizza',
    price: 12
});

dishes.push({
    id: '3',
    name: 'Spaghetti',
    price: 10
});

window.onload = function () {
    console.log("fully loaded");

    dishes.forEach(element => {
        let options = `<input type="checkbox" id="${element.name}" name="options">
        <label for="${element.id}">${element.name}</label>`;
        document.getElementById('options').insertAdjacentHTML("afterend", options);
    });

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        printOrder();
    });

    document.getElementById('formPrice').addEventListener('submit', event => {
        event.preventDefault();
        calculatePrice();
    });




};

console.log("fully loaded");


function printOrder() {

    let orderDetails = {
        name: '',
        email: '',
        order: []
    }

    orderDetails.name = document.getElementById('nameInput').value;
    orderDetails.email = document.getElementById('emailInput').value;

    dishes.forEach(element => {
        let check = document.getElementById(element.name).checked;
        if (check) {
            orderDetails.order.push(element.name)

        }
    });

    let orderMessage = ` <p>The order for the customer ${orderDetails.name} is the following: 
    ${orderDetails.order}. the customer may be notified by email: ${orderDetails.email}</p>`;
    document.getElementById('messages').innerHTML = orderMessage;


}

let totalPrice = 0;

function calculatePrice() {
    totalPrice = 0;
    dishes.forEach(element => {
        let check = document.getElementById(element.name).checked;
        if (check) {
            totalPrice = totalPrice + element.price;
        }
    });
    let showPrice = `<p>${totalPrice}</p>`;
    document.getElementById('showPrice').innerHTML = showPrice;
}