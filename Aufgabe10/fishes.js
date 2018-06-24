var Animation10;
(function (Animation10) {
    class BigFish {
        move() {
            this.x += 2;
            this.y += 0;
            if (this.x > 640) {
                this.x = -40;
            }
        }
        draw() {
            Animation10.crc2.beginPath();
            Animation10.crc2.fillStyle = "rgba(255, 102, 51,1)";
            Animation10.crc2.moveTo(this.x, this.y);
            Animation10.crc2.bezierCurveTo(this.x + 20, this.y - 3, this.x + 30, this.y - 20, this.x + 50, this.y);
            Animation10.crc2.bezierCurveTo(this.x + 30, this.y + 20, this.x + 20, this.y + 3, this.x, this.y);
            Animation10.crc2.lineTo(this.x - 10, this.y - 10);
            Animation10.crc2.lineTo(this.x - 10, this.y + 10);
            Animation10.crc2.lineTo(this.x, this.y);
            Animation10.crc2.fill();
            //crc2.stroke();
            /*crc2.beginPath();
            crc2.fillStyle = "rgba(255, 51, 51,1)";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 10, this.y - 10, this.x + 25, this.y - 2, this.x + 30, this.y);
            crc2.bezierCurveTo(this.x + 25, this.y + 2, this.x + 10, this.y + 10, this.x, this.y);
            crc2.moveTo(this.x + 30, this.y);
            crc2.lineTo(this.x + 35, this.y - 5);
            crc2.lineTo(this.x + 35, this.y + 5);
            crc2.lineTo(this.x + 30, this.y);
            crc2.fill();
        //crc2.stro*/
        }
    }
    Animation10.BigFish = BigFish;
})(Animation10 || (Animation10 = {}));
//# sourceMappingURL=fishes.js.map