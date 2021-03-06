namespace Animation10 {
    export class BigFish {
        x: number;
        y: number;

         move(): void {

            this.x += 2;
            this.y += 0;

            if ( this.x > 640 ) {
                this.x = -40;
            }
}



        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgba(255, 102, 51,1)";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 20, this.y - 3, this.x + 30, this.y - 20, this.x + 50, this.y);
            crc2.bezierCurveTo(this.x + 30, this.y + 20, this.x + 20, this.y + 3, this.x, this.y);
            crc2.lineTo(this.x - 10, this.y - 10);
            crc2.lineTo(this.x - 10, this.y + 10);
            crc2.lineTo(this.x, this.y);
            crc2.fill();
            //crc2.stroke();
            
        }
    }
    
    export class smallFish {
               
        x: number;
        y: number;


        move(): void {

            this.x += -2;
            this.y += 0;

            if ( this.x > 640 ) {
                this.x = -40;
            }
}

        drawSfish(): void {           //Methoden Fähigkeiten
            crc2.beginPath();
            crc2.fillStyle = "rgba(255, 51, 51,1)";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 10, this.y - 10, this.x + 25, this.y - 2, this.x + 30, this.y);
            crc2.bezierCurveTo(this.x + 25, this.y + 2, this.x + 10, this.y + 10, this.x, this.y);
            crc2.moveTo(this.x + 30, this.y);
            crc2.lineTo(this.x + 35, this.y - 5);
            crc2.lineTo(this.x + 35, this.y + 5);
            crc2.lineTo(this.x + 30, this.y);
            crc2.fill();
        }

}
}

