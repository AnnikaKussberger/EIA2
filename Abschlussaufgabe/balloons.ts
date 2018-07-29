namespace Abschluss {
    export class Balloon extends Superclass {

        constructor() {
            super();
        }

        move(): void {

            this.x += 0;
            this.y -= 1;

            if (this.y < 0) {
                this.y = 350;
            }
        }



        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgba(51, 153, 255,1)";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x - 20, this.y - 14, this.x - 23, this.y - 35, this.x, this.y - 40);
            crc2.bezierCurveTo(this.x + 23, this.y - 35, this.x + 20, this.y - 14, this.x, this.y);
            crc2.lineTo(this.x - 1, this.y + 40);
            crc2.lineTo(this.x + 1, this.y + 40);
            crc2.closePath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 3, this.y + 4);
            crc2.lineTo(this.x + 3, this.y + 4);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();
        }

        setRandomPosition(): void {

            this.x = Math.random() * (90 - 200) + 300;
            this.y = Math.random() * 400;



        }
        
        takePosition(): void {
            this.positionX = this.x;
            this.positionY = this.y;
        }



    }
}