const secretWord = "APPLE";

let attempts = 0;

const maxAttempts = 6;

const input = document.getElementById("guessInput");

const button = document.getElementById("submitBtn");

const grid = document.getElementById("grid");

button.addEventListener("click", checkGuess);

function checkGuess() {

const guess = input.value.toUpperCase();

if (guess.length !== 5) {
alert("Please enter a 5-letter word.");
return;
}

const row = document.createElement("div");

row.className = "row";

for (let i = 0; i < 5; i++) {

const box = document.createElement("div");

box.className = "box";

box.innerText = guess[i];

if (guess[i] === secretWord[i]) {
box.style.backgroundColor = "green";
}

else if (secretWord.includes(guess[i])) {
box.style.backgroundColor = "gold";
}

else {
box.style.backgroundColor = "gray";
}

row.appendChild(box);

}

grid.appendChild(row);

attempts++;

if (guess === secretWord) {
alert("You Win!");
button.disabled = true;
return;
}

if (attempts === maxAttempts) {
alert("You Lose!");
button.disabled = true;
}

input.value = "";

}


    



