"use strict";

class Skydiver {
    constructor(canvas, x) {
        this.width = 60;
        this.height = 80;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = 10;
        this.speed = 1;
        this.direction = 1;//de arriba a abajo
        this.img = "./Imagenes/paracaidista.gif"
    }
    update() {
        this.y = this.y + this.direction * this.speed; 
    }
    draw() {
        let diver = new Image();
        diver.src = this.img;
        this.ctx.drawImage(diver, this.x, this.y, this.width, this.height);
    }
    setDirection(direction) {
        this.direction = direction;
    }
};
