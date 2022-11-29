'use strict';

console.log('hey world hey!');

// TODO: Get user name - prompt - alert a greeting back to the user

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following with yes/no or y/n`);

// todo: prompt them with 5 yes or no (y/n) question, alert if they got the answer right or wrong

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  // console.log('you got it right!');
  alert('You got it wrong!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('You got it right!');
}

let questionTwoGuess = prompt('My favorite book is "The Count of Monte Cristo"?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  // console.log('you got it right!');
  alert('You got it right!');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('You got it wrong!');
}

let questionThreeGuess = prompt('Do I have a Dance Dance Revolution Mat?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  // console.log('you got it right!');
  alert('You got it right!');
} else if(questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('You got it wrong!');
}

let questionFourGuess = prompt('Is my favorite sport is soccer?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
  // console.log('you got it right!');
  alert('You got it wrong!');
} else if(questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert('You got it right!');
}

let questionFiveGuess = prompt('Is the goose my favorite animal?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
  // console.log('you got it right!');
  alert('You got it right!');
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert('You got it wrong!');
}

// Todo: write a personalized message at the end

alert(`Thank you ${userName} for learning more about me!`);
