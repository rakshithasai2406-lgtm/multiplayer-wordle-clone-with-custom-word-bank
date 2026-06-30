let words = [
    "APPLE",
    "MANGO",
    "GRAPE",
    "HOUSE",
    "BEACH"
];

function getRandomWord(){
    const randomIndex=Math.floor(Math.random()*words.length);
    return words[randomIndex];
}

function addWord(word){

    word=word.toUpperCase();

    if(word.length===5){
        words.push(word);
        return true;
    }

    return false;
}