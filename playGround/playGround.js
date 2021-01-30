export class PlayGround {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('gameCanvas');
        this.canvasContext = this.canvas.getContext('2d');
    }

    colorRect() {
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };
}