'use strict'

const btn = document.querySelector('#btn');
const input = document.querySelector('#input').value;
const clueBox = document.querySelector('#clue');
const attemptsBox = document.querySelector('#attempts');


function increaseAttempts() {
    let attempts = parseInt(attemptsBox.innerHTMl);
    attempts = attempts + 1;
    attemptsBox.innerHTML = attempts;
    console.log('holaaaaaa')
}


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

function createClue() {
    if (input.value === randomNumber) {
        clueBox.innerHTML = '¡Has acertado campeona!'
        alert: '¡¡ HAS ACERTADO  CAMPEONA!!';
    }
    if (input.value > randomNumber.value) {
        clueBox.innerHTML = 'Demasiado alto';
    }
    if (input.value < randomNumber.value) {
        clueBox.innerHTML = 'Demasiado bajo';
    }
}

function clickButton() {
    console.log(randomNumber)
    increaseAttempts()
    console.log(input.value);


}


btn.addEventListener('click', clickButton);


/*function increaseProductQuantity() {
    let productQuantity = parseInt(elementWrapperCart.innerHTML);
    productQuantity = productQuantity + 1;
    elementWrapperCart.innerHTML = productQuantity;
  }*/
