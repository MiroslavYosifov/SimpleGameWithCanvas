    import { App } from './app.js';

    class Main {
        handleEvent (e) {
            new App().render();
            console.log(e);
        }
    };

    document.addEventListener("DOMContentLoaded", new Main());



    // import { drawPlayground, drawSnake } from './draw/index.js';
    // import { snake } from './move/index.js';
    // let canvas;
    // let canvasContext;

    // let snakeProperties = {
    //     snakeColor: "red",
    //     snakeX: 0,
    //     snakeY: 0,
    //     snakeSizeX: 10,
    //     snakeSizeY: 10,
    //     snakeSpeedX: 10,
    //     snakeSpeedY: 10,
    //     currentDirection: "ArrowRight",
    //     snakeLength: 5
    // };

    // let moveCoordinatesStory = [];
    // let snakeElements = [];

    // (function main () {
    //     canvas = document.getElementById('gameCanvas');
    //     canvasContext = canvas.getContext('2d');

    //     window.onkeydown = function(event) {
    //         moveSnake(snakeElements, event.key);
    //         // console.log(snakeProperties.snakeSpeedX, snakeProperties.snakeSpeedY);
    //     };
    //     // canvas.addEventListener('keypress', moveSnake);

    //     let framePerSecond = 10;

    //     setInterval (() => {
    //         drawPlayground(canvas, canvasContext);
    //         drawSnake(snakeElements , snakeProperties, canvasContext);
    //         moveSnake( snakeElements, null);
    //         // console.log(snakeElements);
    //     }, 1000 / framePerSecond);
        
    // })();
