var L11;
(function (L11) {
    class Flake extends L11.Superclass {
        constructor(_x, _y) {
            super(_x, _y);
        }
        setRandomPosition() {
            this.x = Math.random() * L11.crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 10;
        }
        move() {
            this.x += 0;
            if (this.y < 600) {
                this.y += 2;
            }
            else if (this.y >= 600) {
                this.y += 0;
            }
        }
        draw() {
            L11.crc2.fillStyle = this.color;
            L11.crc2.beginPath();
            L11.crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            L11.crc2.closePath();
            L11.crc2.fill();
        }
    }
    L11.Flake = Flake;
})(L11 || (L11 = {}));
//# sourceMappingURL=Flakes.js.map