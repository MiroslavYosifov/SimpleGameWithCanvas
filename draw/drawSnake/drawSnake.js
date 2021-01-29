import { colorRect } from '../drawUtilities/drawUtilities.js';

export const drawSnake = (snakeProperties, canvasContext) => {
    colorRect(
        snakeProperties.snakeX, 
        snakeProperties.snakeY, 
        snakeProperties.snakeSizeX, 
        snakeProperties.snakeSizeY, 
        snakeProperties.snakeColor, 
        canvasContext);
}