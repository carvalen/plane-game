"use strict";

class Enemy {
    constructor(canvas, y) {
        this.size = 40;
        this.width = 80
        this.height = 60
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width;
        this.y = y;
        this.speed = 5;
        this.direction = -1;
        this.img = document.getElementById('pajaro-img');
    }
    update() {
        this.x = this.x + this.direction * this.speed;
    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    setDirection(direction) {
        this.direction = direction;
    }
};

