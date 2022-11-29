'use strict';

console.log('hey world hey!');

// TODO: Get user name - prompt - alert a greeting back to the user

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please aser the following with yes/no or y/n`);

// todo: prompt them with 5 yes or no (y/n) question, alert if they got the answer right or wrong

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n');{
  alert('You got it wrong!');
}

// Todo: five a personalized message at the end
