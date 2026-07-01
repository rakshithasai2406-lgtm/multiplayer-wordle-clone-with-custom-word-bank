let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

function addPlayer() {
    let playerName = prompt("Enter Player Name:");

    if (playerName === null || playerName.trim() === "") {
        alert("Player name cannot be empty.");
        return;
    }

    playerName = playerName.trim();

    leaderboard.push({
        name: playerName,
        score: 0
    });

    saveLeaderboard();

    alert(playerName + " added successfully!");
}

function updateScore(playerName, score) {

    for (let i = 0; i < leaderboard.length; i++) {

        if (leaderboard[i].name === playerName) {

            leaderboard[i].score += score;

            break;
        }
    }

    saveLeaderboard();
}

function showLeaderboard() {

    if (leaderboard.length === 0) {

        alert("Leaderboard is empty.");
        return;
    }

    leaderboard.sort((a, b) => b.score - a.score);

    let result = "===== LEADERBOARD =====\n\n";

    leaderboard.forEach(player => {

        result += player.name + " - " + player.score + "\n";

    });

    alert(result);
}

function saveLeaderboard() {

    localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard)
    );
}
