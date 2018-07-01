var L11;
(function (L11) {
    class Flake extends L11.Superclass {
        constructor(newPositionX, newPositionY) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.scale = 3;
            this.stopdropping = Math.random() * (220 - 200) + 350;
        }
        setRandomColor() {
            let r = Math.floor(Math.random() * 3);
            switch (r) {
                case 0:
                    this.color = "#ff1a1a";
                    break;
                case 1:
                    this.color = "#33cc33";
                    break;
                case 2:
                    this.color = "#1a75ff";
            }
        }
        move() {
            this.x += 0;
            this.y += 1;
            if (this.y > this.stopdropping) {
                this.y = this.stopdropping;
            }
        }
        draw() {
            L11.crc2.fillStyle = this.color;
            L11.crc2.beginPath();
            L11.crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            L11.crc2.closePath();
            L11.crc2.fill();
            //crc2.strokeStyle = "transparent";
            //crc2.stroke(); 
        }
    }
    L11.Flake = Flake;
})(L11 || (L11 = {}));
//# sourceMappingURL=Flakes.js.map