var L11;
(function (L11) {
    class Flake extends L11.Superclass {
        constructor() {
            super();
        }
        move() {
            if (this.y < 600) {
                this.y += 2;
            }
        }
        draw() {
            L11.crc2.beginPath();
            L11.crc2.fillStyle = "rgba(139,69,19,1)";
            L11.crc2.moveTo(this.x, this.y);
            L11.crc2.bezierCurveTo(this.x + 10, this.y - 3, this.x + 20, this.y - 10, this.x + 40, this.y);
            L11.crc2.bezierCurveTo(this.x + 20, this.y + 10, this.x + 10, this.y + 3, this.x, this.y);
            L11.crc2.lineTo(this.x, this.y);
            L11.crc2.fill();
            //crc2.stroke();
            console.log("flakes");
            //ctx.stroke();
        }
    }
    L11.Flake = Flake;
})(L11 || (L11 = {}));
//# sourceMappingURL=Flakes.js.map