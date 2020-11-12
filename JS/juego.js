"use strict";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player;
        this.enemies = [];
        this.sky = [];
        this.isGameOver = false;
        
    }

    
    // Para mejorar la distribución de paracaidistas/enemigos, función random con un rango definido,
    // que dependiendo de lo que quieras dibujar le pasas el alto o el ancho del canvas.
    
    getRandomPosition(max) {
        return Math.random() * (max - 0);
    }

    startLoop() {
        this.player = new Player(this.canvas, 2);
        const loop = () => {
            if (Math.random() > 0.99) {
                const y = this.getRandomPosition(this.canvas.height);
                this.enemies.push(new Enemy(this.canvas, y));
            }

            if (Math.random() > 0.99) {
                const x = this.getRandomPosition(this.canvas.width);
                this.sky.push(new Skydiver(this.canvas, x));
            }

            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        };

        window.requestAnimationFrame(loop);
    }

    updateCanvas() {
        this.sky.forEach(function (divers) {
            divers.update();
        });
        this.enemies.forEach((enemy) => {
            enemy.update();
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCanvas() {
        this.player.draw();
        this.sky.forEach((divers) => {
            divers.draw();
        });
        this.enemies.forEach((enemy) => {
            enemy.draw();
        });
    }

    isSkyOffCanvas(sky) {
        return sky.y > this.canvas.height;
    }

    isEnemyOffCanvas(enemy) {
        return enemy.x < 0;
    }

    checkAllCollisions() {
        this.player.checkScreen();
        this.sky.forEach((divers, index) => {
            if (this.player.checkCollisionDiver(divers)) {
                this.player.addPoint();
                this.sky.splice(index, 1);

                
            }

            
            // Funcion con isEnemyOffCanvas eliminan al paracaidista/enemigo en
            // caso de que se hayan salido del canvas.Para que el array no se haga enorme y ponga
            // lento el juego.
            
            if (this.isSkyOffCanvas(divers)) {
                this.sky.splice(index, 1);
            }
        });

        this.enemies.forEach((enemy, index) => {
            if (this.player.checkCollisionEnemy(enemy)) {
                this.player.loseLive();
                this.enemies.splice(index, 1);

                if (this.player.lives === 0) {
                    this.isGameOver = true;
                    this.onGameOver();
                }
            }

            if (this.isEnemyOffCanvas(enemy)) {
                this.enemies.splice(index, 1);
            }
        });
    }

    gameOverCallback(callback) {
        this.onGameOver = callback;
    }
    
}

