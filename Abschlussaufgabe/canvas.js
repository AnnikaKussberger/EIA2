var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let imgData;
    let canvas;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
        console.log(Abschluss.crc2);
        //canvas.addEventListener("click",)
        console.log(movingObjects);
        Abschluss.background();
        //Schleife V�gel
        for (let i = 0; i < 3; i++) {
            let bird = new Abschluss.Bird();
            movingObjects.push(bird);
        }
        //Schleife Balloon
        for (let i = 0; i < 5; i++) {
            let balloon = new Abschluss.Balloon();
            movingObjects.push(balloon);
        }
        //Schleife Bl�tter
        for (let i = 0; i < 4; i++) {
            let leaf = new Abschluss.Leaf();
            movingObjects.push(leaf);
        }
        imgData = Abschluss.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
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
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=canvas.js.map