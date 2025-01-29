let flippedCards = []; 

// onclick event
function shuffleCards() {
    // storing the cards in an array - "cards-holder" class holds 
    const containers = document.querySelectorAll('.cards-holder > div'); 

    containers.forEach((container) => {
        const cards = Array.from(container.querySelectorAll('.card')); // Get all cards in each container

        // shuffle
        const shuffleCount = 10; 
        for (let pass = 0; pass < shuffleCount; pass++) {
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]]; 
            }
        }

        
        cards.forEach((card) => container.appendChild(card));

        
        cards.forEach((card) => {
            const showValue = card.querySelector('.front-value');
            const hideValue = card.querySelector('.back-value');
            showValue.style.display = 'block'; // show the front value
            hideValue.style.display = 'none'; // hide the back value
        });
    });

    // makes the array empty 
    flippedCards = [];
}


// flip the card
function switchSides(event) {
    const selectedCard = event.currentTarget;
    const showValue = selectedCard.querySelector('.front-value');
    const hideValue = selectedCard.querySelector('.back-value');

    // make sure not to flip if already flipped
    if (showValue.style.display === 'none') {
        return;
    }

    // flip the card
    showValue.style.display = 'none';  // adding styles to hide the value
    hideValue.style.display = 'block'; // adding styles to show the value

    // Add the flipped card to the flippedCards array
    flippedCards.push(selectedCard);

    // set length to 2 so that we can compare the cards
    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        const firstBackValue = firstCard.querySelector('.back-value').textContent;
        const secondBackValue = secondCard.querySelector('.back-value').textContent;

        // strict comparison of the two values
        if (firstBackValue === secondBackValue) {
            // makes the array empty 
            flippedCards = []; 
        } else {
            // in case of no match - flip the cards back after 1s
            setTimeout(() => {
                firstCard.querySelector('.front-value').style.display = 'block';
                firstCard.querySelector('.back-value').style.display = 'none';
                secondCard.querySelector('.front-value').style.display = 'block';
                secondCard.querySelector('.back-value').style.display = 'none';
                flippedCards = []; // Reset flipped cards array
            }, 1000); 
        }
    }
}
