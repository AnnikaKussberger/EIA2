namespace Animation10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let ctx: CanvasRenderingContext2D;
    let fishes: BigFish[] = [];
    let bubbles: Bubble[] = [];
    let sfishes: smallFish[] =[];
    let n: number = 8;
    let s: number= 20;
    let b: number = 20;
    let imgData: ImageData;




    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        console.log(ctx);

        
        background();
        
        
        
        //Schleife mehrere groﬂe Fische
        for (let i: number = 0; i < n; i++) {
            let fish: BigFish = new BigFish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishes.push(fish);

        }
        //Schleife mehrere kleine Fische
        for (let i: number = 0; i < s; i++) {
            let sfish: smallFish = new smallFish();
            sfish.x = Math.random() * crc2.canvas.width;
            sfish.y = Math.random() * crc2.canvas.height;
            sfishes.push(sfish);

        }
        //Schleife Bubbles
        for (let i: number = 0; i < b; i++) {
            let bubble: Bubble = new Bubble();
            bubble.x = Math.random() * (100 - 150) + 150;
            bubble.y = Math.random() * 380;
            bubble.radius = Math.random() * 5;
            bubbles.push(bubble);
        }
        
        imgData = crc2.getImageData(0,0,canvas.width,canvas.height);
        animate();

    }
    
    function background(): void{
        drawWater(0, 400);
        drawSand(0, 400);
        //drawSmallFish(230, 200);
        //drawBigFish(100, 300);
        //drawBubble(300, 380, 4);
        drawOctopus(100, 500, 15);
        drawSeagrasOpenRight(70, 400);
        drawSeagrasOpenLeft(240, 400);
        drawSeagrasOpenLeft(290, 390);
        drawRock(360, 430);
        drawTreasureChest(260, 540);
        }
    
    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        crc2.putImageData(imgData,0,0);


        moveObjects();
        drawObjects();
    }
    function moveObjects(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
        for (let i: number = 0; i < sfishes.length; i++) {
            sfishes[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < fishes.length; i++){
            fishes[i].draw();
    }
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].drawBubble();
        }
        for (let i: number = 0; i < sfishes.length; i++) {
            sfishes[i].drawSfish();
        }
    }
     //sand
    function drawSand(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(228,186,138,0.5)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 150, _y - 20, _x + 200, _y - 20, _x + 360, _y);
        crc2.lineTo(_x + 360, _y + 240);
        crc2.lineTo(_x, _y + 240);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
    }

    //water
    function drawWater(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(71,209,144,0.5)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 150, _y - 20, _x + 200, _y - 20, _x + 360, _y);
        crc2.lineTo(_x + 360, _y - 400);
        crc2.lineTo(_x, _y - 400);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
    }

    //Oktopus head
    function drawOctopus(_x: number, _y: number, _radius: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(142, 80, 103,1)";
        crc2.arc(_x, _y, _radius, 0.5 * Math.PI, 1.5 * Math.PI);
        crc2.lineTo(_x + 20, _y - 15);
        crc2.arc(_x + 20, _y, _radius, 1.5 * Math.PI, 0.5 * Math.PI);
        crc2.fill();
        crc2.closePath();

        //Octopus tentacles
        crc2.moveTo(_x, _y + 15);
        crc2.lineTo(_x, _y + 40);
        crc2.moveTo(_x + 22, _y + 15);
        crc2.lineTo(_x + 22, _y + 40);
        crc2.moveTo(_x + 11, _y + 15);
        crc2.lineTo(_x + 11, _y + 40);

        //Octopus Eyes
        crc2.moveTo(_x + 22, _y);
        crc2.arc(_x + 22, _y, 1, 0, Math.PI * 2);
        crc2.stroke();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 1, 0, Math.PI * 2);
        crc2.stroke();
    }


    //seagras open right
    function drawSeagrasOpenRight(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 10, _y - 40, _x - 30, _y - 91, _x + 20, _y - 100);
        crc2.bezierCurveTo(_x - 30, _y - 105, _x - 10, _y - 40, _x - 10, _y);
        crc2.closePath();
        crc2.fill();
        //crc2.stroke 
    }
    //seagras open left
    function drawSeagrasOpenLeft(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 20, _y - 40, _x + 40, _y - 91, _x - 10, _y - 100);
        crc2.bezierCurveTo(_x + 24, _y - 75, _x + 10, _y - 60, _x - 15, _y);
        crc2.closePath();
        crc2.fill();
        //crc2.st 
    }
    //rock
    function drawRock(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(105,105,105,0.6)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 20, _y);
        crc2.lineTo(_x - 50, _y + 10);
        crc2.lineTo(_x - 60, _y + 20);
        crc2.lineTo(_x - 60, _y + 30);
        crc2.lineTo(_x, _y + 30);
        crc2.closePath();
        crc2.fill();
        //crc2.str  
    }
    //box right piece
    function drawTreasureChest(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgba(128,64,0,0.6)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.lineTo(_x + 40, _y + 30);
        crc2.lineTo(_x + 40, _y - 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        //box left piece
        crc2.beginPath();
        crc2.fillStyle = "rgba(128,64,0,0.6)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 60, _y - 10);
        crc2.lineTo(_x - 60, _y + 40);
        crc2.lineTo(_x, _y + 50);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        //Rest Box
        crc2.beginPath();
        crc2.fillStyle = "rgba(128,64,0,0.6)";
        crc2.moveTo(_x - 60, _y - 10);
        crc2.lineTo(_x - 20, _y - 30);
        crc2.lineTo(_x + 40,_y - 20); 
        crc2.lineTo(_x, _y )
        crc2.fill();
        crc2.stroke();
        
        
    }

}