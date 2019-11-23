'use strict'

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const clueBox = document.querySelector('#clue');
const attemptsBox = document.querySelector('#attempts');
let attempts = 0;
const increaseAttempts = () => {
    attempts = attempts + 1;
    attemptsBox.innerHTML = `Número de intentos: ${attempts}`;
}
const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
const maxNumber = 100;
const addText = (content) => { clueBox.innerHtml = content }

const createClue = () => {


    if (input.value > maxNumber || input.value <= 0 || input.value == '') {
        clueBox.innerHTML = 'Introduce un número válido 🧐');
    }
    else if (input.value < randomNumber) {
        clueBox.innerHTML = 'Demasiado bajo';
    }
    else if (input.value > randomNumber) {
        clueBox.innerHTML = 'Demasiado alto';
    }
    else {
        clueBox.innerHTML = '🎉¡Has acertado Campeona!🎉';
    }
}
const clickButton = () => {
    console.log(randomNumber);
    console.log(input.value);
    createClue();
    increaseAttempts();
}
window.addEventListener('load', getRandomNumber)
btn.addEventListener('click', clickButton);


