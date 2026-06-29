function showAdminPanel() {
    let option = prompt(
        "===== ADMIN PANEL =====\n\n" +
        "1. View Word List\n" +
        "2. Add New Word\n" +
        "3. Remove Word\n" +
        "4. Exit\n\n" +
        "Enter your choice:"
    );

    switch(option) {

        case "1":
            alert("Words:\n\n" + words.join("\n"));
            showAdminPanel();
            break;

        case "2":
            let newWord = prompt("Enter a new 5-letter word:");

            if (newWord == null) {
                showAdminPanel();
                return;
            }

            newWord = newWord.toUpperCase();

            if (newWord.length !== 5) {
                alert("Word must be exactly 5 letters.");
            }
            else if (words.includes(newWord)) {
                alert("Word already exists.");
            }
            else {
                words.push(newWord);
                alert("Word Added Successfully!");
            }

            showAdminPanel();
            break;

        case "3":
            let removeWord = prompt("Enter word to remove:");

            if (removeWord == null) {
                showAdminPanel();
                return;
            }

            removeWord = removeWord.toUpperCase();

            let index = words.indexOf(removeWord);

            if (index !== -1) {
                words.splice(index, 1);
                alert("Word Removed Successfully!");
            } else {
                alert("Word not found.");
            }

            showAdminPanel();
            break;

        case "4":
            alert("Logged Out");
            break;

        default:
            alert("Invalid Choice");
            showAdminPanel();
    }
}
