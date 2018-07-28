var Abschluss;
(function (Abschluss) {
    class Leaf extends Abschluss.Superclass {
        constructor() {
            super();
        }
        move() {
            this.x += 0;
            this.y += 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }
        draw() {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.fillStyle = "rgba(77, 153, 0,1)";
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.bezierCurveTo(this.x + 20, this.y - 4, this.x + 16, this.y - 16, this.x + 20, this.y - 20);
            Abschluss.crc2.bezierCurveTo(this.x + 20, this.y - 16, this.x - 10, this.y - 20, this.x, this.y);
            Abschluss.crc2.fill();
            //crc2.stroke(); 
        }
        setRandomPosition() {
            this.x = Math.random() * (60 - 155) + 127;
            this.y = Math.random() * (50 - 280) + 550;
        }
    }
    Abschluss.Leaf = Leaf;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=leaves.js.map