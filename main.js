window.addEventListener('click', main);

function main() {
    addEventListeners(); 
}

function addEventListeners() {
    const rollDiceBtn = document.querySelector('.btn-roll');
    rollDiceBtn.addEventListener('click', rollDice);
}

function rollDice() {
    const diceImg = document.querySelector('.dice');
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    
    switch (diceNumber) {
        case 1:
            diceImg.src = "../img/dice-1.png";
            break;
        case 2:
            diceImg.src = "../img/dice-2.png";
            break;
        case 3:
            diceImg.src = "../img/dice-3.png";
            break;
        case 4:
            diceImg.src = "../img/dice-4.png";
            break;
        case 5:
            diceImg.src = "../img/dice-5.png";
            break;
        case 6:
            diceImg.src = "../img/dice-6.png";
            break;
        default:
            diceImg.src = "../img/dice-1.png";
    }
}