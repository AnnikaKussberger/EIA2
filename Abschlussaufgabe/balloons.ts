namespace Abschluss {
    export class Balloon {
        x: number;
        y: number;


        move(): void {

            this.x += 0;
            this.y -= 2;

            if (this.y < 0) {
                this.y = 350;
            }
        }



        drawBalloon(): void {
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
    }
}



