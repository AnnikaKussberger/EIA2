namespace Abschluss {
    export class Leaf extends Superclass {

        constructor() {
            super();
        }

        move(): void {

            this.x += 0;
            this.y += 2;

            if (this.y < 0) {
                this.y = 350;
            }
        }



        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgba(77, 153, 0,1)";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 20, this.y - 4, this.x + 16, this.y - 16, this.x + 20, this.y - 20);
            crc2.bezierCurveTo(this.x + 20, this.y - 16, this.x - 10, this.y - 20, this.x, this.y);
            crc2.fill();
            //crc2.stroke(); 
        }

        setRandomPosition(): void {
            this.x = Math.random() * (60 - 155) + 127;
            this.y = Math.random() * (50 - 280) + 550;
        }
    }

}
