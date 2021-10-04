"Use strict";

window.onload = function () {
    console.log("fully loaded");


    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();

        let orderDetails = {
            name: '',
            email: '',
            order: ''
        }

        orderDetails.name = document.getElementById('nameInput').value;
        orderDetails.email = document.getElementById('emailInput').value;
        orderDetails.order = document.getElementById('orderInput').value;


        printOrder(orderDetails);

        let dishes = [];
        dishes.push({
            id: '1',
            name: 'Burger and french fries',
            price: '18'
        });

        dishes.push({
            id: '2',
            name: 'Pizza',
            price: '12'
        });

        dishes.push({
            id: '3',
            name: 'Spaghetti',
            price: '10'
        });


    });

};

console.log("fully loaded");


function printOrder(orderDetails) {
    let orderMessage = ` <p>The order for the customer ${orderDetails.name} is the following: 
    ${orderDetails.order}. the customer may be notified by email: ${orderDetails.email}</p>`;
    document.getElementById('messages').innerHTML = orderMessage;
}