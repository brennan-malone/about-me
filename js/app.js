'use strict';

console.log('hey world hey!');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following with yes/no or y/n`);

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
  alert('You got it wrong!');
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('You got it right!');
  // console.log('you got it right!');
}

let questionTwoGuess = prompt('My favorite book is "The Count of Monte Cristo"?').toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  // console.log('you got it right!');
  alert('You got it right!');
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('You got it wrong!');
}

let questionThreeGuess = prompt('Do I have a Dance Dance Revolution Mat?').toLowerCase();

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  // console.log('you got it right!');
  alert('You got it right!');
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('You got it wrong!');
}

let questionFourGuess = prompt('Is my favorite sport is soccer?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'y') {

  alert('You got it wrong!');
} else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert('You got it right!');
  // console.log('you got it right!');
}

let questionFiveGuess = prompt('Is the goose my favorite animal?').toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  // console.log('you got it right!');
  alert('You got it right!');
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('You got it wrong!');
}

alert(`Thank you ${userName} for learning more about me!`);
