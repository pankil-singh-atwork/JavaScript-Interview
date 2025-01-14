// challenge-1

const playerGuess = 6;
const correctAnswer = 6;

// const message = playerGuess === correctAnswer ? 'Correct' : 'Wrong'
// console.log(message)

// challenge-2

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

// const message = playerGuess < correctAnswer ? 'too low' : playerGuess > correctAnswer ? 'too high' : 'exactly right';
// console.log(message);

// Challenge-3
/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
 */

// For example: "You selected Salad. That will be $4"

// function selectItem(item) {
//   let price = 0;
//   switch (item) {
//     case "Coffee":
//       price = 2;
//       break;
//     case "Sandwiches":
//       price = 5;
//       break;
//     case "Salad":
//       price = 4;
//       break;
//     case "Lemon Cake":
//       price = 3;
//       break;
//     default:
//       console.log("Select from the list of available items");
//   }
//   console.log(`Your ${item} price is ${price}$`);
// }

// selectItem("Lemon Cake");

/*
Challenge - 4 ->setTimeout()
1. Make the third console.log fire 3 seconds after 
   the answer appears.
*/

// console.log('What is the capital of Peru?')

// setTimeout(function(){
//     console.log('Lima!')
// }, 3000)

// setTimeout(function() {
//     console.log('Ready for next question?')
// }, 6000)

// let count = 0;

// function greet(name) {
//   console.log(`Hello ${name}`);
//   count++;
//   if (count > 2) {
//     clearInterval(greetTimer);
//   }
// }

// const greetTimer = setInterval(greet, 2000, "Pankil Singh");

/*
Challenge-5:
1. Every 1000 milliseconds, log out: 
    `Your device will shut down in ${secondsRemaining} seconds`.
    Decrement 'secondsRemaining'.
2. When 'secondsRemaining' hits zero, you should log out 
    `Your device is shutting down`. 
    At this point, the setInterval should be c leared. What method 
    can you use to do that? (We used clearTimeout to cancel setTimeout.)
*/

// function startCountdown(device) {
//   let secondsRemaining = 3;
//   const shutdownTimer = setInterval(function () {
//     if (secondsRemaining == 0) {
//       console.log(`Your device is shutting down`);
//       clearInterval(shutdownTimer);
//     } else {
//       console.log(`Your ${device} will shut down in ${secondsRemaining} seconds`);
//       secondsRemaining--;
//     }
//   }, 1000);
// }
// startCountdown('Macbook');

// if (age >= 18) {
//     status = 'adult';
// } else {
//     status = 'minor';
// }
const age = 21;
const statusPerson = age >= 18 ? "adult" : "minor";
console.log(statusPerson);
