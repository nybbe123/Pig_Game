'use strict';




/**
 * Selecting elements
 */
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');




/**
 * State
 */
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;




/**
 * Rolling dice functionality
 */
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. Generating a random number
        const diceNumber = Math.ceil(Math.random()* 6);

        // 2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./img/dice-${diceNumber}.png`;

        // 3. Check for rolled 1
        if ( diceNumber !== 1) {
            // Add dice to current score
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})




/**
 * Switch the current player to the next
 */
function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active', '.name');

    activePlayer = activePlayer === 0 ? 1: 0; // If activePlayer is 0, then change to 1, else change to 0

    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}




/**
 * Saves current score to total score and checks total score if there are any win.
 */
btnHold.addEventListener('click', function() {
    if (playing) {
        // 1. add current score to total score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. check if total score is 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
})



btnNew.addEventListener('click', function() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
})