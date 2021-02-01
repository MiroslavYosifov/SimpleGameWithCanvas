import { PlayGround } from './playGround/playGround.js';
import { Snake } from './snake/snake.js';
import { Prey } from './prey/prey.js';

const gridSize = 30;
const snakeSize = gridSize * 4;
const playgroundWidth = gridSize * 40;
const playgroundHeight = gridSize * 18;

export class Game {
    constructor () {
        this.playground = new PlayGround(0, 0, playgroundWidth, playgroundHeight, 'black');
        this.snake = new Snake(snakeSize, 0, gridSize);
        this.prey = new Prey(playgroundWidth, playgroundHeight, gridSize, 'red')
    }
    
    render() {
        this.prey.setNewLocation();

        window.addEventListener('keydown', (event) => {
            this.snake.changeDirection(event);
        });
        
        const frames = 10;
        setInterval(() => {
            this.playground.colorRect();
            this.prey.colorRect();
            this.snake.drawSnake();
            if(!this.snake.isDeath()) {
                this.snake.moveSnake();
                if(this.snake.x === this.prey.x && this.snake.y === this.prey.y) {
                    console.log(this.snake.x + ' X ' + this.snake.y + ' DRUGOTO ' + this.prey.x + ' X ' +  this.prey.y);
                    this.prey.setNewLocation();
                    this.snake.updatedSnake();
                }
            }
        }, 1000 / frames);
    }
};