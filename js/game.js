var Furry = require("./furry.js");
var Coin = require("./coin.js");
var Game = function() {
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.ashes = new Coin();
    this.rocks = new Coin();
    this.score = 0;
    this.scoreBoard = document.querySelector("#score strong");
    this.index = function(x,y) {
        return x + (y * 10);
    }
    var self = this;
    this.showFurry = function() {
        this.board[this.index(this.furry.x,this.furry.y)].classList.add('furry');
    }
    this.hideVisibleFurry = function() {
        this.clone = document.querySelector(".furry").classList.remove("furry");
    }
    this.showCoin = function() {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }
    this.showAshes = function() {
        this.board[ this.index(this.ashes.x,this.ashes.y) ].classList.add('coal');
    }
    this.showRocks = function() {
        this.board[ this.index(this.rocks.x,this.rocks.y) ].classList.add('rock');
    }
    this.moveFurry = function(){
        if(self.furry.direction === "right"){
            self.furry.x++;
        } else if(self.furry.direction === "left") {
            self.furry.x--;
        } else if(self.furry.direction === "up") {
            self.furry.y--;
        } else if(self.furry.direction === "down") {
            self.furry.y++;
        }
        self.gameOver();
        self.hideVisibleFurry();
        self.showFurry();
        self.checkCoinCollision();
    }
    this.turnFurry = function(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    }
    this.checkCoinCollision = function() {
        if( this.furry.x == this.coin.x && this.furry.y == this.coin.y){
            this.coinPicked = document.querySelector(".coin").classList.remove("coin");
            this.score += 3;
            this.scoreBoard.innerText = (this.score);
            this.coin = new Coin;
            this.showCoin();
        }
        if( this.furry.x == this.ashes.x && this.furry.y == this.ashes.y){
            this.ashesPicked = document.querySelector(".coal").classList.remove("coal");
            this.score++;
            this.scoreBoard.innerText = (this.score);
            this.ashes = new Coin;
            this.showAshes();
        }
        if( this.furry.x == this.rocks.x && this.furry.y == this.rocks.y){
            this.rocksPicked = document.querySelector(".rock").classList.remove("rock");
            this.score += 2;
            this.scoreBoard.innerText = (this.score);
            this.rocks = new Coin;
            this.showRocks();
        }
    }
    this.gameOver = function() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
            this.hideVisibleFurry();
            clearInterval(this.idSetInrerval);
            this.gemeOverText = document.getElementById("board").innerText = "GAME OVER \n twój wynik \n" + this.score + "pkt";
            this.scoreBoard = document.getElementById("score").classList.add('invisible');
        }
    }
    this.startGame = function () {
        this.showFurry();
        this.showCoin();
        this.showRocks();
        this.showAshes();
        this.idSetInrerval = setInterval(this.moveFurry, 250);
    }
}
module.exports = Game;






