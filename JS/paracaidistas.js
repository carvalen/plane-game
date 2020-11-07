"use strict";

class Skydiver {
    constructor(canvas, x) {
        this.width = 60;
        this.height = 80;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = this.canvas.height;
        this.speed = 1;
        this.direction = 1;//de arriba a abajo
        this.img = "./Imagenes/paracaidista.gif"
    }
    update() {
        this.x = this.x + this.direction * this.speed; //vertical
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
