var L11;
(function (L11) {
    class BigFish {
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
    }
    L11.BigFish = BigFish;
    class smallFish {
        move() {
            this.x += -2;
            this.y += 0;
            if (this.x > 640) {
                this.x = -40;
            }
        }
        drawSfish() {
            L11.crc2.beginPath();
            L11.crc2.fillStyle = "rgba(255, 51, 51,1)";
            L11.crc2.moveTo(this.x, this.y);
            L11.crc2.bezierCurveTo(this.x + 10, this.y - 10, this.x + 25, this.y - 2, this.x + 30, this.y);
            L11.crc2.bezierCurveTo(this.x + 25, this.y + 2, this.x + 10, this.y + 10, this.x, this.y);
            L11.crc2.moveTo(this.x + 30, this.y);
            L11.crc2.lineTo(this.x + 35, this.y - 5);
            L11.crc2.lineTo(this.x + 35, this.y + 5);
            L11.crc2.lineTo(this.x + 30, this.y);
            L11.crc2.fill();
        }
    }
    L11.smallFish = smallFish;
})(L11 || (L11 = {}));
//# sourceMappingURL=fishes.js.map