namespace L11 {
    export class Bubble extends Superclass {

        radius: number;
        constructor(_x: number, _y:number) {
            super(_x,_y);
            this.setRandomPosition();
        }
        setRandomPosition(): void {
            this.x = Math.random() * (100 - 150) + 150;
            this.y = Math.random() * 380;
            this.radius = Math.random() * 5;
            }

            move(): void {

                this.x += 0;
                this.y -= 2;
            
                if( this.y < 0 ) {
                this.y = 350;
            }
        }



        drawBubble(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgba(51, 153, 255,1)";
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            //ctx.stroke();
        }
    }
}



