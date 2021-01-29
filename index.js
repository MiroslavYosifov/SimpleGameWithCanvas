import { drawPlayground, drawSnake } from './draw/index.js';
import { moveSnake } from './move/index.js';

let canvas;
let canvasContext;

let snakeProperties = {
    snakeColor: "red",
    snakeX: 0,
    snakeY: 0,
    snakeSizeX: 10,
    snakeSizeY: 10,
    snakeSpeedX: 5,
    snakeSpeedY: 5
}

function main () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');


    window.onkeydown = function(event) {
        moveSnake(snakeProperties, event.key);
    };
    // canvas.addEventListener('keypress', moveSnake);

    setInterval (() => {
        drawPlayground(canvas, canvasContext);
        drawSnake( snakeProperties, canvasContext);
        moveSnake( snakeProperties, null);
    }, 1000);
    
}

main();
