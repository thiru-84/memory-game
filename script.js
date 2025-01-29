document.addEventListener('DOMContentLoaded', function () {
    const showValues = document.querySelectorAll('.front-value');
    const hideValues = document.querySelectorAll('.back-value');

    // Show value
    showValues.forEach((showValue) => {
        showValue.style.display = 'block';
    });
    // Hide value
    hideValues.forEach((hideValue) => {
        hideValue.style.display = 'none';
    });

});

// ----------------------------------------------------------------------------------------------------------------------------------

let selectedCards = [];

function switchSides(event) {
    // memory
    const firstPairOne = document.querySelector('#firstPair-1');
    const firstPairTwo = document.querySelector('#firstPair-2');

    const secondPairOne = document.querySelector('#secondPair-1');
    const secondPairTwo = document.querySelector('#secondPair-2');

    const thirdPairOne = document.querySelector('#thirdPair-1');
    const thirdPairTwo = document.querySelector('#thirdPair-2');

    const fourthPairOne = document.querySelector('#fourthPair-1');
    const fourthPairTwo = document.querySelector('#fourthPair-2');

    // true pair
    const checkFirstPair = firstPairOne === firstPairTwo;
    const checkSecondPair = secondPairOne === secondPairTwo;
    const checkThirdPair = thirdPairOne === thirdPairTwo;
    const checkFourthPair = fourthPairOne === fourthPairTwo;

    // memory front and back
    const card = event.currentTarget;
    const showValue = card.querySelector('.front-value');
    const hideValue = card.querySelector('.back-value');

    // Store the display values in variables
    let changeDisplayToShow = showValue.style.display;
    let changeDisplayToHide = hideValue.style.display;

// Toggle the display values
    showValue.style.display = changeDisplayToShow === 'none' ? 'block' : 'none';
    hideValue.style.display = changeDisplayToHide === 'none' ? 'block' : 'none';
 }


// ----------------------------------------------------------------------------------------------------------------------------------


// Shuffle function
function shuffleCards() {
    const containers = document.querySelectorAll('div > div');

    containers.forEach((container) => {
        const cards = Array.from(container.children);

        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }

        cards.forEach((card) => container.appendChild(card));
    });
}


// ----------------------------------------------------------------------------------------------------------------------------------