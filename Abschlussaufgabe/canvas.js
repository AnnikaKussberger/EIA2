var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    let leaves = [];
    let birds = [];
    let balloons = [];
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
        console.log(Abschluss.crc2);
        background();
        //Schleife V�gel
        for (let i = 0; i < 3; i++) {
            let bird = new Abschluss.Bird();
            bird.x = Math.random() * Abschluss.crc2.canvas.width;
            bird.y = Math.random() * 400;
            birds.push(bird);
        }
        //Schleife Balloon
        for (let i = 0; i < 5; i++) {
            let balloon = new Abschluss.Balloon();
            balloon.x = Math.random() * (90 - 200) + 300;
            balloon.y = Math.random() * 400;
            balloons.push(balloon);
        }
        //Schleife Bl�tter
        for (let i = 0; i < 4; i++) {
            let leaf = new Abschluss.Leaf();
            leaf.x = Math.random() * (60 - 155) + 127;
            leaf.y = Math.random() * (50 - 280) + 550;
            leaves.push(leaf);
        }
        imgData = Abschluss.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function background() {
        drawAir(0, 500);
        drawGras(0, 500);
        drawTrunk(20, 510);
        drawCrown(20, 350);
    }
    function animate() {
        window.setTimeout(animate, 10);
        Abschluss.crc2.clearRect(0, 0, Abschluss.crc2.canvas.width, Abschluss.crc2.canvas.height);
        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        Abschluss.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < birds.length; i++) {
            birds[i].move();
        }
        for (let i = 0; i < leaves.length; i++) {
            leaves[i].move();
        }
        for (let i = 0; i < balloons.length; i++) {
            balloons[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < birds.length; i++) {
            birds[i].draw();
        }
        for (let i = 0; i < leaves.length; i++) {
            leaves[i].drawLeaf();
        }
        for (let i = 0; i < balloons.length; i++) {
            balloons[i].drawBalloon();
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