"use-strict";

const main = () => {
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
    };

    const buildSplashScreen = () => {
        buildDom(`
        <section class="game-screen" style="height:580px;">
        <div class="main">
            <h1 id="titulo">SAVE THE SKY DIVER!</h1>

            <button id="start-button">START</button>
            <p class="instructions">Use [&larr;][&uarr;][&darr;][&rarr;] to move the plane and get points!</p>
            </div>
        </section>
        `);
        const startButton = document.querySelector("button");
        startButton.addEventListener("click", buildGameScreen);
    };

    const buildGameScreen = () => {
        buildDom(`
        <div class= "score">

        <p class= "points"> Points: </p>
        <p class= "lives"> Lives: 3</p>

        </div>
            <section class="game-screen">
            
                <canvas></canvas>
            </section>

        `);

        const width = document.querySelector(".game-screen").offsetWidth;
        const height = document.querySelector(".game-screen").offsetHeight;

        const canvasElement = document.querySelector("canvas");

        canvasElement.setAttribute("width", width);
        canvasElement.setAttribute("height", height);

        const game = new Game(canvasElement);

        game.gameOverCallback(buildGameOver);
        game.startLoop();

        const setPlayerDirection = (event) => {
            const key = event.code;

            if (key === "ArrowUp") {
                game.player.setDirectionsUpandDown(-1)
            }
            if (key === "ArrowDown") {
                game.player.setDirectionsUpandDown(1)
            }
            if (key === "ArrowLeft") {
                game.player.setDirectionsLeftandRight(-1)
            } if (key === "ArrowRight") {
                game.player.setDirectionsLeftandRight(1)
            };
        }

        document.addEventListener("keydown", setPlayerDirection);
    }
    

    const buildGameOver = () => {
        buildDom(`
            <section class="game-over">
                <h1 class="over-title">GAME OVER</h1>
                  
                <button id= "restart-button">RESTART</button>
            </section>
        `);

        const restartButton = document.querySelector("button");
        restartButton.addEventListener("click", buildGameScreen);
    };

    buildSplashScreen();
};

window.addEventListener("load", main);
