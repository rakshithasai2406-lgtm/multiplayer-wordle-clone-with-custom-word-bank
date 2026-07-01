// Get a random secret word from words.js
const secretWord = getRandomWord();

let currentRow = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("submitBtn");
const rows = document.querySelectorAll(".row");

// Submit when button is clicked
button.addEventListener("click", submitGuess);

// Submit when Enter key is pressed
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        submitGuess();
    }
});

function submitGuess() {

    const guess = input.value.trim().toUpperCase();

    // Check for valid input
    if (!/^[A-Z]{5}$/.test(guess)) {
        alert("Please enter a valid 5-letter word.");
        return;
    }

    // Stop after 6 attempts
    if (currentRow >= 6) {
        alert("Game Over!");
        return;
    }

    const tiles = rows[currentRow].querySelectorAll(".tile");

    // Display letters and colours
    for (let i = 0; i < 5; i++) {

        tiles[i].textContent = guess[i];

        if (guess[i] === secretWord[i]) {
            tiles[i].style.backgroundColor = "green";
        }
        else if (secretWord.includes(guess[i])) {
            tiles[i].style.backgroundColor = "gold";
        }
        else {
            tiles[i].style.backgroundColor = "gray";
        }

        tiles[i].style.color = "white";
    }

    // Check win
    if (guess === secretWord) {
        alert("🎉 Congratulations! You guessed the word!");

        input.disabled = true;
        button.disabled = true;

        return;
    }

    currentRow++;

    // Check loss
    if (currentRow === 6) {
        alert("Game Over! The correct word was " + secretWord);

        input.disabled = true;
        button.disabled = true;
    }

    input.value = "";
    input.focus();
}
