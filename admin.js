let adminWords = ["APPLE", "MANGO", "GRAPE"];

function adminLogin() {
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    if (username === "admin" && password === "admin123") {
        alert("Login Successful!");
        adminMenu();
    } else {
        alert("Invalid Username or Password");
    }
}

function adminMenu() {
    let choice = prompt(
        "1. View Words\n2. Add Word\n3. Remove Word"
    );

    if (choice === "1") {
        alert(adminWords.join(", "));
    }

    else if (choice === "2") {
        let word = prompt("Enter a 5-letter word:");

        if (word.length === 5) {
            adminWords.push(word.toUpperCase());
            alert("Word Added!");
        } else {
            alert("Word must be exactly 5 letters.");
        }
    }

    else if (choice === "3") {
        let word = prompt("Enter word to remove:");
        adminWords = adminWords.filter(
            w => w !== word.toUpperCase()
        );
        alert("Word Removed!");
    }
}

