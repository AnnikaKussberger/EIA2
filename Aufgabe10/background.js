var Animation10;
(function (Animation10) {
    window.addEventListener("load", init);
    let fishes = [];
    let bubbles = [];
    let n = 8;
    let b = 20;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Animation10.crc2 = canvas.getContext("2d");
        Animation10.ctx = canvas.getContext("2d");
        console.log(Animation10.crc2);
        console.log(Animation10.ctx);
        background();
        //Schleife mehrere gro�e Fische
        for (let i = 0; i < n; i++) {
            let fish = new Animation10.BigFish();
            fish.x = Math.random() * Animation10.crc2.canvas.width;
            fish.y = Math.random() * Animation10.crc2.canvas.height;
            fishes.push(fish);
        }
        //Schleife Bubbles
        for (let i = 0; i < b; i++) {
            let bubble = new Animation10.Bubble();
            bubble.x = Math.random() * (100 - 150) + 150;
            bubble.y = Math.random() * 380;
            bubble.radius = Math.random() * 5;
            bubbles.push(bubble);
        }
        imgData = Animation10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        imgData = Animation10.ctx.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function background() {
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
    function animate() {
        window.setTimeout(animate, 10);
        Animation10.crc2.clearRect(0, 0, Animation10.crc2.canvas.width, Animation10.crc2.canvas.height);
        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        Animation10.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].draw();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].drawBubble();
        }
    }
    //sand
    function drawSand(_x, _y) {
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(228,186,138,0.5)";
        Animation10.crc2.moveTo(_x, _y);
        Animation10.crc2.bezierCurveTo(_x + 150, _y - 20, _x + 200, _y - 20, _x + 360, _y);
        Animation10.crc2.lineTo(_x + 360, _y + 240);
        Animation10.crc2.lineTo(_x, _y + 240);
        Animation10.crc2.closePath();
        //crc2.stroke();
        Animation10.crc2.fill();
    }
    //water
    function drawWater(_x, _y) {
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(71,209,144,0.5)";
        Animation10.crc2.moveTo(_x, _y);
        Animation10.crc2.bezierCurveTo(_x + 150, _y - 20, _x + 200, _y - 20, _x + 360, _y);
        Animation10.crc2.lineTo(_x + 360, _y - 400);
        Animation10.crc2.lineTo(_x, _y - 400);
        Animation10.crc2.closePath();
        //crc2.stroke();
        Animation10.crc2.fill();
    }
    //Oktopus head
    function drawOctopus(_x, _y, _radius) {
        Animation10.ctx.beginPath();
        Animation10.ctx.fillStyle = "rgba(142, 80, 103,1)";
        Animation10.ctx.arc(_x, _y, _radius, 0.5 * Math.PI, 1.5 * Math.PI);
        Animation10.crc2.lineTo(_x + 20, _y - 15);
        Animation10.ctx.arc(_x + 20, _y, _radius, 1.5 * Math.PI, 0.5 * Math.PI);
        Animation10.ctx.fill();
        Animation10.ctx.closePath();
        //Octopus tentacles
        Animation10.crc2.moveTo(_x, _y + 15);
        Animation10.crc2.lineTo(_x, _y + 40);
        Animation10.crc2.moveTo(_x + 22, _y + 15);
        Animation10.crc2.lineTo(_x + 22, _y + 40);
        Animation10.crc2.moveTo(_x + 11, _y + 15);
        Animation10.crc2.lineTo(_x + 11, _y + 40);
        //Octopus Eyes
        Animation10.ctx.moveTo(_x + 22, _y);
        Animation10.ctx.arc(_x + 22, _y, 1, 0, Math.PI * 2);
        Animation10.ctx.stroke();
        Animation10.ctx.moveTo(_x, _y);
        Animation10.ctx.arc(_x, _y, 1, 0, Math.PI * 2);
        Animation10.ctx.stroke();
    }
    //seagras open right
    function drawSeagrasOpenRight(_x, _y) {
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        Animation10.crc2.moveTo(_x, _y);
        Animation10.crc2.bezierCurveTo(_x + 10, _y - 40, _x - 30, _y - 91, _x + 20, _y - 100);
        Animation10.crc2.bezierCurveTo(_x - 30, _y - 105, _x - 10, _y - 40, _x - 10, _y);
        Animation10.crc2.closePath();
        Animation10.crc2.fill();
        //crc2.stroke 
    }
    //seagras open left
    function drawSeagrasOpenLeft(_x, _y) {
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        Animation10.crc2.moveTo(_x, _y);
        Animation10.crc2.bezierCurveTo(_x + 20, _y - 40, _x + 40, _y - 91, _x - 10, _y - 100);
        Animation10.crc2.bezierCurveTo(_x + 24, _y - 75, _x + 10, _y - 60, _x - 15, _y);
        Animation10.crc2.closePath();
        Animation10.crc2.fill();
        //crc2.st 
    }
    //rock
    function drawRock(_x, _y) {
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(105,105,105,0.6)";
        Animation10.crc2.moveTo(_x, _y);
        Animation10.crc2.lineTo(_x - 20, _y);
        Animation10.crc2.lineTo(_x - 50, _y + 10);
        Animation10.crc2.lineTo(_x - 60, _y + 20);
        Animation10.crc2.lineTo(_x - 60, _y + 30);
        Animation10.crc2.lineTo(_x, _y + 30);
        Animation10.crc2.closePath();
        Animation10.crc2.fill();
        //crc2.str  
    }
    //box right piece
    function drawTreasureChest(_x, _y) {
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(128,64,0,0.6)";
        Animation10.crc2.moveTo(_x, _y);
        Animation10.crc2.lineTo(_x, _y + 50);
        Animation10.crc2.lineTo(_x + 40, _y + 30);
        Animation10.crc2.lineTo(_x + 40, _y - 20);
        Animation10.crc2.closePath();
        Animation10.crc2.fill();
        Animation10.crc2.stroke();
        //box left piece
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(128,64,0,0.6)";
        Animation10.crc2.moveTo(_x, _y);
        Animation10.crc2.lineTo(_x - 60, _y - 10);
        Animation10.crc2.lineTo(_x - 60, _y + 40);
        Animation10.crc2.lineTo(_x, _y + 50);
        Animation10.crc2.closePath();
        Animation10.crc2.fill();
        Animation10.crc2.stroke();
        //Rest Box
        Animation10.crc2.beginPath();
        Animation10.crc2.fillStyle = "rgba(128,64,0,0.6)";
        Animation10.crc2.moveTo(_x - 60, _y - 10);
        Animation10.crc2.lineTo(_x - 20, _y - 30);
        Animation10.crc2.lineTo(_x + 40, _y - 20);
        Animation10.crc2.lineTo(_x, _y);
        Animation10.crc2.fill();
        Animation10.crc2.stroke();
    }
})(Animation10 || (Animation10 = {}));
//# sourceMappingURL=background.js.map