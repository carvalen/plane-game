"use strict";

class Player {
constructor(canvas, lives) {
    this.size = 40;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 10;//donde se situa el personaje
    this.y = 50;
    this.width = 140;//tamaño imagen
    this.height = 110;
    this.img = "./Imagenes/aviador.gif"
    this.speed = 40;
    this.direction = 0;
    this.lives = lives;
}

setDirectionsUpandDown(dir){
    this.y = this.y + dir * this.speed
}
setDirectionsLeftandRight(dir){
    this.x = this.x + dir * this.speed
}

// update() {
//      this.y = this.y + this.direction * this.speed; //vertical
//     this.x = this.x + this.direction * this.speed; // horizontal
//     this.checkScreen();
// }


draw() {
    let avionImg = new Image();
    avionImg.src = this.img;
    this.ctx.drawImage(avionImg, this.x, this.y, this.width, this.height);
}

setDirection(direction) {//mover el avion
    this.direction = direction;
}

checkScreen() {//definir bordes aun no va...
    if (this.y - this.width / 2 <= 0) {
    this.direction = 1;
    } else if (this.y + this.width >= this.canvas.height) {
    this.direction = -1;
    }else if (this.y + this.width >= this.canvas.height) {
        this.direction = -1;
}    else if (this.y + this.width >= this.canvas.height) {
    this.direction = -1;
}
}

checkCollisionEnemy(enemy) {
    const collideRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
    const collideTop = this.y + this.size / 2 > enemy.y - enemy.size / 2;
    const collideBottom = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    console.log (collideRight,"derecha",collideLeft,"izquierda",collideTop, "arriba",collideBottom, "abajo" )
    if (collideRight && collideLeft && collideTop && collideBottom) {
    return true;
    }

return false;

}

checkCollisionDiver(paracaidistas) {
    const collideRight = this.x + this.size / 2 > paracaidistas.x - paracaidistas.size / 2;
    const collideLeft = this.x - this.size / 2 < paracaidistas.x + paracaidistas.size / 2;
    const collideTop = this.y + this.size / 2 > paracaidistas.y - paracaidistas.size / 2;
    const collideBottom = this.y - this.size / 2 < paracaidistas.y + paracaidistas.size / 2;
    console.log (collideRight,"derecha",collideLeft,"izquierda",collideTop, "arriba",collideBottom, "abajo" )
    if (collideRight && collideLeft && collideTop && collideBottom) {
    return true;
    }

return false;

}

// checkCollisionEnemy(enemy) {
//     if (
//     (this.y + 10 < enemy.y + enemy.height && this.x + 15 < enemy.x + enemy.width && this.x + this.width - 15 > enemy.x) ||
//     (enemy.y + enemy.height > this.y && enemy.x < this.x + this.width && this.x < enemy.x + enemy.width)
//     ) {
//     return true

//     }else {
//         return false;
// }
// }


loseLive() {
    this.lives--;
}
};

