'use strict'

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const clueBox = document.querySelector('#clue');
const attemptsBox = document.querySelector('#attempts');
const personNumber = parseInt(input.value)


function increaseAttempts() {
    let attempts = 0;
    attempts = attempts + 1;
    attemptsBox.innerHTML = attempts;

}


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

function createClue() {
    if (personNumber === randomNumber) {
        clueBox.innerHTML = '¡Has acertado campeona!';

    }
    if (personNumber > randomNumber) {
        clueBox.innerHTML = 'Demasiado alto';
    }
    if (personNumber < randomNumber) {
        clueBox.innerHTML = 'Demasiado bajo';
    }
}

function clickButton() {
    console.log(randomNumber)
    console.log(input.value);
    createClue()
    increaseAttempts()
}
console.log(typeof (randomNumber))
console.log(typeof (personNumber))

btn.addEventListener('click', clickButton);


