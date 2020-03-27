// Enemies our player must avoid 
var Enemy = function(x, y) { 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // hellooooooooooo 
    // ok
    // The image/sprite for our enemies, this uses
    // hello the audio call doesn't work? 
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;   
    this.width = 50;
    this.height = 50;
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random()*(300 - 100)+100)
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if(this.x < 500){
    this.x += this.speed * dt
   } else{
       this.x = -100
       this.x += (this.speed  * dt)+60
   }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var selectedChar = false; 
var selectChar = function(char) {
    selectedChar = char;
    switch(selectedChar){
        case 'images/char-boy.png':
            document.getElementById('choose').innerHTML = 'Boy';
            break;        
        case 'images/char-cat-girl.png':
            document.getElementById('choose').innerHTML = 'Cat girl';   
            break;
        case 'images/char-horn-girl.png':
            document.getElementById('choose').innerHTML = 'Horn girl';
            break;
        }
     return selectedChar
}


var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
    this.sprite = selectedChar;
}
Player.prototype.update = function(dt) {
    if (this.y === -50) {
        this.reset(200, 400) 
        alert("you win")
       }
       this.checkCollisions()
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(selectedChar), this.x, this.y)
}
Player.prototype.handleInput = function(move) {
    var win  = 0;
if(move === "right" && this.x<400){
    this.x = this.x + 100;
    console.log(this.x)
}
if (move === "left"&& this.x>0) {
    this.x = this.x-100
    console.log(this.x)
}
if(move === "up"&& this.y>-50){
    this.y = this.y - 90
    console.log(this.y)
}
if (move === "down"&& this.y<400) {
    this.y = this.y + 90
    console.log(this.y)
  } 
  
}
Player.prototype.reset = function(x, y) {
        this.x = x
        this.y = y
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});


// yeah it's the same 

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies =[new Enemy(0,70),new Enemy(0,240), new Enemy(0, 140 )]

// Place the player object in a variable called player
var player = new Player(200, 400)

Player.prototype.checkCollisions= function(){
    for (let i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x < this.x + this.width &&
            allEnemies[i].x + allEnemies[i].width > this.x &&
             allEnemies[i].y < this.y + this.height &&
             allEnemies[i].height + allEnemies[i].y > this.y) {
             this.reset(200, 400)
             alert("you lose try again")
          }
    }
    
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

function startGame() {
    if (selectedChar === false) {
        alert('Please select a player');
    }else {
        myFunction()
        Engine(this);
    }
}

function myFunction() {
    var x = document.getElementById("playerss");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }