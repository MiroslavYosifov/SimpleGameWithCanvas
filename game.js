import { PlayGround } from './playGround/playGround.js';
import { Snake } from './snake/snake.js';
import { Prey } from './prey/prey.js';
import { Navigation } from './navigation/navigation.js';

const gridSize = 40;
const snakeSize = gridSize * 4;
const playgroundWidth = gridSize * 40;
const playgroundHeight = gridSize * 18;

export class Game {
    constructor (e) {
        this.score = 0;
        this.playground = new PlayGround(0, 0, playgroundWidth, playgroundHeight, 'black');
        this.snake = new Snake(snakeSize, 0, gridSize);
        this.prey = new Prey(playgroundWidth, playgroundHeight, gridSize, 'red');
        this.navigation = new Navigation();
    }
    
    render() {
        this.prey.setNewLocation();
        this.navigation.startGame();
        this.navigation.pauseGame();
        this.navigation.onLoadGame();

        window.addEventListener('keydown', (event) => {
            this.snake.getDirection(event);
        });
        
        const frames = 10;
        setInterval(() => {
            this.playground.colorRect();
            this.prey.colorRect();
            this.snake.drawSnake();

            if(!this.navigation.isGameStarted) {
                if(this.snake.isDeath()) {
                    this.navigation.gameOver();
                } else {
                    if(!this.navigation.isGamePaused) {
                        this.snake.moveSnake();
                            if(this.snake.x === this.prey.x && this.snake.y === this.prey.y) {
                                this.score++;
                                this.navigation.updateScoreElement(this.score);
                                this.prey.setNewLocation();
                                this.snake.updatedSnake();  
                            }
                    };
                }
            };
           
        }, 1000 / frames);
    }
};