namespace Abschluss {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);

        drawAir(0, 500);
        drawGras(0, 500);
        drawBalloon(100,100, 5);
         
        //Schleife Vögel
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawBird(x, y);

        }
        /*Schleife Bubbles
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * (100 - 150) + 150;
            let y: number = Math.random() * 380;
            let r: number = Math.random() * 5;
            drawBubble(x, y, r);
        }*/

        
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

    //bird
    function drawBird(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(255, 255, 77,1)";
        crc2.moveTo(_x, _y);
        crc2.arc(_x - 15, _y, 15, 0, Math.PI, false);
        crc2.bezierCurveTo(_x -6, _y + 11, _x -13, _y - 2, _x -7.5, _y);
        crc2.arc(_x - 2.5, _y, 6, 0, Math.PI, true);
        crc2.fill();
        
    }

    //balloon
    function drawBalloon(_x: number, _y: number, _radius: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(51, 153, 255,1)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x - 20, _y - 14, _x - 23, _y - 35, _x, _y - 40);
        crc2.bezierCurveTo(_x + 23, _y -35, _x + 20, _y - 14, _x, _y);
        crc2.lineTo(99,140);
        crc2.lineTo(101,140);
        crc2.closePath();
        crc2.moveTo(_x,_y);
        crc2.lineTo(97,104);
        crc2.lineTo(103,104);
        crc2.closePath();
        crc2.fill();
        //crc2.stroke();
    }



  

    
    
    
   


}

