var Abschluss;
(function (Abschluss) {
    class Bird extends Abschluss.Superclass {
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
            Abschluss.crc2.beginPath();
            Abschluss.crc2.fillStyle = "rgba(255, 255, 77,1)";
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.arc(this.x - 15, this.y, 15, 0, Math.PI, false);
            Abschluss.crc2.bezierCurveTo(this.x - 6, this.y + 11, this.x - 13, this.y - 2, this.x - 7.5, this.y);
            Abschluss.crc2.arc(this.x - 2.5, this.y, 6, 0, Math.PI, true);
            Abschluss.crc2.fill();
        }
        setRandomPosition() {
            this.x = Math.random() * Abschluss.crc2.canvas.width;
            this.y = Math.random() * 400;
        }
    }
    Abschluss.Bird = Bird;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=birds.js.map