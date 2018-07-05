var L11;
(function (L11) {
    class Bubble extends L11.Superclass {
        constructor(_x, _y) {
            super(_x, _y);
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * (100 - 150) + 150;
            this.y = Math.random() * 380;
            this.radius = Math.random() * 5;
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }
        drawBubble() {
            L11.crc2.beginPath();
            L11.crc2.fillStyle = "rgba(51, 153, 255,1)";
            L11.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            L11.crc2.closePath();
            L11.crc2.fill();
            //ctx.stroke();
        }
    }
    L11.Bubble = Bubble;
})(L11 || (L11 = {}));
//# sourceMappingURL=bubbles.js.map