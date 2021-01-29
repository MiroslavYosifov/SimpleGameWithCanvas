import { colorRect } from '../drawUtilities/drawUtilities.js';

export const drawPlayground = (canvas, canvasContext) => {
    colorRect(0, 0, canvas.width, canvas.height, 'black', canvasContext);
}