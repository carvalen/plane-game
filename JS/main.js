"use-strict";

const main = () => {
const buildDom = (html) => {
    const main = document.querySelector("main");
    main.innerHTML = html;
};

const buildSplashScreen = () => {
    buildDom(`
        <section class="pantalla-inicio">
            <h1>¡SALVA AL PARACAIDISTA!</h1>
            <p>Usa [&larr;][&uarr;][&darr;][&rarr;] para moverte</p>
            <button>JUGAR</button>
        </section>
        `);
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", buildGameScreen);
};

const buildGameScreen = () => {
    buildDom(`
            <section class="pantalla-juego">
                <canvas></canvas>
            </section>
            
        `);

    const width = document.querySelector(".pantalla-juego").offsetWidth;
    const height = document.querySelector(".pantalla-juego").offsetHeight;

    const canvasElement = document.querySelector("canvas");

    canvasElement.setAttribute("width", width);
    canvasElement.setAttribute("height", height);

    const game = new Game(canvasElement);
    game.gameOverCallback(buildGameOver);

    game.startLoop();
//movimiento arriba y abajo
    const setPlayerDirection = (event) => {
    if (event.code === "ArrowUp") {
        game.player.setDirection(-1);
    } else if (event.code === "ArrowDown") {
        game.player.setDirection(1);
    }
    };

    document.addEventListener("keydown", setPlayerDirection);
};
//3 pantalla
const buildGameOver = () => {
    buildDom(`
            <section class="game-over">
                <h1>OH, OH! HAS PERDIDO!</h1>
                <p>Vuelve a intentarlo</p>
                <button>REINICIAR</button>
            </section>
        `);

    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen);
};

buildSplashScreen();
};

window.addEventListener("load", main);
