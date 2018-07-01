var L11;
(function (L11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let imgData;
    let canvas;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        L11.crc2 = canvas.getContext("2d");
        console.log(L11.crc2);
        canvas.addEventListener("click", insertFlakes);
        L11.background();
        //Schleife mehrere gro�e Fische
        for (let i = 0; i < 8; i++) {
            let fish = new L11.BigFish();
            movingObjects.push(fish);
        }
        /*Schleife mehrere kleine Fische
        for (let i: number = 0; i < s; i++) {
            let sfish: smallFish = new smallFish();
            sfish.x = Math.random() * crc2.canvas.width;
            sfish.y = Math.random() * crc2.canvas.height;
            sfishes.push(sfish);

        }*/
        //Schleife Bubbles
        for (let i = 0; i < 20; i++) {
            let bubble = new L11.Bubble();
            movingObjects.push(bubble);
        }
        imgData = L11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //Futterflocken-Funktion
    function insertFlakes(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        for (let i = 0; i < 3; i++) {
            let flakes = new L11.Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            newPositionX += Math.random() * 30;
            newPositionY += Math.random() * 40;
            newPositionX -= Math.random() * 20;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11.crc2.clearRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        L11.crc2.putImageData(imgData, 0, 0);
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
})(L11 || (L11 = {}));
//# sourceMappingURL=background.js.map