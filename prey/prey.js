export class Prey {
    constructor(x, y, scale, color) {
        this.x = x;
        this.y = y;
        this.width = scale;
        this.height = scale;
        this.color = color;
        this.canvas = document.getElementById('gameCanvas');
        this.canvasContext = this.canvas.getContext('2d');
    }

    colorRect() {
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };

    setNewLocation() {
        this.x = Math.floor((Math.random() * (600 - 0) + 20) / 20) * 20; //The maximum is inclusive and the minimum is inclusive
        this.y = Math.floor((Math.random() * (600 - 0) + 20) / 20) * 20; //The maximum is inclusive and the minimum is inclusive
        // return Math.round((Math.random() * (max - min) + min) / this.GRID_SIZE) * this.GRID_SIZE
    }

}