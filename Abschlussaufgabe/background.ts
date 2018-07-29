namespace Abschluss {

    export function background(): void {
        drawAir(0, 500);
        drawGras(0, 500);
        drawTrunk(20, 510);
        drawCrown(20, 350);
       // drawBalloon(250, 420);
        drawKid(230, 450);
        
        for (let i: number = 0; i < 3; i++) {
            let x: number = Math.random() * (100 - 180) + 310;
            let y: number = Math.random() * (100 - 150) + 450;
            drawBalloon(x, y);

        }
    }



    //ground
    function drawGras(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(153, 204, 0,0.8)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 100, _y - 20, _x + 220, _y - 60, _x + 500, _y);
        crc2.lineTo(_x + 360, _y + 240);
        crc2.lineTo(_x, _y + 240);
        crc2.closePath();
        crc2.fill();
    }

    //air
    function drawAir(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(128, 159, 255,0.5)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 100, _y - 20, _x + 220, _y - 60, _x + 500, _y);
        crc2.lineTo(_x + 360, _y - 500);
        crc2.lineTo(_x, _y - 500);
        crc2.closePath();
        crc2.fill();
        
    }


    function drawTrunk(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(179, 89, 0,1)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 210);
        crc2.lineTo(_x - 20, _y - 210);
        crc2.lineTo(_x - 20, _y);
        crc2.closePath();
        crc2.fill();
        //crc2.stroke();
    }

    function drawCrown(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(77, 153, 0,1)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 50, _y - 10, _x + 30, _y - 30, _x + 50, _y - 40);
        crc2.bezierCurveTo(_x + 100, _y - 30, _x + 80, _y - 80, _x + 100, _y - 80);
        crc2.bezierCurveTo(_x + 100, _y - 80, _x + 150, _y - 100, _x + 80, _y - 150);
        crc2.bezierCurveTo(_x + 14, _y - 170, _x + 30, _y - 220, _x - 20, _y - 200);
        crc2.lineTo(_x - 20, _y);
        crc2.closePath();
        crc2.fill();
    }

    function drawBalloon(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(255, 153, 0, 1)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x - 20, _y - 14, _x - 23, _y - 35, _x, _y - 40);
        crc2.bezierCurveTo(_x + 23, _y - 35, _x + 20, _y - 14, _x, _y);
        crc2.lineTo(_x - 1, _y + 40);
        crc2.lineTo(_x + 1, _y + 40);
        crc2.closePath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 3, _y + 4);
        crc2.lineTo(_x + 3, _y + 4);
        crc2.closePath();
        crc2.fill();
        //crc2.stroke();
    }
    function drawKid(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(255, 77, 77, 1)";
        crc2.moveTo(_x,_y);
        crc2.arc(_x - 15, _y, 15, 0, Math.PI * 2);
        crc2.moveTo(_x - 15,_y + 15);
        crc2.lineTo(_x - 34, _y + 70);
        crc2.lineTo(_x + 4, _y + 70);
        crc2.closePath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x - 25, _y + 75, 5, 0, Math.PI * 2);
        crc2.moveTo(_x - 5, _y + 75);
        crc2.arc(_x - 5, _y + 75, 5, 0, Math.PI * 2);
        crc2.moveTo(_x - 8, _y + 38);
        crc2.lineTo(_x + 20, _y - 5);
        crc2.lineTo(_x + 20, _y +2);
        crc2.lineTo(_x - 8, _y + 41);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
        
        } 
    
    
    
    }
