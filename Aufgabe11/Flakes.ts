namespace L11 {
    export class Flake extends Superclass {

        
        stopdropping: number;
        scale: number;

        constructor(_x: number, _y:number) {
            super(_x,_y);
        }
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 10;
        }

        move(): void {

            this.x += 0;

            if (this.y < 600) {
                this.y += 2;
            }

            else if (this.y >= 600) {
                this.y += 0;
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();
        }


    }
}