function addNewWord(){

    let word=document.getElementById("wordInput").value;

    let result=addWord(word);

    if(result){
        document.getElementById("message").innerHTML="✅ Word added successfully!";
    }
    else{
        document.getElementById("message").innerHTML="❌ Word must be exactly 5 letters.";
    }

    document.getElementById("wordInput").value="";
}

function showRandomWord(){

    document.getElementById("randomWord").innerHTML=
    "Random Word: "+getRandomWord();

}