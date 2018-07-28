namespace Abschluss {
    export class Bird {
        x: number;
        y: number;

        move(): void {

            this.x += 2;
            this.y += 0;

            if (this.x > 640) {
                this.x = -40;
            }
        }



        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgba(255, 255, 77,1)";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x - 15, this.y, 15, 0, Math.PI, false);
            crc2.bezierCurveTo(this.x - 6, this.y + 11, this.x - 13, this.y - 2, this.x - 7.5, this.y);
            crc2.arc(this.x - 2.5, this.y, 6, 0, Math.PI, true);
            crc2.fill();

        }
    }
}



