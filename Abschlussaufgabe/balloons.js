var Abschluss;
(function (Abschluss) {
    class Balloon extends Abschluss.Superclass {
        constructor() {
            super();
        }
        move() {
            this.x += 0;
            this.y -= 1;
            if (this.y < 0) {
                this.y = 350;
            }
        }
        draw() {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.fillStyle = "rgba(51, 153, 255,1)";
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.bezierCurveTo(this.x - 20, this.y - 14, this.x - 23, this.y - 35, this.x, this.y - 40);
            Abschluss.crc2.bezierCurveTo(this.x + 23, this.y - 35, this.x + 20, this.y - 14, this.x, this.y);
            Abschluss.crc2.lineTo(this.x - 1, this.y + 40);
            Abschluss.crc2.lineTo(this.x + 1, this.y + 40);
            Abschluss.crc2.closePath();
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.lineTo(this.x - 3, this.y + 4);
            Abschluss.crc2.lineTo(this.x + 3, this.y + 4);
            Abschluss.crc2.closePath();
            Abschluss.crc2.fill();
            //crc2.stroke();
        }
        setRandomPosition() {
            this.x = Math.random() * (90 - 200) + 300;
            this.y = Math.random() * 400;
        }
    }
    Abschluss.Balloon = Balloon;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=balloons.js.map