var Abschluss;
(function (Abschluss) {
    function background() {
        drawAir(0, 500);
        drawGras(0, 500);
        drawTrunk(20, 510);
        drawCrown(20, 350);
        drawBalloon(250, 480);
        drawKid(230, 450);
    }
    Abschluss.background = background;
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
    function drawKid(_x, _y) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.arc(_x - 15, _y, 15, 0, Math.PI * 2);
        Abschluss.crc2.moveTo(_x - 15, _y + 15);
        Abschluss.crc2.lineTo(_x - 34, _y + 70);
        Abschluss.crc2.lineTo(_x + 4, _y + 70);
        Abschluss.crc2.closePath();
        Abschluss.crc2.moveTo(_x, _y);
        Abschluss.crc2.stroke();
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=background.js.map