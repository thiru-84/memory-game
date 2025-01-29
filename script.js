let flippedCards = []; // To keep track of flipped cards for comparison

// Enhanced Shuffle function with better randomness and reset (all cards show front)
function shuffleCards() {
    const containers = document.querySelectorAll('.cards-holder > div'); // Get each row of cards

    containers.forEach((container) => {
        const cards = Array.from(container.querySelectorAll('.card')); // Get all cards in each container

        // Enhanced Shuffle using multiple passes of Fisher-Yates algorithm
        const shuffleCount = 10; // Number of passes to make shuffling more random
        for (let pass = 0; pass < shuffleCount; pass++) {
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap the cards
            }
        }

        // Re-append shuffled cards to the container
        cards.forEach((card) => container.appendChild(card));

        // Reset all cards to show the front side by default
        cards.forEach((card) => {
            const showValue = card.querySelector('.front-value');
            const hideValue = card.querySelector('.back-value');
            showValue.style.display = 'block'; // Show the front value
            hideValue.style.display = 'none'; // Hide the back value
        });
    });

    // Reset flipped cards array after shuffle
    flippedCards = [];
}

// Add event listener for shuffle button (reset function)
document.querySelector('#shuffle-btn')?.addEventListener('click', shuffleCards);

// Flip cards (same logic as before) with comparison
function switchSides(event) {
    const card = event.currentTarget;
    const showValue = card.querySelector('.front-value');
    const hideValue = card.querySelector('.back-value');

    // Prevent flipping if already flipped
    if (showValue.style.display === 'none') {
        return;
    }

    // Flip the card
    showValue.style.display = 'none';  // Hide front value
    hideValue.style.display = 'block'; // Show back value

    // Add the flipped card to the flippedCards array
    flippedCards.push(card);

    // If two cards are flipped, compare them
    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        const firstBackValue = firstCard.querySelector('.back-value').textContent;
        const secondBackValue = secondCard.querySelector('.back-value').textContent;

        // Compare the back values of the two flipped cards
        if (firstBackValue === secondBackValue) {
            // Match found - leave the cards flipped
            flippedCards = []; // Reset flipped cards array
        } else {
            // No match - flip the cards back after a short delay
            setTimeout(() => {
                firstCard.querySelector('.front-value').style.display = 'block';
                firstCard.querySelector('.back-value').style.display = 'none';
                secondCard.querySelector('.front-value').style.display = 'block';
                secondCard.querySelector('.back-value').style.display = 'none';
                flippedCards = []; // Reset flipped cards array
            }, 1000); // Delay before flipping back
        }
    }
}
