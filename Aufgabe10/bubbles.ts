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
            ctx.beginPath();
        ctx.fillStyle = "rgba(51, 153, 255,1)";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        //ctx.stroke();
        }
    }
}



