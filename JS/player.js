"use strict";

class Player {
constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 550;
    this.y = this.canvas.height / 2;
    this.width = 200;
    this.height = 120;
    this.img = "./Imagenes/avion.png"
    this.speed = 3;
    this.direction = 0;
    this.lives = lives;
}

update() {
    this.y = this.y + this.direction * this.speed;
    this.checkScreen();
}

draw() {
    let avionImg = new Image();
    avionImg.src = this.img;
    this.ctx.drawImage(avionImg, this.x, this.y, this.width, this.height);
}

setDirection(direction) {//mover el avion
    this.direction = direction;
}

checkScreen() {//definir bordes
    if (this.y - this.size / 2 <= 0) {
    this.direction = 1;
    } else if (this.y + this.size / 2 >= this.canvas.height) {
    this.direction = -1;
    }
}

checkCollisionEnemy(enemy) {
    const collideRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
    const collideTop = this.y + this.size / 2 > enemy.y - enemy.size / 2;
    const collideBottom = this.y - this.size / 2 < enemy.y + enemy.size / 2;

    if (collideRight && collideLeft && collideTop && collideBottom) {
    return true;
    }

    return false;
}

loseLive() {
    this.lives--;
}
}
