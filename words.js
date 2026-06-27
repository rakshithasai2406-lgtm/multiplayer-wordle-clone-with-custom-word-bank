// words.js

let words = [
  "APPLE",
  "MANGO",
  "GRAPE",
  "HOUSE",
  "BEACH"
];

// Returns a random word
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

// Adds a new word to the list
function addWord(word) {
  word = word.toUpperCase();

  if (word.length === 5) {
    words.push(word);
  } else {
    console.log("Word must be exactly 5 letters.");
  }
}
console.log("Random Word:", getRandomWord());

addWord("CHAIR");

console.log("Updated Word List:", words);