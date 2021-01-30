import { PlayGround } from './playGround/playGround.js';
import { Snake } from './snake/snake.js';

export class App {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.snake = new Snake(5, 5, 10, 10);
        this.playground = new PlayGround(0, 0, 600, 600, 'black');
        console.log('tuk sym11111');
    }
    
    render() {
        window.addEventListener('keydown', (event) => {
            this.snake.changeDirection(event);
        });
        const frames = 30;
        setInterval(() => {
            this.playground.colorRect();
            this.snake.moveSnake();
        }, 1000 / frames);
    }
};


        // let framePerSecond = 10;
        
        // setInterval (() => {
        //     // drawPlayground(canvas, canvasContext);
        //     // drawSnake(snakeElements , snakeProperties, canvasContext);
        //     // moveSnake( snakeElements, null);
        //     // console.log(snakeElements);
        // }, 1000 / framePerSecond);     