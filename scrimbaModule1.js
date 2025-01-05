// challenge-1

const playerGuess = 6
const correctAnswer = 6

// const message = playerGuess === correctAnswer ? 'Correct' : 'Wrong'
// console.log(message)

// challenge-2

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

const message = playerGuess < correctAnswer ? 'too low' : playerGuess > correctAnswer ? 'too high' : 'exactly right';
console.log(message);