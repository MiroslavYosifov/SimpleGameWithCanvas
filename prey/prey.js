export class Prey {
    constructor(x, y, gridSize, color) {
        this.gridSize = gridSize;
        this.x = x;
        this.y = y;
        this.width = gridSize;
        this.height = gridSize;
        this.color = color;
        this.canvas = document.getElementById('gameCanvas');
        this.canvasContext = this.canvas.getContext('2d');
    }

    colorRect() {
        this.canvasContext.fillStyle = this.color;
        this.canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };

    setNewLocation() {
        if(this.x === 0) this.x = this.gridSize;
        if(this.y === 0) this.y = this.gridSize;
        this.x = Math.floor((Math.random() * (this.x - this.gridSize) + 0) / this.gridSize) * this.gridSize; //The maximum is inclusive and the minimum is inclusive
        this.y = Math.floor((Math.random() * (this.y - this.gridSize) + 0) / this.gridSize) * this.gridSize; //The maximum is inclusive and the minimum is inclusive
        // return Math.round((Math.random() * (max - min) + min) / this.GRID_SIZE) * this.GRID_SIZE
    }

}