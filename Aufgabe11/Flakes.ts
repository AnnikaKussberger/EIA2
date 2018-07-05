namespace L11 {
    export class Flake extends Superclass {

        
        stopdropping: number;
        scale: number;

        constructor() {
            super();
        }

        move(): void {

           

            if (this.y < 600) {
                this.y += 2;
            }

      
        }

        draw(): void {
           crc2.beginPath();
            crc2.fillStyle = "rgba(139,69,19,1)";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 10, this.y - 3, this.x + 20, this.y - 10, this.x + 40, this.y);
            crc2.bezierCurveTo(this.x + 20, this.y + 10, this.x + 10, this.y + 3, this.x, this.y);
            crc2.lineTo(this.x, this.y);
            crc2.fill();
            //crc2.stroke();
            console.log("flakes");
            //ctx.stroke();
        }


    }
}