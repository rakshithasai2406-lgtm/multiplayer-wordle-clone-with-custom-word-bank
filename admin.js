function showAdminPanel() {
    let option = prompt(
        "===== ADMIN PANEL =====\n\n" +
        "1. View Word List\n" +
        "2. Add New Word\n" +
        "3. Remove Word\n" +
        "4. Exit\n\n" +
        "Enter your choice:"
    );

    switch (option) {

        case "1":
            alert("Word List:\n\n" + words.join("\n"));
            showAdminPanel();
            break;

        case "2":
            let newWord = prompt("Enter a new 5-letter word:");

            if (newWord === null) {
                showAdminPanel();
                return;
            }

            newWord = newWord.trim().toUpperCase();

            if (!/^[A-Z]{5}$/.test(newWord)) {
                alert("Word must contain exactly 5 letters only.");
            }
            else if (words.includes(newWord)) {
                alert("Word already exists.");
            }
            else {
                words.push(newWord);
                alert("Word added successfully!");
            }

            showAdminPanel();
            break;

        case "3":
            let removeWord = prompt("Enter the word to remove:");

            if (removeWord === null) {
                showAdminPanel();
                return;
            }

            removeWord = removeWord.trim().toUpperCase();

            let index = words.indexOf(removeWord);

            if (index !== -1) {
                words.splice(index, 1);
                alert("Word removed successfully!");
            } else {
                alert("Word not found.");
            }

            showAdminPanel();
            break;

        case "4":
            alert("Logged Out");
            break;

        default:
            alert("Invalid choice. Please select 1, 2, 3, or 4.");
            showAdminPanel();
    }
}
