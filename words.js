let words = [
    "APPLE",
    "MANGO",
    "GRAPE",
    "HOUSE",
    "BEACH"
];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function addWord(word) {

    word = word.trim().toUpperCase();

    if (!/^[A-Z]{5}$/.test(word)) {
        return false;
    }

    if (words.includes(word)) {
        return false;
    }

    words.push(word);
    return true;
}
