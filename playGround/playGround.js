export class PlayGround {
    constructor(x, y, width, height, color) {
        this.fieldX = x;
        this.fieldY = y;
        this.fieldWidth = width;
        this.fieldHeight = height;
        this.color = color;
        this.canvas = document.getElementById('gameCanvas');
        this.canvasContext = this.canvas.getContext('2d');
    }

    colorRect() {
        this.canvas.width = this.fieldWidth;
        this.canvas.height = this.fieldHeight;
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.fillRect(this.fieldX, this.fieldY, this.fieldWidth, this.fieldHeight);
    };
}