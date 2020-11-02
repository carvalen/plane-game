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
            <p class="instructions">Use [&larr;][&uarr;][&darr;][&rarr;] to move the plane!</p>
            </div>
        </section>
        `);
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", buildGameScreen);
};

const buildGameScreen = () => {
    buildDom(`
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
    if (event.code === "ArrowUp") {
        game.player.setDirection(-1);
    } else if (event.code === "ArrowDown") {
        game.player.setDirection(1);
    }
    };

    document.addEventListener("keydown", setPlayerDirection);
};

const buildGameOver = () => {
    buildDom(`
            <section class="game-over">
                <h1>GAME OVER</h1>
                <button>RESTART</button>
            </section>
        `);

    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen);
};

buildSplashScreen();
};

window.addEventListener("load", main);
