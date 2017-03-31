/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Furry = __webpack_require__(3);
var Coin = __webpack_require__(2);
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








/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener("DOMContentLoaded", function () {
var Game = __webpack_require__(0);

var game = new Game;
game.startGame();

document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function Coin() {
    this.x = Math.floor(Math.random()*10);
    this.y = Math.floor(Math.random()*10);
}
module.exports = Coin;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}
module.exports = Furry;

/***/ })
/******/ ]);