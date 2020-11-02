"use-strict";

const main = () => {
const buildDom = (html) => {
    const main = document.querySelector("main");
    main.innerHTML = html;
};

const buildSplashScreen = () => {
    buildDom(`
        <section class="game-screen">
            <h1 id="titulo">¡SALVA AL PARACAIDISTA!</h1>
            <button id="start-button">EMPEZAR</button>
            <p>Usa [&larr;][&uarr;][&darr;][&rarr;] para moverte</p>
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
                <h1>¡HAS PERDIDO!</h1>
                <button>VUELVE A EMPEZAR</button>
            </section>
        `);

    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen);
};

buildSplashScreen();
};

window.addEventListener("load", main);
