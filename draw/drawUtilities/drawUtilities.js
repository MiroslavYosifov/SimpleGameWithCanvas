export const colorCircle = (leftX, leftY, radius, drawColor, canvasContext) => {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(leftX, leftY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

export const colorRect = (leftX, leftY, width, height, drawColor, canvasContext) => {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, leftY, width, height);
}