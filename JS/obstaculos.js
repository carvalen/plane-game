"use strict";
class Enemy {
    constructor(canvas, y) {
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width;
        this.y = y;
        this.speed = 3;
        this.direction = -1;
        this.img = "./imagenes/pajaro.png"
    }
    
    update() {
        this.x = this.x + this.direction * this.speed;
    }

    draw(){
        let pajaroImg = new Image();
        pajaroImg.src = this.img;
        this.ctx.drawImage(pajaroImg, this.x, this.y, this.width, this.height);
    }
    
    setDirection(direction) {
        this.direction = direction;
    }
    }