var Abschluss;
(function (Abschluss) {
    class Leaf {
        move() {
            this.x += 0;
            this.y += 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }
        drawLeaf() {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.fillStyle = "rgba(77, 153, 0,1)";
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.bezierCurveTo(this.x + 20, this.y - 4, this.x + 16, this.y - 16, this.x + 20, this.y - 20);
            Abschluss.crc2.bezierCurveTo(this.x + 20, this.y - 16, this.x - 10, this.y - 20, this.x, this.y);
            Abschluss.crc2.fill();
            //crc2.stroke(); 
        }
    }
    Abschluss.Leaf = Leaf;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=leaves.js.map