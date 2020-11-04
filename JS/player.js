"use strict";

class Player {
constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 10;//donde se situa el personaje
    this.y = 50;
    this.width = 150;//tamaño imagen
    this.height = 120;
    this.img = "./Imagenes/aviador.gif"
    this.speed = 3;
    this.direction = 0;
    this.lives = lives;
}

setDirectionsUpandDown(dir){
    this.y = this.y + dir * this.speed
}
setDirectionsLeftandRight(dir){
    this.x = this.x + dir * this.speed
}

 update() {
     this.y = this.y + this.direction * this.speed; //se mueve vertical
    this.x = this.x + this.direction * this.speed; //se mueve horizontal
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

checkScreen() {//definir bordes aun no va...
    if (this.y - this.size / 2 <= 0) {
    this.direction = 1;
    } else if (this.y + this.size / 2 >= this.canvas.height) {
    this.direction = -1;
    }
}
checkCollisionEnemy(enemy) {
    if (
      (this.y + 10 < enemy.y + enemy.height && this.x + 15 < enemy.x + enemy.width && this.x + this.width - 15 > enemy.x) ||
      (enemy.y + enemy.height > this.y && enemy.x < this.x + this.width && this.x < enemy.x + enemy.width)
    ) {
      return true
      
    }else {
        return false;
    }
// checkCollisionEnemy(enemy) {
//     const collideRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
//     const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
//     const collideTop = this.y + this.size / 2 > enemy.y - enemy.size / 2;
//     const collideBottom = this.y - this.size / 2 < enemy.y + enemy.size / 2;

//     if (collideRight && collideLeft && collideTop && collideBottom) {
//     return true;
//     }

//     return false;
// }
}
loseLive() {
    this.lives--;
}
};
