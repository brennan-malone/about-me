'use strict';

let score = 0;

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following with yes/no or y/n`);

function questionOne() {

  let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

  if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('You got it wrong!');
  } else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('You got it right!');
    score++;
  }
}

function questionTwo() {
  let questionTwoGuess = prompt('My favorite book is "The Count of Monte Cristo"?').toLowerCase();

  if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {

    alert('You got it right!');
    score++;
  } else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert('You got it wrong!');
  }
}
function questionThree() {
  let questionThreeGuess = prompt('Do I have a Dance Dance Revolution Mat?').toLowerCase();

  if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {

    alert('You got it right!');
    score++;
  } else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert('You got it wrong!');
  }
}
function questionFour() {
  let questionFourGuess = prompt('Is my favorite sport is soccer?').toLowerCase();

  if (questionFourGuess === 'yes' || questionFourGuess === 'y') {

    alert('You got it wrong!');
  } else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
    alert('You got it right!');

    score++;
  }
}

function questionFive() {
  let questionFiveGuess = prompt('Is the goose my favorite animal?').toLowerCase();

  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {

    alert('You got it right!');
    score++;
  } else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
    alert('You got it wrong!');
  }
}
function questionSix() {
  let myNum = 56;

  for (let numOfGuesses = 0; numOfGuesses < 5; numOfGuesses++) {
    let quesitonSixGuess = parseInt(prompt('What is my favorite number?'));
    if (quesitonSixGuess > 56) {
      alert('Too High!');
      quesitonSixGuess = parseInt(prompt('Try again'));
    } else if (quesitonSixGuess < 56) {
      alert('Too Low!');
      quesitonSixGuess = parseInt(prompt('Try again'));
    } else if (quesitonSixGuess === 56) {
      alert('You got it!');
      score++;
      break;
    } else {
      quesitonSixGuess = parseInt(prompt('Try again'));
    }
  }
  alert(`The correct answer is ${myNum}`);

}
function questionSeven() {
  let states = ['washington', 'maine', 'texas', 'louisiana', 'mississippi', 'massachusetts', 'new hampshire'];

  let guess = 7;

  while (guess) {
    let questionSevenGuess = prompt('Attempt to guess a state I have lived in!');
    guess--;
    for (let i = 0; i < states.length; i++) {
      if (questionSevenGuess === states[i]) {
        alert('You got it!');
        guess = 0;
        score++;
        break;
      }
    }
    alert(`you have ${guess} attempts left!`);
  }
  alert(`here were the possible answers ${states}`);

  alert(`Thank you ${userName} for learning more about me! You got ${score} out of 7 correct!`);
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
