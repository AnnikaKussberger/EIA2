var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
        console.log(Abschluss.crc2);
        drawAir(0, 500);
        drawGras(0, 500);
        drawTrunk(20, 510);
        drawCrown(20, 350);
        drawLeaf(80, 400);
        //Schleife V�gel
        for (let i = 0; i < 3; i++) {
            let x = Math.random() * Abschluss.crc2.canvas.width;
            let y = Math.random() * 400;
            drawBird(x, y);
        }
        //Schleife Balloon
        for (let i = 0; i < 7; i++) {
            let x = Math.random() * (90 - 200) + 300;
            let y = Math.random() * 400;
            drawBalloon(x, y);
        }
        //Schleife Bl�tter
        for (let i = 0; i < 4; i++) {
            let x = Math.random() * (60 - 155) + 127;
            let y = Math.random() * (50 - 280) + 550;
            drawLeaf(x, y);
        }
    }
    //ground
    function drawGras(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.fillStyle = "rgba(153, 204, 0,0.8)";
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.bezierCurveTo(_x + 100, _y - 20, _x + 220, _y - 60, _x + 500, _y);
        Abschluss.crc2.lineTo(_x + 360, _y + 240);
        Abschluss.crc2.lineTo(_x, _y + 240);
        Abschluss.crc2.closePath();
        Abschluss.crc2.fill();
    }
    //air
    function drawAir(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.fillStyle = "rgba(128, 159, 255,0.5)";
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.bezierCurveTo(_x + 100, _y - 20, _x + 220, _y - 60, _x + 500, _y);
        Abschluss.crc2.lineTo(_x + 360, _y - 500);
        Abschluss.crc2.lineTo(_x, _y - 500);
        Abschluss.crc2.closePath();
        Abschluss.crc2.fill();
    }
    //bird
    function drawBird(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.fillStyle = "rgba(255, 255, 77,1)";
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.arc(_x - 15, _y, 15, 0, Math.PI, false);
        Abschluss.crc2.bezierCurveTo(_x - 6, _y + 11, _x - 13, _y - 2, _x - 7.5, _y);
        Abschluss.crc2.arc(_x - 2.5, _y, 6, 0, Math.PI, true);
        Abschluss.crc2.fill();
    }
    //balloon
    function drawBalloon(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.fillStyle = "rgba(51, 153, 255,1)";
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.bezierCurveTo(_x - 20, _y - 14, _x - 23, _y - 35, _x, _y - 40);
        Abschluss.crc2.bezierCurveTo(_x + 23, _y - 35, _x + 20, _y - 14, _x, _y);
        Abschluss.crc2.lineTo(_x - 1, _y + 40);
        Abschluss.crc2.lineTo(_x + 1, _y + 40);
        Abschluss.crc2.closePath();
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.lineTo(_x - 3, _y + 4);
        Abschluss.crc2.lineTo(_x + 3, _y + 4);
        Abschluss.crc2.closePath();
        Abschluss.crc2.fill();
        //crc2.stroke();
    }
    function drawLeaf(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.fillStyle = "rgba(77, 153, 0,1)";
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.bezierCurveTo(_x + 20, _y - 4, _x + 16, _y - 16, _x + 20, _y - 20);
        Abschluss.crc2.bezierCurveTo(_x + 20, _y - 16, _x - 10, _y - 20, _x, _y);
        Abschluss.crc2.fill();
        //crc2.stroke();    
    }
    function drawTrunk(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.fillStyle = "rgba(179, 89, 0,1)";
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.lineTo(_x, _y - 210);
        Abschluss.crc2.lineTo(_x - 20, _y - 210);
        Abschluss.crc2.lineTo(_x - 20, _y);
        Abschluss.crc2.closePath();
        Abschluss.crc2.fill();
        //crc2.stroke();
    }
    function drawCrown(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.fillStyle = "rgba(77, 153, 0,1)";
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.bezierCurveTo(_x + 50, _y - 10, _x + 30, _y - 30, _x + 50, _y - 40);
        Abschluss.crc2.bezierCurveTo(_x + 100, _y - 30, _x + 80, _y - 80, _x + 100, _y - 80);
        Abschluss.crc2.bezierCurveTo(_x + 100, _y - 80, _x + 150, _y - 100, _x + 80, _y - 150);
        Abschluss.crc2.bezierCurveTo(_x + 14, _y - 170, _x + 30, _y - 220, _x - 20, _y - 200);
        Abschluss.crc2.lineTo(_x - 20, _y);
        Abschluss.crc2.closePath();
        Abschluss.crc2.fill();
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=canvas.js.map