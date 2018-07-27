var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    let crc2;
    let ctx;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        drawAir(0, 500);
        drawGras(0, 500);
        drawTrunk(20, 510);
        drawCrown(20, 300);
        //Schleife V�gel
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * 400;
            drawBird(x, y);
        }
        //Schleife Balloon
        for (let i = 0; i < 7; i++) {
            let x = Math.random() * (90 - 200) + 300;
            let y = Math.random() * 400;
            drawBalloon(x, y);
        }
    }
    //ground
    function drawGras(_x, _y) {
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
    function drawAir(_x, _y) {
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
    function drawBird(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgba(255, 255, 77,1)";
        crc2.moveTo(_x, _y);
        crc2.arc(_x - 15, _y, 15, 0, Math.PI, false);
        crc2.bezierCurveTo(_x - 6, _y + 11, _x - 13, _y - 2, _x - 7.5, _y);
        crc2.arc(_x - 2.5, _y, 6, 0, Math.PI, true);
        crc2.fill();
    }
    //balloon
    function drawBalloon(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "rgba(51, 153, 255,1)";
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
    function drawTrunk(_x, _y) {
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
    function drawCrown(_x, _y) {
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
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=canvas.js.map