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
    this.img = document.getElementById('aviador-img');
    this.speed = 60;
    this.direction = 0;
    this.lives = lives;
    this.points = 0;
    
}

setDirectionsUpandDown(dir){
    this.y = this.y + dir * this.speed
}
setDirectionsLeftandRight(dir){
    this.x = this.x + dir * this.speed
}

draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

setDirection(direction) {//mover el avion
    this.direction = direction;
}

checkScreen() {
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
    // console.log (collideRight,"derecha",collideLeft,"izquierda",collideTop, "arriba",collideBottom, "abajo" )
    if (collideRight && collideLeft && collideTop && collideBottom) {
    return true;
    }

return false;

}

checkCollisionDiver(divers) {
    const collideRight = this.x + this.size / 2 > divers.x - divers.size / 2;
    const collideLeft = this.x - this.size / 2 < divers.x + divers.size / 2;
    const collideTop = this.y + this.size / 2 > divers.y - divers.size / 2;
    const collideBottom = this.y - this.size / 2 < divers.y + divers.size / 2;
    // console.log (collideRight,"derecha",collideLeft,"izquierda",collideTop, "arriba",collideBottom, "abajo" )
    if (collideRight && collideLeft && collideTop && collideBottom) {
    return true;
    }

return false;

}


loseLive() {
    this.lives--;
    document.querySelector(".lives").innerText = `Lives : ${this.points}`
}

addPoint() {
    this.points++;
    // console.log (this.points)
    document.querySelector(".points").innerText = `Points : ${this.points}`
}

};
