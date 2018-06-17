var Canvas09;
(function (Canvas09) {
    window.addEventListener("load", init);
    let crc2;
    let ctx;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        //crc2.fillStyle = "rgba(255,0,0,0.5)";
        //crc2.fillRect(50, 50, 100, 50);
        drawWater(0, 400);
        drawSand(0, 400);
        drawSmallFish(230, 200);
        drawBigFish(100, 300);
        drawBubble(300, 380, 4);
        drawOctopus(100, 500, 15);
        /*for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawDavidStar(x, y);
           
        }*/
        //sand
        function drawSand(_x, _y) {
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
        function drawWater(_x, _y) {
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
        //fish big
        function drawBigFish(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "rgba(255, 102, 51,1)";
            crc2.moveTo(_x, _y);
            crc2.bezierCurveTo(_x + 20, _y - 3, _x + 30, _y - 20, _x + 50, _y);
            crc2.bezierCurveTo(_x + 30, _y + 20, _x + 20, _y + 3, _x, _y);
            crc2.lineTo(_x - 10, _y - 10);
            crc2.lineTo(_x - 10, _y + 10);
            crc2.lineTo(_x, _y);
            crc2.fill();
            //crc2.stroke();
        }
        //fish small
        function drawSmallFish(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "rgba(255, 51, 51,1)";
            crc2.moveTo(_x, _y);
            crc2.bezierCurveTo(_x + 10, _y - 10, _x + 25, _y - 2, _x + 30, _y);
            crc2.bezierCurveTo(_x + 25, _y + 2, _x + 10, _y + 10, _x, _y);
            crc2.moveTo(_x + 30, _y);
            crc2.lineTo(_x + 35, _y - 5);
            crc2.lineTo(_x + 35, _y + 5);
            crc2.lineTo(_x + 30, _y);
            crc2.fill();
            //crc2.stroke();
        }
        //bubble
        function drawBubble(_x, _y, _radius) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(51, 153, 255,1)";
            ctx.arc(_x, _y, _radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            //ctx.stroke();
        }
        //Oktopus head
        function drawOctopus(_x, _y, _radius) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(142, 80, 103,1)";
            ctx.arc(_x, _y, _radius, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.lineTo(_x + 20, _y - 15);
            ctx.arc(_x + 20, _y, _radius, 1.5 * Math.PI, 0.5 * Math.PI);
            ctx.fill();
            ctx.closePath();
            //Octopus tentacles
            crc2.moveTo(_x, _y + 15);
            crc2.lineTo(_x, _y + 40);
            crc2.moveTo(_x + 22, _y + 15);
            crc2.lineTo(_x + 22, _y + 40);
            crc2.moveTo(_x + 11, _y + 15);
            crc2.lineTo(_x + 11, _y + 40);
            //Octopus Eyes
            ctx.moveTo(_x + 22, _y);
            ctx.arc(_x + 22, _y, 1, 0, Math.PI * 2);
            ctx.stroke();
            ctx.moveTo(_x, _y);
            ctx.arc(_x, _y, 1, 0, Math.PI * 2);
            ctx.stroke();
        }
        //seagras open right
        crc2.beginPath();
        crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        crc2.moveTo(70, 400);
        crc2.bezierCurveTo(60, 340, 40, 309, 90, 300);
        crc2.bezierCurveTo(60, 315, 60, 340, 80, 400);
        crc2.closePath();
        crc2.fill();
        //crc2.stroke()
        //seagras open left
        crc2.beginPath();
        crc2.fillStyle = "rgba(51, 204, 0,0.5)";
        crc2.moveTo(240, 400);
        crc2.bezierCurveTo(260, 360, 280, 309, 230, 300);
        crc2.bezierCurveTo(265, 325, 250, 340, 225, 400);
        crc2.closePath();
        crc2.fill();
        //crc2.stroke()
        //rock
        crc2.beginPath();
        crc2.fillStyle = "rgba(105,105,105,0.6)";
        crc2.moveTo(360, 430);
        crc2.lineTo(340, 430);
        crc2.lineTo(310, 440);
        crc2.lineTo(300, 450);
        crc2.lineTo(300, 460);
        crc2.lineTo(360, 460);
        crc2.closePath;
        crc2.fill();
        //crc2.stroke();
        //box right piece
        crc2.beginPath();
        crc2.fillStyle = "rgba(128,64,0,0.6)";
        crc2.moveTo(260, 540);
        crc2.lineTo(260, 590);
        crc2.lineTo(300, 570);
        crc2.lineTo(300, 520);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //box left piece
        crc2.beginPath();
        crc2.fillStyle = "rgba(128,64,0,0.6)";
        crc2.moveTo(260, 540);
        crc2.lineTo(200, 530);
        crc2.lineTo(200, 580);
        crc2.lineTo(260, 590);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //cover
        ctx.beginPath();
        ctx.fillStyle = "rgba(100,100,100,1)";
        ctx.moveTo(260, 540);
        ctx.arc(260, 520, 20, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.lineTo(200, 490);
        ctx.moveTo(200, 530);
        ctx.arc(200, 510, 20, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
})(Canvas09 || (Canvas09 = {}));
//# sourceMappingURL=Canvas9.js.map