"use strict";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player;
        this.enemies = [];
        this.sky = [];
        this.isGameOver = false;
        // this.score = 0;
    }

    startLoop() {
        this.player = new Player(this.canvas, 2);
        // this.sky = new Skydiver(this.canvas, 50) // parametro X 
        const loop = () => {
            if (Math.random() > 0.99) {//frecuencia
                const y = Math.random() * this.canvas.height;
                
                this.enemies.push(new Enemy(this.canvas, y));
            }
            if (Math.random() > 0.99) {//frecuencia
                const x = Math.random() * this.canvas.width;
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
        // this.player.update();
        // this.sky.update();
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
        // this.sky.draw();
        this.sky.forEach((divers) => {
            divers.draw();
        });
        this.enemies.forEach((enemy) => {
            enemy.draw();
        });
    }

    checkAllCollisions() {
        this.player.checkScreen();
        this.sky.forEach((divers, index) => {
            if (this.player.checkCollisionDiver(divers)) {
                this.player.points();
                this.sky.splice(index, 1);

                if (this.player.points === 50) {//test
                    this.isGameOver = true;
                    this.onGameOver();
                }
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
        });
        
    }

    gameOverCallback(callback) {
        this.onGameOver = callback;
    }
}

