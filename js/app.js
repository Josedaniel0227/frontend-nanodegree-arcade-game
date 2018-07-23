// Enemies our player must avoid

let Enemy = function(x, y) {
  this.x = x ;
  this.y = y;
  this.speed = 80 + Math.floor(Math.random() * 128);
  this.sprite = 'images/enemy-bug.png';
};
// Regulates constant speed on any device, also used as the collision detection. Called by the Engine.js file.
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
   if (this.x > 500) {
     this.x = -150 ;
   }
   // check fo collision
   if ((player.x < this.x + 60) && (player.x + 37 > this.x) && (player.y < this.y + 25) && (player.y + 30 > this.y)) {
           checkCollisions();
           console.log("collision");
       }
};
// if collision, retun player to initial position
let checkCollisions = function() {
      player.x = 101 * 2;
      player.y = 83 * 5 - 10;
    };


// Draw Enemies based on updated x and y coordiantes.
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Array that holds enemies
var enemy1 = new Enemy(-500,68 );
var enemy2 = new Enemy(-300,68 );
var enemy3 = new Enemy(-100,151);
var enemy4 = new Enemy(-400,151);
var enemy5 = new Enemy(-200,234);
var enemy6 = new Enemy(-400,234);
var allEnemies = [];
allEnemies.push(enemy1,enemy2,enemy3,enemy4,enemy5,enemy6);


/*
/Player
*/

let Player = function() {
  this.x = 101 * 2;
  this.y = 83 * 5 - 10;
  this.sprite = 'images/char-boy.png';
  this.finish = false;
};

//Starts and pause the clock if player  moves or returns to initial position

Player.prototype.update = function() {
  if ((this.x != 101 * 2) || (this.y != 83 * 5 - 10)){
    startTimer();
  }
  // Check here if Player win
  if (this.y === -10){
    this.finish = true;
  }
};
// Prevents Player from going off canvas
Player.prototype.handleInput = function(dt) {
  switch (dt) {
  case "up":
    if (this.y > 0){
    this.y -= 83;
    }
    break;
  case "down":
    if (this.y < 400){
      this.y += 83;
    }
    break;
  case "left":
  if (this.x > 0) {
    this.x -= 101;
  }
    break;
  case "right":
  if (this.x < 400 ){
    this.x += 101;
}
    break;
}
};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
let player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
/*
* - Clock
* - Displays the current game time in seconds
*/

  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")

  function startTimer () {
    tens++;

    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }
