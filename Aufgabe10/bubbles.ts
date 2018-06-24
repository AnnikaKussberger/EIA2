namespace Animation10 {
    export class Bubble {
        x: number;
        y: number;
        radius: number;

          move(): void {

            this.x += 0;
            this.y -= 2;
            
            if ( this.y < 0 ) {
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



