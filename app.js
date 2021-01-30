import { PlayGround } from './playGround/playGround.js';
import { Snake } from './snake/snake.js';

export class App {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.snake = new Snake(0, 0, 20);
        this.playground = new PlayGround(0, 0, 600, 600, 'black');
    }
    
    render() {
        window.addEventListener('keydown', (event) => {
            this.snake.changeDirection(event);
        });

        const frames = 10;
        setInterval(() => {
            this.playground.colorRect();
            this.snake.moveSnake();
        }, 1000 / frames);
    }
};