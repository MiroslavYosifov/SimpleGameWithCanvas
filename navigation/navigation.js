export class Navigation {
    constructor() {
        this.isGameStarted = false;
        this.isGamePaused = false;
        this.isGameOver = false;
    }
    // TO DO REFACTORING, THE CODE CAN BE SIMPLER
    startGame () {
        document.getElementById("ctx-play").addEventListener('click', (event) => {
            let messageElement = document.getElementById("ctx-message");
            if (this.isGameStarted) {
                messageElement.parentNode.style.display = "none";
                this.isGameStarted = false;
                this.isGameOver = false;
            }
        });
    };

    pauseGame () {
        document.getElementById("ctx-pause").addEventListener('click', (event) => {
            let messageElement = document.getElementById("ctx-message");
            if (!this.isGamePaused) {
                messageElement.parentNode.style.display = "block";
                messageElement.textContent = "Game is paused!";
                document.getElementById("ctx-pause").textContent = "Start";
                this.isGamePaused = true;
            } else {
                messageElement.parentNode.style.display = "none";
                document.getElementById("ctx-pause").textContent = "Pause";
                this.isGamePaused = false;
            }
        });
    };

    onLoadGame() {
        let messageElement = document.getElementById("ctx-message");
            messageElement.parentNode.style.display = "block";
            messageElement.textContent = "Press Play button to start game :)";
            this.isGameStarted = true;
    };

    //Todo gameover implemenation
    gameOver() {
        let messageElement = document.getElementById("ctx-message");

        if (!this.isGameOver) {
            messageElement.parentNode.style.display = "block";
            messageElement.textContent = "Game Over :( Press Play button for new game :)";
            this.isGameStarted = true;
        }
    }

    updateScoreElement(score) {
        document.getElementById("ctx-score").textContent = `Score: ${score}`;
    }
};