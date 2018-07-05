var L11;
(function (L11) {
    class BigFish extends L11.Superclass {
        constructor() {
            super();
        }
        move() {
            this.x += 2;
            this.y += 0;
            if (this.x > 640) {
                this.x = -40;
            }
        }
        draw() {
            L11.crc2.beginPath();
            L11.crc2.fillStyle = "rgba(255, 102, 51,1)";
            L11.crc2.moveTo(this.x, this.y);
            L11.crc2.bezierCurveTo(this.x + 20, this.y - 3, this.x + 30, this.y - 20, this.x + 50, this.y);
            L11.crc2.bezierCurveTo(this.x + 30, this.y + 20, this.x + 20, this.y + 3, this.x, this.y);
            L11.crc2.lineTo(this.x - 10, this.y - 10);
            L11.crc2.lineTo(this.x - 10, this.y + 10);
            L11.crc2.lineTo(this.x, this.y);
            L11.crc2.fill();
            //crc2.stroke();
        }
        setRandomPosition() {
            this.x = Math.random() * L11.crc2.canvas.width;
            this.y = Math.random() * L11.crc2.canvas.height;
        }
    }
    L11.BigFish = BigFish;
})(L11 || (L11 = {}));
//# sourceMappingURL=fishes.js.map