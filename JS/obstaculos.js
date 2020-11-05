"use strict";

class Enemy {
    constructor(canvas, y) {
        this.width = 80
        this.height = 60
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width;
        this.y = y;
        this.speed = 3;
        this.direction = -1;
        this.img = "./Imagenes/pajaro3.gif"
    }
    update() {
        this.x = this.x + this.direction * this.speed;
    }
    draw() {
        let bird = new Image();
        bird.src = this.img;
        this.ctx.drawImage(bird, this.x, this.y, this.width, this.height);
    }
    setDirection(direction) {
        this.direction = direction;
    }
};

