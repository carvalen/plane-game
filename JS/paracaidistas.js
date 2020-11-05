"use strict";

class Skydiver {
    constructor(canvas, x) {
        this.width = 50
        this.height = 70
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = this.canvas.height;
        this.speed = 1;
        this.direction = -1;
        this.img = "./Imagenes/paracaidista.gif"
    }
    update() {
        this.y = this.y + this.direction * this.speed;
    }
    draw() {
        let diver = new Image();
        diver.src = this.img;
        this.ctx.drawImage(diver, this.y, this.x, this.width, this.height);
    }
    setDirection(direction) {
        this.direction = direction;
    }
};
