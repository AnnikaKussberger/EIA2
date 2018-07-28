namespace Abschluss {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let leaves: Leaf[] = [];
    let birds: Bird[] = [];
    let balloons: Balloon[] = [];
    let imgData: ImageData;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        background();




        //Schleife Vögel
        for (let i: number = 0; i < 3; i++) {
            let bird: Bird = new Bird();
            bird.x = Math.random() * crc2.canvas.width;
            bird.y = Math.random() * 400;
            birds.push(bird);

        }

        //Schleife Balloon
        for (let i: number = 0; i < 7; i++) {
            let balloon: Balloon = new Balloon();
            balloon.x = Math.random() * (90 - 200) + 300;
            balloon.y = Math.random() * 400;
            balloons.push(balloon);
        }

        //Schleife Blätter
        for (let i: number = 0; i < 4; i++) {
            let leaf: Leaf = new Leaf();
            leaf.x = Math.random() * (60 - 155) + 127;
            leaf.y = Math.random() * (50 - 280) + 550;
            leaves.push(leaf);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

    }

    function background(): void {
        drawAir(0, 500);
        drawGras(0, 500);
        drawTrunk(20, 510);
        drawCrown(20, 350);
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        crc2.putImageData(imgData, 0, 0);


        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < birds.length; i++) {
            birds[i].move();
        }
        for (let i: number = 0; i < leaves.length; i++) {
            leaves[i].move();
        }
        for (let i: number = 0; i < balloons.length; i++) {
            balloons[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < birds.length; i++) {
            birds[i].draw();
        }
        for (let i: number = 0; i < leaves.length; i++) {
            leaves[i].drawLeaf();
        }
        for (let i: number = 0; i < balloons.length; i++) {
            balloons[i].drawBalloon();
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








}

