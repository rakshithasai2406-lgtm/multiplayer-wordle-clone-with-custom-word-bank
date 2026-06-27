// Secret word (can be replaced later with multiplayer logic)
const secretWord = "APPLE";

let currentRow = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("submitBtn");
const rows = document.querySelectorAll(".row");

// Submit guess when button is clicked
button.addEventListener("click", submitGuess);

// Optional: Submit on Enter key
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        submitGuess();
    }
});

function submitGuess() {
    const guess = input.value.trim().toUpperCase();

    // Validate input
    if (guess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }

    // Stop if game is over
    if (currentRow >= 6) {
        alert("Game Over!");
        return;
    }

    const tiles = rows[currentRow].querySelectorAll(".tile");

    // Fill the row with letters and colors
    for (let i = 0; i < 5; i++) {
        tiles[i].textContent = guess[i];

        if (guess[i] === secretWord[i]) {
            tiles[i].style.backgroundColor = "green";
        } else if (secretWord.includes(guess[i])) {
            tiles[i].style.backgroundColor = "gold";
        } else {
            tiles[i].style.backgroundColor = "gray";
        }

        tiles[i].style.color = "white";
    }

    // Check for win
    if (guess === secretWord) {
        alert("🎉 Congratulations! You guessed the word!");
        input.disabled = true;
        button.disabled = true;
        return;
    }

    currentRow++;

    // Check for loss
    if (currentRow === 6) {
        alert("Game Over! The word was " + secretWord);
        input.disabled = true;
        button.disabled = true;
    }

    input.value = "";
    input.focus();
}


    



