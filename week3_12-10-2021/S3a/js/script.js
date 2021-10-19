"use strict"

let number = Math.floor(Math.random() * 20) + 1;
console.log(number);

document.getElementById("form").addEventListener('submit', event => {
    event.preventDefault();
    let userInput = document.getElementById("inputField").value;
    console.log(userInput)

    compareNumber(userInput);
});

function compareNumber(userInput) {


    if (userInput > 20 || userInput < 1) {
        console.log("That is not a valid number (Error)");

    } else if (number > userInput) {
        console.log("The mystery number is higher. Guess again!");
    } else if (number < userInput) {
        console.log("The mystery number is lower. Guess again!");
    } else if (number == userInput) {
        console.log("You have guessed the mystery number!");
    } else {
        console.log("That is not a valid number (Error)")
    };
}