namespace Aufgabe11 {
    export class Flake extends Superclass {
     
        color: string;
        stopdropping: number;
        scale: number;
        
        constructor(newPositionX: number, newPositionY: number) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.scale = 3;
            this.stopdropping = Math.random() * (220 - 200) + 350;    
        }
        
        setRandomColor(): void {
            let r: number = Math.floor(Math.random() * 3);
            switch (r) {
                case 0:
                    this.color = "#ff1a1a";
                    break;
                case 1:
                    this.color = "#33cc33";
                    break;
                case 2:
                    this.color = "#1a75ff";
            }
        }
        move(): void {
            this.x += 0;
            this.y += 1;

            if (this.y > this.stopdropping) {
                this.y = this.stopdropping;
            }
        }
        
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            //crc2.strokeStyle = "transparent";
            //crc2.stroke(); 
        }
        
        
    }    
}