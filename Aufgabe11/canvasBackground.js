var L11;
(function (L11) {
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
    L11.background = background;
    //sand
    function drawSand(_x, _y) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(228,186,138,0.5)";
        L11.crc2.moveTo(_x, _y);
        L11.crc2.bezierCurveTo(_x + 150, _y - 20, _x + 200, _y - 20, _x + 360, _y);
        L11.crc2.lineTo(_x + 360, _y + 240);
        L11.crc2.lineTo(_x, _y + 240);
        L11.crc2.closePath();
        //crc2.stroke();
        L11.crc2.fill();
    }
    //water
    function drawWater(_x, _y) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(71,209,144,0.5)";
        L11.crc2.moveTo(_x, _y);
        L11.crc2.bezierCurveTo(_x + 150, _y - 20, _x + 200, _y - 20, _x + 360, _y);
        L11.crc2.lineTo(_x + 360, _y - 400);
        L11.crc2.lineTo(_x, _y - 400);
        L11.crc2.closePath();
        //crc2.stroke();
        L11.crc2.fill();
    }
    //Oktopus head
    function drawOctopus(_x, _y, _radius) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(142, 80, 103,1)";
        L11.crc2.arc(_x, _y, _radius, 0.5 * Math.PI, 1.5 * Math.PI);
        L11.crc2.lineTo(_x + 20, _y - 15);
        L11.crc2.arc(_x + 20, _y, _radius, 1.5 * Math.PI, 0.5 * Math.PI);
        L11.crc2.fill();
        L11.crc2.closePath();
        //Octopus tentacles
        L11.crc2.moveTo(_x, _y + 15);
        L11.crc2.lineTo(_x, _y + 40);
        L11.crc2.moveTo(_x + 22, _y + 15);
        L11.crc2.lineTo(_x + 22, _y + 40);
        L11.crc2.moveTo(_x + 11, _y + 15);
        L11.crc2.lineTo(_x + 11, _y + 40);
        //Octopus Eyes
        L11.crc2.moveTo(_x + 22, _y);
        L11.crc2.arc(_x + 22, _y, 1, 0, Math.PI * 2);
        L11.crc2.stroke();
        L11.crc2.moveTo(_x, _y);
        L11.crc2.arc(_x, _y, 1, 0, Math.PI * 2);
        L11.crc2.stroke();
    }
    //seagras open right
    function drawSeagrasOpenRight(_x, _y) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        L11.crc2.moveTo(_x, _y);
        L11.crc2.bezierCurveTo(_x + 10, _y - 40, _x - 30, _y - 91, _x + 20, _y - 100);
        L11.crc2.bezierCurveTo(_x - 30, _y - 105, _x - 10, _y - 40, _x - 10, _y);
        L11.crc2.closePath();
        L11.crc2.fill();
        //crc2.stroke 
    }
    //seagras open left
    function drawSeagrasOpenLeft(_x, _y) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        L11.crc2.moveTo(_x, _y);
        L11.crc2.bezierCurveTo(_x + 20, _y - 40, _x + 40, _y - 91, _x - 10, _y - 100);
        L11.crc2.bezierCurveTo(_x + 24, _y - 75, _x + 10, _y - 60, _x - 15, _y);
        L11.crc2.closePath();
        L11.crc2.fill();
        //crc2.st 
    }
    //rock
    function drawRock(_x, _y) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(105,105,105,0.6)";
        L11.crc2.moveTo(_x, _y);
        L11.crc2.lineTo(_x - 20, _y);
        L11.crc2.lineTo(_x - 50, _y + 10);
        L11.crc2.lineTo(_x - 60, _y + 20);
        L11.crc2.lineTo(_x - 60, _y + 30);
        L11.crc2.lineTo(_x, _y + 30);
        L11.crc2.closePath();
        L11.crc2.fill();
        //crc2.str  
    }
    //box right piece
    function drawTreasureChest(_x, _y) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(128,64,0,0.6)";
        L11.crc2.moveTo(_x, _y);
        L11.crc2.lineTo(_x, _y + 50);
        L11.crc2.lineTo(_x + 40, _y + 30);
        L11.crc2.lineTo(_x + 40, _y - 20);
        L11.crc2.closePath();
        L11.crc2.fill();
        L11.crc2.stroke();
        //box left piece
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(128,64,0,0.6)";
        L11.crc2.moveTo(_x, _y);
        L11.crc2.lineTo(_x - 60, _y - 10);
        L11.crc2.lineTo(_x - 60, _y + 40);
        L11.crc2.lineTo(_x, _y + 50);
        L11.crc2.closePath();
        L11.crc2.fill();
        L11.crc2.stroke();
        //Rest Box
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgba(128,64,0,0.6)";
        L11.crc2.moveTo(_x - 60, _y - 10);
        L11.crc2.lineTo(_x - 20, _y - 30);
        L11.crc2.lineTo(_x + 40, _y - 20);
        L11.crc2.lineTo(_x, _y);
        L11.crc2.fill();
        L11.crc2.stroke();
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=canvasBackground.js.map