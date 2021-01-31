import { PlayGround } from './playGround/playGround.js';
import { Snake } from './snake/snake.js';
import { Prey } from './prey/prey.js';

export class App {
    constructor () {
        this.playground = new PlayGround(0, 0, 600, 600, 'black');
        this.snake = new Snake(0, 0, 20);
        this.prey = new Prey(20, 580, 20, 'red')
    }
    
    render() {
        window.addEventListener('keydown', (event) => {
            this.snake.changeDirection(event);
        });

        const frames = 10;
        setInterval(() => {
            this.playground.colorRect();
            this.prey.colorRect()
            this.snake.moveSnake();

            if(this.snake.x === this.prey.x && this.snake.y === this.prey.y) {
                this.prey.setNewLocation();
                this.snake.updatedSnake()
            }
        }, 1000 / frames);
    }
};