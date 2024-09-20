const cards = document.querySelectorAll(".card");
let currentCardIndex = 0;
let isAnimating = false;

// Get the audio element by its ID
const song = document.getElementById("hbdsong");

function handleCardClick() {
  if (isAnimating) return;

  // Play the song on the first click
  if (currentCardIndex === 0 && song.paused) {
    song.play();
  }

  const currentCard = cards[currentCardIndex];
  const nextCard = cards[currentCardIndex + 1];

  if (currentCard) {
    isAnimating = true;

    currentCard.classList.add("exiting");

    setTimeout(() => {
      currentCard.style.visibility = "hidden";
      currentCard.classList.remove("active");

      if (nextCard) {
        nextCard.classList.add("entering");

        setTimeout(() => {
          nextCard.style.visibility = "visible";
          nextCard.classList.remove("entering");
          nextCard.classList.add("active");
        }, 50);
      }

      currentCardIndex++;
      isAnimating = false;
    }, 100);
  }
}

// Initialize visibility of cards (first card visible, others hidden)
cards.forEach((card, index) => {
  if (index === 0) {
    card.style.visibility = "visible";
    card.classList.add("active");
  } else {
    card.style.visibility = "hidden";
  }
});

// Attach click event listener to each card
cards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});
